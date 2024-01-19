<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import { PLAYERS, SCORES } from "@data/globalConstants";
  import PlayerCard from "./PlayerCard.svelte";
  import ResultsRow from "./ResultsRow.svelte";
  export let SEASONS_INFO;
</script>

<section
  class="more-info-menu"
  style={$display === 'resultats' && 'background-color: #F3F3F3'}
  transition:slide={{ duration: 300, axis: "-x" }}
>
  <header class="menu-header" >
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
      {#each PLAYERS as player}
        <PlayerCard {player} />
      {/each}
    {:else if $display === "resultats"}
      <table class="my-table">
        <tbody>
           {#each SCORES as score}
        <ResultsRow {score}/>
      {/each}
  
          <!-- Add more rows as needed -->
        </tbody>
      </table>
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
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding-block: 4.75rem;
    max-width: var(--wd-regular);
    margin: auto;

    height: calc(100% - var(--hg-header-menu) - var(--mg-left-top-header));
  }

  .my-table {
    border-collapse: collapse;
    color: var(--clr-primary);
  }

  .my-table,
  .my-table td {
    border: 2.097px solid #D9D9D9;
    height: 2.22rem;
    font-weight: var(--fnt-wg-regular);
  }


  /* .date {
    width: 5.5rem;
    background-color: var(--clr-contrast);
    text-align: center;
  }
  .team {
    width: 13.4rem;
    background-color: var(--clr-contrast);
     padding-left: 1.44rem;
  }
  .score {
    width: 3.5rem;
    text-align: center;
    background-color: #D9D9D9;
  }

  .score-one {
    border-right-color: #F3F3F3 !important;
    }

    .score-two {
    border-left-color: #F3F3F3 !important;
    } */
</style>
