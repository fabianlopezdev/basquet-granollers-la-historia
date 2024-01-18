<script>
  //Import components
  import Options from "./Options.svelte";
  import Timeline from "./Timeline.svelte";
  import SeasonItem from "./SeasonItem.svelte";
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

<main id="seasons">
  <div
    class="seasons-container"
    style="--totalSeasons: {TOTAL_SEASONS}; transform: {transform}"
  >
    {#each SEASONS as season, seasonIndex}
      <SeasonItem {season} {windowHeight} {windowScrollY} {seasonIndex}/>
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
  {#if $display === 'jugadors'}
    <section class='more-info-menu'>

    </section>
  {/if}
</main>

<style>
  main {
    background-color: var(--clr-contrast);
    height: 100dvh;
    scroll-snap-align: start;
    background-image: url("/cancha.png");
    background-position: center;
    max-width: var(--wd-regular);
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .more-info-menu {
    position: absolute;
    height: inherit;
    width: 100%;
    background-color: red;
    z-index: 1;
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
