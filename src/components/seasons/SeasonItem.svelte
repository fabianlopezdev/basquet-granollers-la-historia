<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";

  import { currentIndex } from "src/svelte/stores";
  export let season;
  export let windowScrollY;
  export let seasonIndex;
  export let windowHeight;

  let translateY;

  console.log("season", season);

  // $: {
  //   const xDifference = (MAX_WIDTH - containerWidth) / 16;
  //   const yDifference = (900 - containerHeight) / 16;

  //   if(containerWidth < MAX_WIDTH) {
  //   imgLeft = season.imgLeft - xDifference > 0 ? season.imgLeft - xDifference : 0;
  //   img2Left = season.img2Left - xDifference > 0 ? season.imgLeft - xDifference : 0;;
  //   relatLeft = season.relatLeft - xDifference;
  //   }

  //   if (containerHeight > IDEAL_HEIGHT) {
  //     imgTop = season.imgTop - yDifference;
  //     img2Top = season.img2Top - yDifference;
  //     relatTop = season.relatTop - yDifference;
  //   }
  // }
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
    <h2 class="big-number">{season.name}</h2>
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
    left: 0.5rem;
    top: -6.2rem;
    color: var(--clr-accent-2);
    font-size: 2.225rem;
    font-weight: var(--fnt-wg-medium);
  }
  .big-number {
    position: relative;
    text-align: center;
    /* padding-bottom: 8rem; */
    font-size: 14rem;
    font-size: clamp(
      14rem,
      1.3846153846153832rem + 26.282051282051285vw,
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
    transition: mix-blend-mode 0.5s ease-out;
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
</style>
