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
  style={$display === "resultats" && "background-color: #F3F3F3"}
  transition:slide={{ duration: 300, axis: "-x" }}
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
          <h3>Resultats</h3>
          <table class="my-table">
            <tbody>
              {#each SCORES as score}
                <ResultsRow {score} />
              {/each}
            </tbody>
          </table>
        </div>
        <div>
          <h3>Classificació</h3>
          <table class="my-table">
       
            
            <tbody>
              <tr>
                <th class='position'></th>
                <th class='team'>Equip</th>
                <th class='short-stat'>PJ</th>
                <th class='short-stat'>PG</th>
                <th class='short-stat'>PE</th>
                <th class='short-stat'>PP</th>
                <th class='long-stat'>RF</th>
                <th class='long-stat'>PC</th>
                <th class='points'>PUNTS</th>
              </tr>
             <tr>
              <td class='position'>1</td>
              <td  class='team'>C.B. GRANOLLERS</td>
              <td class='short-stat'>22</td>
              <td class='short-stat'>18</td>
              <td class='short-stat'>0</td>
              <td class='short-stat'>4</td>
              <td class='long-stat'>1,779</td>
              <td class='long-stat'>1,511</td>
              <td class='points'>36</td>
             </tr>
            </tbody>
          </table>
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
  h3 {
    font-size: var(--fnt-sz-h3-medium);
    color: var(--clr-primary);
    padding-bottom: 2rem;
    font-weight: var(--fnt-wg-medium);
  }
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

  .my-table {
    border-collapse: collapse;
    color: var(--clr-primary);
    border: 2.097px solid #d9d9d9;
    font-weight: var(--fnt-wg-regular);
  }

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .position {
    width: 2.37rem;
  }
  .team {
    width: 13.4rem;
  }

  .short-stat {
    width: 2.37rem;
  }
</style>
