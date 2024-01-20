<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import { PLAYERS, SCORES } from "@data/globalConstants";
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
  <ul class="menu-container">
    {#if $display === "jugadors"}
      <div class="players-container">
        {#each PLAYERS as player}
          <PlayerCard {player} />
        {/each}
      </div>
    {:else if $display === "resultats"}
      <div class="stats-container">
        <div>
          <ResultsTable {SCORES} />
        </div>
        <div>
          <ClassificationTable />
        </div>
      </div>
      <!-- 
      <ul>
        {#each SEASONS_INFO.results as result}
          <li>{result}</li>
        {/each}
      </ul>
    {:else if $display === "social"}
      <ul>
        {#each SEASONS_INFO.social as social}
          <li>{social}</li>
        {/each}
      </ul> -->
    {/if}
  </ul>
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

  .menu-container {
    padding-block: 4.75rem;
    max-width: var(--wd-regular);
    margin: auto;
    height: calc(100% - var(--hg-header-menu) - var(--mg-left-top-header));
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
</style>
