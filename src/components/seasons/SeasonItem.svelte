<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";

  import { currentIndex } from "src/svelte/stores";
  export let season;
  export let windowScrollY;
  export let windowHeight;
  export let seasonIndex;
  console.log("seasonWidth", season.relatWidth);
  console.log("hoverColor", season.hoverColor);
  let translateY;
  let maxWidth = 1308 / 16;

  let containerWidth;

  let imgLeft = (season.imgLeft / maxWidth) * (1308 / 16);
  let img2Left = (season.img2Left / maxWidth) * (1308 / 16);
  let relatLeft = (season.relatLeft / maxWidth) * (1308 / 16);

  $: {
    const progressY = windowScrollY / windowHeight;
    translateY = `translateY(${100 - 100 * progressY * progressY}%)`;
  }

  $: internalOffset = (seasonIndex - $currentIndex) * 100;
</script>

<div
  class="season-container"
  style="--translateX: {internalOffset}%; --translateY: {translateY};}"
  bind:clientWidth={containerWidth}
>
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{season.name}</h2>
  </div>
  <div class="translateY-wrapper">
    <article
      class="relat-container"
      style="--clr-background: {season.relatColor}; --left: {relatLeft}rem; --top: {season.relatTop}rem; --width: {season.relatWidth}rem;"
    >
      <header>El Relat</header>
      <p>{truncateString(season.relat)}</p>
      <a href="/" style="--hoverColor: {season.hoverColor}">Llegir més</a>
    </article>
  </div>
  {#if season.images && season.images[0]}
   <div class="translateY-wrapper blender" style="transform: {translateY}">
    <div
    class="img-container img-1"
    style={`--left: ${imgLeft}rem; --top: ${season.imgTop}rem`}
    >
    <img src={season.images[0].src} alt={season.images[0].alt} />
  </div>
</div>
  {/if}
  {#if season.images && season.images[1]}
   <div class="translateY-wrapper blender" style="transform: {translateY}">
    <div
    class="img-container img-2"
    style={`--left: ${img2Left}rem; --top: ${season.img2Top}rem`}
    >
    <img src={season.images[1].src} alt={season.images[1].alt} />
  </div>
</div>
  {/if}
</div>

<style>
  .season-container {
    position: relative;
    width: 100%;
    height: inherit;
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
    position: absolute;
  }

  .blender {
    mix-blend-mode: multiply;
  }
  .relat-container {
    position: relative;
    display: flex;
    flex-direction: column;
    left: var(--left);
    top: var(--top);
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
  }
  .img-container {
    position: relative;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    /* opacity: 0.75; */
  }

  .relat-container,
  .img-container {
    transition: transform 1.9s ease-out;
    transform: translateX(var(--translateX));
  }
  .img-1 {
    left: var(--left);
    top: var(--top);
  }

  .img-2 {
    left: var(--left);
    top: var(--top);
  }
</style>
