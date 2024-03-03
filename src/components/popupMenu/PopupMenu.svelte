<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import { PLAYERS, SCORES, SEASON_STANDINGS } from "@data/globalConstants";
  import PlayerCard from "./players/PlayerCard.svelte";
  import ResultsTable from "./results/ResultsTable.svelte";
  import ClassificationTable from "./results/ClassificationTable.svelte";
  import Social from "./Social.svelte";

  export let season;

  console.log('seasoniiii', season);


  // console.timeLog('season', seson);
  function handleEscape(e) {
    if (e.key === "Escape") {
      if ($display === "relats") return;
      display.set("relats");
    }
  }
</script>

<svelte:window on:keydown={handleEscape} />
<section
  class="more-info-menu"
  style={$display === "resultats" && "background-color: #F3F3F3"}
  in:slide={{ duration: 300, axis: "x" }}
>
  <header class="menu-header">
    <h2>
      <span style="color: var(--clr-accent)"
        >{$display === 'resultats' ? `${upperCaseFirstLetter($display)} i Classificació`: upperCaseFirstLetter($display)}</span
      >
      Temporada {season.years}
    </h2>
    <button on:click={() => display.set("relats")}><svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M13.5781 36.7332L36.7331 13.5782" stroke="white" stroke-width="3" stroke-linecap="round"/> <path d="M36.7319 36.7332L13.5769 13.5782" stroke="white" stroke-width="3" stroke-linecap="round"/> <circle cx="25.5" cy="25.5002" r="24.5" stroke="white" stroke-width="2"/> </svg></button
    >
  </header>
  <div class="menu-container">
    {#if $display === "jugadors"}
      <ul class="players-container">
        {#each season.stats.jugadors as player}
          <PlayerCard {player} />
        {/each}
      </ul>
    {:else if $display === "resultats"}
      <div class="stats-container">
        <div>
          <ResultsTable resultats={season.stats.resultats} competition={season.stats.divisio[0].lliga} />
        </div>
        {#if season.stats.resultatsCopaDelRey !== undefined}
        <div>
          <ResultsTable resultats={season.stats.resultatsCopaDelRey} competition={'Copa del Rey'} />
        </div>
        {/if}
        <div>
          <ClassificationTable classificacio={season.stats.classificacio} competition={season.stats.divisio[0].lliga}/>
        </div>
      </div>
    {:else if $display === "social"}
    <Social/>
      {/if}
    
  </div>
</section>

<style>
  h2 {
    font-size: 0.875rem;
    font-size: clamp(
      0.875rem,
      0.09093637454982006rem + 2.641056422569027vw,
      2.25rem
    );
    font-weight: var(--fnt-wg-regular);
  }

  svg {
    width: 1.5625rem;
width: clamp(1.5625rem, 0.6358793517406963rem + 3.12124849939976vw, 3.1875rem);
  }
  .more-info-menu {
    --hg-header-menu: calc(var(--hg-header) + 1rem);
    --mg-left-top-header: 1rem;
    position: absolute;
    min-height: 100%;
    width: 100%;
    margin: 0;
    background-color: var(--clr-contrast);
    z-index: 10;
    overflow-x: hidden;
    /* overflow: hidden; */
  }

  .menu-container {
    padding-block: 1rem;
    max-width: var(--wd-regular);
    padding-inline: var(--pd-x);
    margin: auto;
    min-height: calc(100% - var(--hg-header-menu) - var(--mg-left-top-header));
  }

  .menu-header {
    background-color: var(--clr-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: var(--pd-x);
    height: var(--hg-header-menu);
    /* margin-top: var(--mg-left-top-header); */
    /* margin-left: var(--mg-left-top-header); */
  }

  .players-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    width: 100%;
  }

  .stats-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
  }

   @media (max-width: 1065px) {
    .menu-container, .menu-header{
      padding-inline: var(--pd-x-medium);
    }
  }

 
  @media (max-width: 648px) {
    .more-info-menu {
      --hg-header-menu: 4.25rem;
    }
    .menu-header {
      padding-inline: var(--pd-x-small);
    }
    .menu-container {
      padding-inline: var(--pd-x-small);
      font-size: 0.625rem;
    }
  }
</style>
