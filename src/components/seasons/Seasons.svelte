<script>
  //Import components
  import Options from "./Options.svelte";
  import Timeline from "./Timeline.svelte";
  import SeasonItem from "./SeasonItem.svelte";
  import PopupMenu from "../popupMenu/PopupMenu.svelte";
  //Import data
  import { SEASONS_INFO, SEASONS_LAYOUT } from "@data/globalConstants";
  import { currentIndex } from "src/svelte/stores";
  import { display } from "src/svelte/stores";
  
  const TOTAL_SEASONS = SEASONS_INFO.length;

  let windowWidth;
  let windowHeight;
  let windowScrollY;
  let animationClass;

  const SEASONS = SEASONS_INFO.map((season, index) => ({
    ...season,
    ...SEASONS_LAYOUT[index],
  }));
  let seasonWidth = 100 / TOTAL_SEASONS;
  $: transform = `translateX(${-seasonWidth * $currentIndex}%)`;
</script>

<svelte:window
bind:innerWidth={windowWidth}
bind:innerHeight={windowHeight}
bind:scrollY={windowScrollY}
/>

<section id="seasons">
  {#if $display === "relats"}
    <PopupMenu SEASONS_INFO={SEASONS_INFO[$currentIndex]} />

  {/if}
  <div class="season-wrapper">
    <div
    class="seasons-container"
      style="--totalSeasons: {TOTAL_SEASONS}; transform: {transform}"
    >
      {#each SEASONS as season, seasonIndex}
        <SeasonItem {season} {windowHeight} {windowScrollY} {seasonIndex} />
      {/each}
    </div>
    <Options />
    <Timeline
      {SEASONS_INFO}
      {windowHeight}
      {windowScrollY}
      {windowWidth}
      bind:animationClass
    />
  </div>
</section>

<style>
  #seasons {
    background-color: var(--clr-contrast);
    scroll-snap-align: start;
    position: relative;
    height: 100dvh;
  }

  .season-wrapper {
    display: flex;
    height: inherit;
    flex-direction: column;
    background-position: center;
    overflow: hidden;
    margin: auto;
    background-image: url("/cancha.png");
    max-width: var(--wd-regular);
  }

  .seasons-container {
    width: calc(100% * var(--totalSeasons));
    height: calc(100dvh - var(--pd-y-options-btns) - 2.12rem);
    display: flex;
    color: var(--clr-primary);
    /* overflow: hidden; */
    transition: transform 1.5s ease-out;
  }
</style>
