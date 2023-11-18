<script>
  //Import stores
  import { seasonToEndpointMapper, truncateString } from "@utils/helperFunctions";
  
  export let season;

  // console.log('season', season)
  let imgNaturalWidth;
  let imgNaturalHeight;
  let img2NaturalWidth;
  let img2NaturalHeight;

   function determineContainerSize(width, height, imgNum) {
    let style;
    if (imgNum === 1) {
      style =
        width > height
          ? "max-width: 26.9375rem; height: auto;"
          : "max-height: 26.4375rem; width: auto";
    } else {
      style =
        width > height
          ? "max-width: 13.9375rem; height: auto;"
          : "max-height: 13.4375rem; width: auto";
    }
    return style;
  }

  function determineImageSize(width, height) {
    return width > height
      ? "width: 100%; height: auto;"
      : "width: auto; height: 100%;";
  }
</script>


  <div
    class="relat-container"
    style={`--clr-background: ${season.relatColor}; left: ${season.relatLeft}rem; top: ${season.relatTop}rem`}
  >
    <h3>El Relat</h3>
    <p>{truncateString(season.relat)}</p>
    <a href="/">Llegir més</a>
  </div> 
  {#if season.images && season.images[0]}
    <div
      class="img-container img-1"
      style={`${determineContainerSize(
        imgNaturalWidth,
        imgNaturalHeight,
        1,
      )}; left: ${season.imgLeft}rem; top: ${season.imgTop}rem `}
    >
      <img
        bind:naturalWidth={imgNaturalWidth}
        bind:naturalHeight={imgNaturalHeight}
        style={determineImageSize(imgNaturalWidth, imgNaturalHeight)}
        src={season.images[0].src}
        alt={season.images[0].alt}
      />
    </div>
  {/if}
  {#if season.images && season.images[1]}
    <div
      class="img-container img-2"
      style={`${determineContainerSize(
        img2NaturalWidth,
        img2NaturalHeight,
      )}; left: ${season.img2Left}rem; top: ${season.img2Top}rem `}
    >
      <img
        bind:naturalWidth={img2NaturalWidth}
        bind:naturalHeight={img2NaturalHeight}
        style={determineImageSize(img2NaturalWidth, img2NaturalHeight)}
        src={season.images[1].src}
        alt={season.images[1].alt}
      />
    </div>
  {/if}
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{season.name}</h2>
  </div>


<style>
  
  .relat-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--clr-contrast);
    background-color: var(--clr-background);
    max-width: 19.5rem;
    padding-inline: 2.5rem;
    padding-block: 2rem;
    opacity: 0.84;
    z-index: 10;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

  img {
    filter: grayscale(100%);
    object-fit: cover;
  }

  .season-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    margin: 0;
    /*from 784px screen to 1400px*/
    font-size: 14rem;
    font-size: clamp(
      14rem,
      1.3846153846153832rem + 26.282051282051285vw,
      24.25rem
    );
    font-weight: var(--fnt-wg-medium);
    mix-blend-mode: multiply;
    opacity: 0.95;
  }
</style>
