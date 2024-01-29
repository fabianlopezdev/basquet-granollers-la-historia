<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import { PLAYERS, SCORES, SEASON_STANDINGS } from "@data/globalConstants";
  import PlayerCard from "./players/PlayerCard.svelte";
  import ResultsTable from "./results/ResultsTable.svelte";
  import ClassificationTable from "./results/ClassificationTable.svelte";

  export let SEASONS_INFO;

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
        >{upperCaseFirstLetter($display)}</span
      >
      Temporada {SEASONS_INFO.name}
    </h2>
    <button on:click={() => display.set("relats")}>{@html closeMenuIcon}</button
    >
  </header>
  <div class="menu-container">
    {#if $display === "jugadors"}
      <ul class="players-container">
        {#each PLAYERS as player}
          <PlayerCard {player} />
        {/each}
      </ul>
    {:else if $display === "resultats"}
      <div class="stats-container">
        <div>
          <ResultsTable {SCORES} />
        </div>
        <div>
          <ClassificationTable {SEASON_STANDINGS} />
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .more-info-menu {
    --hg-header-menu: 8.25rem;
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
    padding-block: calc(var(--mg-left-top-header) * 2);
    max-width: var(--wd-regular);
    margin: auto;
    min-height: calc(100% - var(--hg-header-menu) - var(--mg-left-top-header));
  }

  .menu-header {
    background-color: var(--clr-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 7.12rem;
    height: var(--hg-header-menu);
    margin-top: var(--mg-left-top-header);
    margin-left: var(--mg-left-top-header);
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

  @media (max-width: 648px) {
    
  }
</style>
