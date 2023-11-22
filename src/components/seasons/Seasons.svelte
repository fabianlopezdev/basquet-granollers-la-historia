<script>
  //Import components
  import Options from "./Options.svelte";
  import Timeline from "./Timeline.svelte";
  import SeasonItem from "./SeasonItem.svelte";
  //Import data
  import { SEASONS_INFO } from "@data/globalConstants";
  import { currentIndex } from "src/svelte/stores";

  const RELATS_PROPS =  {colors:{
    blue: "rgba(8, 67, 149, 0.90)",
    orange: "rgba(251, 115, 38, 0.84)"}, width: {short: 19.5, large: 38.625} 
  }

  const SEASONS_LAYOUT = [
    {
      imgLeft: 16.3,
      imgTop: 30,
      img2Left: 36.66,
      img2Top: 5,
      relatLeft: 51.25,
      relatTop: 19,
      relatColor: RELATS_PROPS.colors.blue,
      relatWidth: RELATS_PROPS.width.short,
    },
    {
      imgLeft: 0,
      imgTop: 30,
      img2Left: 61,
      img2Top: 5,
      relatLeft: 24.5,
      relatTop: 40,
      relatColor: RELATS_PROPS.colors.orange,
      relatWidth: RELATS_PROPS.width.large,
    },
    {
      imgLeft: 20,
      imgTop: 5,
      img2Left: 65.06,
      img2Top: 40,
      relatLeft: 8,
      relatTop: 40,
      relatColor: RELATS_PROPS.colors.blue,
      relatWidth: RELATS_PROPS.width.short,
    },
  ];

  let windowWidth;
  let windowHeight;
  let windowScrollY;
  let animationClass;

  const SEASONS = SEASONS_INFO.map((season, index) => ({
    ...season,
    ...SEASONS_LAYOUT[index],
  }));

  $: transform = `translateX(${-100 * $currentIndex}%)`;
  
  console.log('transfrom', transform)
  console.log("SEASONS", SEASONS);
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={windowScrollY}
/>

<section id="seasons">
  <!-- <img src="/cancha.png" alt="Dibuix d'una pista de bàsquet" /> -->
  <div class="seasons-container" >
    {#each SEASONS as season}
      <div class="season-container">
        <SeasonItem {season} {windowHeight} {windowScrollY} />
      </div>
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
</section>

<style>
  section {
    position: relative;
    background-color: var(--clr-contrast);
    height: 100dvh;
    scroll-snap-align: start;
    background-image: url("/cancha.png");
    max-width: var(--wd-regular);
    margin: auto;
    overflow: hidden;
    display:flex;
    flex-direction: column;
  }

  .seasons-container {
    width: 100%;
    height: calc(100dvh - var(--pd-y-options-btns) - 2.12rem);
    top: 0;
    left: 0;
    display: flex;
    /* transition: transform 0.5s ease; */
    color: var(--clr-primary);
    /* overflow: hidden; */
  }
  .season-container {
    width: 100%; /* Each container takes full width */
    flex-shrink: 0;
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
