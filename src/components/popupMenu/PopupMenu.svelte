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
  import ArticleLayuout from "@components/ArticleLayuout.svelte";

  export let season;

  const { stats, social, years} = season;

  const {jugadors, resultats, classificacio, divisio} = stats;

  const yearsArr = years.split('/');

console.log('divisio', yearsArr);

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
        {#each jugadors as jugador}
          <PlayerCard {jugador} />
        {/each}
      </ul>
    {:else if $display === "resultats"}
    <div  class='descarrega-button'>

      <a href={`https://historiabasquetgranollers.cat/data/stats/19${yearsArr[0]}-${yearsArr[1]}_stats.xlsx`} target='_blank'>
        DESCARREGAR
      </a>
    </div>
  <div class='table-wrapper'>

    <div>
      <ResultsTable {resultats} competition={divisio[0].lliga ? divisio[0].lliga : divisio[0]['Divisió'] ? divisio[0]['Divisió'] :''} />
        </div>
        {#if season.stats.resultatsCopaDelRey !== undefined}
        <div>
          <ResultsTable resultats={season.stats.resultatsCopaDelRey} competition={'Copa del Rey'} />
        </div>
        {/if}
        <div>
          <ClassificationTable {classificacio} competition={divisio[0].lliga ? divisio[0].lliga : divisio[0]['Divisió'] ? divisio[0]['Divisió'] :''}/>
        </div>
        
      </div>
    
      {:else if $display === "social"}
      <ArticleLayuout text={social} title={`Te'n recordes 19${years.split('/')[0].toString()}?`}/>
      <!-- <Social {social} year={years.split('/')[0].toString()}/> -->
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

  .descarrega-button {
    padding-block: 2rem;
  }
  .players-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    width: 100%;
  }

  .table-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
  }
  
  a {
     margin: auto;
    text-decoration: none;
    padding-bottom: 0.1rem;
    display: grid;
    place-items: center;
    height: var(--hg-btn);
    width: 11.5rem;
    border: 1px solid var(--clr-accent);
    background-color: var(--clr-contrast-opacity);
    color: var(--clr-accent);
    border-radius: 1.75rem;
    font-weight: var(--fnt-wg-regular);
    /* opacity: 0.7; */
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
      
  }

  a:active {
    transform: scale(0.95);
  }

  a:hover {
    cursor: pointer;
    background-color: var(--clr-accent);
    color: var(--clr-contrast);
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
