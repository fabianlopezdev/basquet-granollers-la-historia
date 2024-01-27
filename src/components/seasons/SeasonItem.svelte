<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";
  import { collapsibleArrowSeasonMobileMenu } from "@assets/icons";
  import {NAVIGATION} from '@data/globalConstants'
  import { currentIndex } from "src/svelte/stores";
  import SeasonsList from "../header/SeasonsList.svelte";
  import SponsorsResponsive from "@components/header/SponsorsResponsive.svelte";
  export let season;
  export let windowScrollY;
  export let seasonIndex;
  export let windowHeight;

  let translateY;
  let isMenuOpen = false;

  $: {
    const progressY = windowScrollY / windowHeight;
    translateY = `translateY(${100 - 100 * progressY * progressY}%)`;
  }

  $: translateX = (seasonIndex - $currentIndex) * 100;
</script>

<div
  class="season-container"
  style="--translateX: {translateX}%; --translateY: {translateY};}"
>
  <div class="season-menu">
    <h4 class="menu-title">Tria una temporada</h4>
    <button
      class="menu-season-selected"
      on:click={() => (isMenuOpen = !isMenuOpen)}
      >74/75 <div class="rotate" class:rotated={isMenuOpen}>
        {@html collapsibleArrowSeasonMobileMenu}
      </div></button
    >
  </div>
  <div class:showMenu={isMenuOpen} class='select-season-popup'>
  <SeasonsList/>
    <SponsorsResponsive/>
  </div>
  <!-- <div class="season-title">
    <aside>Temporada</aside>
  <h2 class="big-number">{season.name}</h2>
</div> -->
<!-- <div class="items-container">
    {#if season.relatProps !== undefined}
      <div
        class="translateY-wrapper relat"
        style="--rowStart: {season.relatProps.rowStart}; --rowEnd: {season
          .relatProps.rowEnd}; --colStart: {season.relatProps
          .colStart}; --colEnd: {season.relatProps.colEnd};"
      >
        <article
          class="relat-container"
          style="--clr-background: {season.relatProps.color};  --width: {season
            .relatProps.width}rem;"
        >
          <header>El Relat</header>
          <p>{truncateString(season.relat)}</p>
          <a href="/" style="--hoverColor: {season.relatProps.hoverColor}"
            >Llegir més</a
          >
        </article>
      </div>
    {/if}
    {#if season.images}
      {#each season.images as image, i}
        {#if i < 2}
          <div
            class="translateY-wrapper blender img-{i}"
            style="transform: {translateY}; --rowStart: {i === 0
              ? season.img1.rowStart
              : season.img2.rowStart}; --rowEnd: {i === 0
                ? season.img1.rowEnd
              : season.img2.rowEnd}; --colStart: {i === 0
              ? season.img1.colStart
              : season.img2.colStart}; --colEnd: {i === 0
              ? season.img1.colEnd
              : season.img2.colEnd}"
          >
            <div class="img-container">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
          {/if}
      {/each}
    {/if}
  </div> -->
</div>

<style>
  button {
    cursor: pointer;
  }
  .season-container {
    --hg-menu: 4rem;
    /* position: relative; */
    width: 100vw;
    height: inherit;
    /* z-index: 5; */
  }
  .season-menu {
    height: var(--hg-menu);
    width: inherit;
    display: flex;
    justify-content: space-between;
    padding-block: 1.44rem;
    padding-inline: var(--pd-x-small);
    font-size: 0.875rem;
    position: relative;
    background-color: var(--clr-contrast);
    z-index: 1;
  }
  
  .season-menu::after {
    content: "";
    position: absolute;
    left: var(--pd-x-small);
    right: var(--pd-x-small);
    bottom: 0;
    border-bottom: 2px solid var(--clr-primary);
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
    transform-origin: 50% 55%;
    transition: 0.45s transform ease-in-out;
  }
  .select-season-popup {
    --offset-season-menu: calc(var(--hg-menu) - 2px);
    position: absolute;
    top: var(--offset-season-menu);
  
    width: 100vw;
    /* height: 100%; */
    background-color: var(--clr-primary-opacity);
    /* z-index: 10; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    transform: translateY(calc(-100% - var(--offset-season-menu)));
    transition: transform 0.5s ease-out;
    color: white;
  
    /* z-index: -1; */
  }

  .select-season-popup.showMenu {
    transform: translateY(0);
  }
  .rotated {
    transform: rotate(-180deg);
    /* transform-origin: 50% 55%; */
  }

  .items-container {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 8.32%);
    grid-template-rows: repeat(10, 10%);
  }
  .relat {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }
  .season-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: multiply;
  }

  

  aside {
    position: relative;
    top: 0;
    /* left: 0.5rem; */
    top: calc(
      clamp(1.8rem, 0.12911392405063293rem + 7.4261603375527425vw, 6.2rem) * -1
    );
    /* top: -6.2rem; */
    color: var(--clr-accent-2);

    font-size: 1.35125rem;
    font-size: clamp(
      1.35125rem,
      1.0194462025316455rem + 1.4746835443037973vw,
      2.225rem
    );
    font-weight: var(--fnt-wg-medium);
  }
  .big-number {
    position: relative;
    text-align: center;
    /* padding-bottom: 8rem; */
    font-size: 6.6rem;
    font-size: clamp(
      6.6rem,
      -0.10253164556961991rem + 29.789029535864977vw,
      24.25rem
    );
    font-weight: var(--fnt-wg-medium);

    /* opacity: 0.95; */
  }
  .translateY-wrapper {
    transform: var(--translateY);
    transition: transform 0.5s ease-out;
  }

  .blender {
    mix-blend-mode: multiply;
  }

  .blender:hover {
    mix-blend-mode: normal;
  }
  .relat-container {
    position: relative;
    display: flex;
    flex-direction: column;

    width: var(--width);
    gap: 1rem;
    color: var(--clr-contrast);
    background-color: var(--clr-background);
    padding-inline: 2.5rem;
    padding-block: 2rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  header {
    font-size: 1.2rem;
    font-weight: var(--fnt-wg-medium);
  }

  a {
    text-decoration: underline;
  }
  a:hover {
    color: var(--hoverColor);
  }
  img {
    filter: grayscale(100%);
    object-fit: cover;
    transition: transform 0.5s ease-out;
  }

  img:hover {
    filter: grayscale(0%);
    transform: scale(1.5);
  }

  .img-container {
    /* opacity: 0.75; */
    width: fit-content;
  }

  .relat-container,
  .img-container {
    transition: transform 1.9s ease-out;
    transform: translateX(var(--translateX));
  }
  .img-0 {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }

  .img-1 {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }
  @media (max-width: 648px) {
    .season-title {
      position: relative;
      top: 0;
      left: 55%;
    }
  }
</style>
