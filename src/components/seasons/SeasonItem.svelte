<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";

  export let season;
  export let windowScrollY;
  export let windowHeight;
  export let windowWidth;

  let translateY;
  let maxWidth = 1308 / 16;

  let containerWidth;

  let imgLeft = (season.imgLeft / maxWidth) * (1308 / 16);
  let img2Left = (season.img2Left / maxWidth) * (1308 / 16);
  let relatLeft = (season.relatLeft / maxWidth) * (1308 / 16);

  $: {
    const progress = windowScrollY / windowHeight;
    translateY = `translateY(${100 - 100 * progress * progress}%)`;
  }
</script>

<div class="season-container" bind:clientWidth={containerWidth} >
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{season.name}</h2>
  </div>
  <div
    style:transform={translateY}
    class="relat-container"
    style={`--clr-background: ${season.relatColor}; --left: ${relatLeft}rem; --top: ${season.relatTop}rem; --width: ${season.relatWidth}rem`}
  >
    <h3>El Relat</h3>
    <p>{truncateString(season.relat)}</p>
    <a href="/">Llegir més</a>
  </div>
  {#if season.images && season.images[0]}
    <div
      style:transform={translateY}
      class="img-container img-1"
      style={`--left: ${imgLeft}rem; --top: ${season.imgTop}rem`}
    >
      <img src={season.images[0].src} alt={season.images[0].alt} />
    </div>
  {/if}
  {#if season.images && season.images[1]}
    <div
      style:transform={translateY}
      class="img-container img-2"
      style={`--left: ${img2Left}rem; --top: ${season.img2Top}rem`}
    >
      <img src={season.images[1].src} alt={season.images[1].alt} />
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
  .relat-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: var(--left);
    top: var(--top);
    width: var(--width);
    gap: 1rem;
    color: var(--clr-contrast);
    background-color: var(--clr-background);
    max-width: 19.5rem;
    padding-inline: 2.5rem;
    padding-block: 2rem;
    z-index: 10;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform: translateY(100%);
  }
  h3 {
    font-size: 1.2rem;
    font-weight: var(--fnt-wg-medium);
  }

  a {
    text-decoration: underline;
  }
  .img-container {
    position: absolute;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 10;
    mix-blend-mode: multiply;
    /* opacity: 0.75; */
  }
  .img-1 {
    left: var(--left);
    top: var(--top);
  }

  .img-2 {
    left: var(--left);
    top: var(--top);
  }
  img {
    filter: grayscale(100%);
    object-fit: cover;
  }
</style>
