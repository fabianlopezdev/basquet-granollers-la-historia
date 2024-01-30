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
  import { collapsibleArrowSeasonMobileMenu } from "@assets/icons";
  import SeasonsList from "../header/SeasonsList.svelte";
  import SponsorsResponsive from "@components/header/SponsorsResponsive.svelte";

  const TOTAL_SEASONS = SEASONS_INFO.length;

  let windowWidth;
  let windowHeight;
  let windowScrollY;
  let animationClass;

  let isMenuOpen = false;

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
  {#if $display !== "relats"}
    <PopupMenu SEASONS_INFO={SEASONS_INFO[$currentIndex]} />
  {/if}
  <div class="season-wrapper ">
    <div class="season-menu mobile">
      <h4 class="menu-title">Tria una temporada</h4>
      <button
        class="menu-season-selected"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        >{SEASONS_INFO[$currentIndex].years}<div class="rotate" class:rotated={isMenuOpen}>
          {@html collapsibleArrowSeasonMobileMenu}
        </div></button
      >
    </div>
    <div class:showMenu={isMenuOpen} class="select-season-popup ">
      <p>TEMPORADES</p>
      <SeasonsList />
      <div style="padding-top: 3rem; width: 100%;">
        <SponsorsResponsive />
      </div>
    </div>
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
     --hg-menu: 4rem;
     --offset-season-menu: calc(var(--hg-menu) - 2px);
    background-color: var(--clr-contrast);
    scroll-snap-align: start;
    position: relative;
    height: 100dvh;
  }

  .mobile {
    display: none;
  }

  .season-wrapper {
    display: flex;
    height: inherit;
    flex-direction: column;
    background-position: center;
    margin: auto;
    background-image: url("/cancha.png");
    max-width: var(--wd-regular);
    overflow: hidden;
  }

  .season-menu {
   
    height: var(--hg-menu);
    /* width: 100vw; */
    color: var(--clr-primary);

    justify-content: space-between;
    padding-block: 1.44rem;
    padding-inline: var(--pd-x-small);
    font-size: 0.875rem;
    position: relative;
    background-color: var(--clr-contrast);
    z-index: 3;
  }
  /*Line Separator*/
  .season-menu::after {
    content: "";
    position: absolute;
    left: var(--pd-x-small);
    right: var(--pd-x-small);
    bottom: 0;
    border-bottom: 2px solid var(--clr-primary);
  }

  .select-season-popup {
    
    position: absolute;
    top: var(--offset-season-menu);
    /* top: 0; */
    left: 0;
    right: 0;
    /* width: 100vw; */
    /* height: 100%; */
    background-color: var(--clr-primary-opacity);
    /* z-index: 10; */
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    transform: translateY(calc(-100% - var(--offset-season-menu)));
    transition: transform 0.5s ease-out;
    color: var(--clr-contrast);
    z-index: 2;
  }

  .select-season-popup.showMenu {
    /* max-height: fit-content;
    display:flex; */
    visibility: visible;
    transform: translateY(0);
  }
  .seasons-container {
    width: calc(100% * var(--totalSeasons));
    height: calc(100dvh - var(--pd-y-options-btns));
    display: flex;
    color: var(--clr-primary);
    /* overflow: hidden; */
    transition: transform 1.5s ease-out;
     z-index: 1;
  }

  P {
    color: var(--clr-accent);
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
    padding-top: 3rem;
  }
  button {
    cursor: pointer;
  }

  .menu-title {
    font-weight: var(--fnt-wg-regular);
  }

  .menu-season-selected {
    font-weight: var(--fnt-wg-medium);
    display: flex;
    gap: 0.38rem;
  }

  .rotate {
    padding-top: 0.2rem;
    display: inline-block;
    vertical-align: middle;
    transform: rotate(0);
    transform-origin: 50% 65%;
    transition: 0.45s transform ease-in-out;
  }
  
  .rotated {
    transform: rotate(-180deg);
    /* transform-origin: 50% 55%; */
  }

  @media (max-width: 648px) {
    .seasons-container {
      height: calc(100dvh - var(--pd-y-options-btns) - 2.5rem);
    }
    .mobile {
      display: flex;
    }
  }

  @media (max-height: 812px) and (max-width: 648px){
    .season-menu {
      padding-block: 1rem;
      height: max-content;
    }

    .select-season-popup {
      top: calc(var(--offset-season-menu) - 0.88rem);
    }
  }
</style>
