<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";
  import { currentIndex } from "src/svelte/stores";
  import { SEASONS } from "../../data/globalConstants";
  const relatColors = ["rgba(8, 67, 149, 0.90)", "rgba(251, 115, 38, 0.84)"];
 
  
  let clrIndex;
  let imgNaturalWidth;
  let imgNaturalHeight;
  let img2NaturalWidth;
  let img2NaturalHeight;
  let parentWidth = 1308;
  let parentHeight = 707;
  let relatLeft;
  let relatTop;
  let imgLeft;
  let imgTop;
  let img2Left;
  let img2Top;
  
  let seasonsPositions;

  
  function setSlide() {
    clrIndex = Math.round(Math.random());
    let item1 = getRandomPosition(1);
    let item2 = getRandomPosition(2);
    let item3 = getRandomPosition(3);
    imgLeft = item1.left;
    imgTop = item1.top;
    relatLeft = item2.left;
    relatTop = item2.top;
    img2Left = item3.left;
    img2Top = item3.top;
    return { clrIndex, imgLeft, imgTop, relatLeft, relatTop, img2Left, img2Top };
  }

  setSlide();
  $: if (parentWidth !== undefined) {
    setSlide();
    seasonsPositions = SEASONS.map(() => {
    let season = setSlide();
   
    return season;
  });
  }

  function getRandomPosition(itemNum) {
    let thirdWidth = parentWidth / 16 / 3;

    //So the items make the season year number quite visible
    let excludedMinHeight = 9.375;
    let excludedMaxHeight = 21.875;

    if (itemNum === 1) {
      let left = (Math.random() * thirdWidth) / 2;
      let maxTop = parentHeight / 16 - 16.5625; //
      let minTop = 16;
      let topRange = maxTop - minTop;
      let top = minTop + Math.random() * topRange;
      return { left, top };
    }

    if (itemNum === 2) {
      let leftStart = thirdWidth;
      let left = leftStart + (Math.random() * thirdWidth) / 2;
      let minTop = 0;
      let maxTop = parentHeight / 16 - 16.125; //
      let topRange = maxTop - minTop;
      let top = Math.random() * topRange;
      while (top > excludedMinHeight && top < excludedMaxHeight) {
        top = Math.random() * topRange;
      }
      return { left, top };
    }

    if (itemNum === 3) {
      let leftStart = 2 * thirdWidth;
      let left = leftStart + Math.random() * thirdWidth;
      let minTop = 0;
      let maxTop = 9.375;
      let topRange = maxTop - minTop;
      let top = Math.random() * topRange;
      while (top > excludedMinHeight && top < excludedMaxHeight) {
        top = Math.random() * topRange;
      }
      return { left, top };
    }
  }
  // Reactive statement to update the style based on image dimensions
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
  bind:clientWidth={parentWidth}
  bind:clientHeight={parentHeight}
  class="season-container"
>
  <div
    class="relat-container"
    style={`--clr-background: ${relatColors[clrIndex]}; left: ${relatLeft}rem; top: ${relatTop}rem`}
  >
    <h3>El Relat</h3>
    <p>{truncateString(SEASONS[$currentIndex].relat)}</p>
    <a href="/">Llegir més</a>
  </div>
  {#if SEASONS[$currentIndex].images && SEASONS[$currentIndex].images[0]}
    <div
      class="img-container img-1"
      style={`${determineContainerSize(
        imgNaturalWidth,
        imgNaturalHeight,
        1,
      )}; left: ${imgLeft}rem; top: ${imgTop}rem `}
    >
      <img
        bind:naturalWidth={imgNaturalWidth}
        bind:naturalHeight={imgNaturalHeight}
        style={determineImageSize(imgNaturalWidth, imgNaturalHeight)}
        src={SEASONS[$currentIndex].images[0].src}
        alt={SEASONS[$currentIndex].images[0].alt}
      />
    </div>
  {/if}
  {#if SEASONS[$currentIndex].images && SEASONS[$currentIndex].images[1]}
    <div
      class="img-container img-2"
      style={`${determineContainerSize(
        img2NaturalWidth,
        img2NaturalHeight,
      )}; left: ${img2Left}rem; top: ${img2Top}rem `}
    >
      <img
        bind:naturalWidth={img2NaturalWidth}
        bind:naturalHeight={img2NaturalHeight}
        style={determineImageSize(img2NaturalWidth, img2NaturalHeight)}
        src={SEASONS[$currentIndex].images[1].src}
        alt={SEASONS[$currentIndex].images[1].alt}
      />
    </div>
  {/if}
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{SEASONS[$currentIndex].name}</h2>
  </div>
</div>

<style>
  .season-container {
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100dvh - var(--pd-y-options-btns) - 2.12rem);
    width: 100%;
    color: var(--clr-primary);
    overflow: hidden;
    display: grid;
    /* display: grid;
    place-content: center; */
  }
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
