<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";
  import { NAVIGATION } from "@data/globalConstants";
  import { currentIndex } from "src/svelte/stores";

  export let season;
  export let windowScrollY;
  export let seasonIndex;
  export let windowHeight;

  let translateY;

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
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{season.years}</h2>
  </div>
  <div class="items-container">
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
  </div>
</div>

<style>
  .season-container {
    position: relative;
    width: 100%;
    height: inherit;
    /* overflow-x: hidden; */
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
    font-size: 6.6rem;
    font-size: 6.6rem;
    font-size: clamp(
      6.6rem,
      -3.464525810324128rem + 33.9015606242497vw,
      24.25rem
    );
    font-weight: var(--fnt-wg-medium);
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
    /* .season-container {
      display: flex;
      flex-direction: column;
    } */
    .season-title {
      width: 100vw;
      position: relative;
      top: 3rem;
      left: 0;
      transform: translate(0%, 0%);
      transform: translate(0%, 0%);
      padding-inline: var(--pd-x-small);
      height: 7rem;
    }
    /* .items-container {
      flex: 1;
    } */
    .items-container {
     padding-bottom: 5rem;
      grid-template-columns: repeat(24, 4.19%);
      grid-template-rows: repeat(24, 4.19%);
    }

    .relat-container {
      width: 14rem;
      padding: 1.5rem;
      /* text-wrap: pretty; */
    }
    
    .relat {
      z-index: 1;

    }

  }

  @media (max-height: 812px) {
    
  }
</style>
