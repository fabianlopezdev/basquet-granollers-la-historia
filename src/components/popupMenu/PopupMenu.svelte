<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import {PLAYERS} from "@data/globalConstants";
  export let SEASONS_INFO;
</script>

<section
  class="more-info-menu"
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
  <div class="menu-container">
    {#each PLAYERS as player}
      <article class="player">
      <div class="image-container">
        <img src={"/player-avatar.png"} alt="" />
      </div>
      <div class="info-container">
        <p class="name">{PLAYERS[0].name}</p>
      </div>
      <div class="player-details">
        <p>Data de naixement <span>18/02/1995</span></p>
        <p>Nacionalitat <span>Espanya</span></p>
        <p>Posició <span>Base</span></p>
        <p>Alçada <span>1,76</span></p>
        <p>Estadístiques <br><span>585 partits <br>7000 punts / 5000 rebots</span></p>
        <p>Temporades <br><span>16 temporades CBG <br>{'(1953-99)'}</span></p>
      </div>
    </article>
    {/each}
    
    <!-- {#if $display === "jugadors"}
      <ul>
        {#each SEASONS_INFO.players as player}
          <li>{player}</li>
        {/each}
      </ul>
    {:else if $display === "resultats"}
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
      </ul>
    {/if} -->
  </div>
</section>

<style>
  .more-info-menu {
    --hg-header-menu: 8.25rem;
    --mg-left-top-header: 1rem;
    position: absolute;
    min-height: inherit;
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
  .player {
    height: 27.31rem;
    width: 17.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    /* justify-content: center; */
  }
  
  .player-details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    padding-inline: 1.5rem;
    padding-block: 2.12rem; 
    
    /* opacity: 0;  */
    background-color: rgba(7, 61, 134, 0.9);;

    transition: opacity 0.3s ease-in-out; /* Transition both transform and opacity */
    border-top-left-radius: var(--brdr-left-top-radius);
  }

  .player:hover .player-details {

    /*It is the secondary color with opacity*/
    background-color: rgba(7, 61, 134, 0.9);;
  }

  .image-container {
    height: 85%;
    width: 100%;
    background-color: #d9d9d9;
    border-top-left-radius: var(--brdr-left-top-radius);
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    object-fit: cover;
    margin: auto;
  }

  .info-container {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.3125rem;
    background-color: var(--clr-secondary);
    color: var(--clr-contrast);
  }
  span {
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
  }
</style>
