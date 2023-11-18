<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";
  import { currentSeason } from "src/svelte/stores";

  const widthOptions = [19.5, 38.625]; // in rem
  const heightOptions = [16.5625, 11.75]; // in rem
  const colorOptions = ["rgba(8, 67, 149, 0.90)", "rgba(251, 115, 38, 0.84)"];

  let szIndex;
  let clrIndex;

  $: if ($currentSeason || (parentWidth && parentHeight)) {
    szIndex = Math.round(Math.random());
    clrIndex = Math.round(Math.random());
    relatWidth = widthOptions[szIndex];
    relatHeight = heightOptions[szIndex];
  }

  $: if (
    parentWidth &&
    parentHeight &&
    (imgContainerWidth || imgContainerWidth2)
  ) {
    let item1 = getRandomPosition(1);
    let item2 = getRandomPosition(2);
    let item3 = getRandomPosition(3);

    imgLeft = item1.left;
    imgTop = item1.top;
    relatLeft = item2.left;
    relatTop = item2.top;
    img2Left = item3.left;
    img2Top = item3.top;
    // let { left: img2Left, top: img2Top } = item2;
  }
  let imgNaturalWidth;
  let imgNaturalHeight;
  let imgWidth2;
  let imgHeight2;
  let parentWidth;
  let parentHeight;
  let relatWidth;
  let relatHeight;
  let imgContainerWidth;
  let imgContainerHeight;
  let imgContainerWidth2;
  let imgContainerHeight2;

  function getRandomPosition(itemNum) {
    let thirdWidth = (parentWidth / 16 / 3); // One third of the parent width
    console.log('thirdwidth', thirdWidth)
    if (itemNum === 1) {
      // For the first third, range is from 0 to thirdWidth
      let left =( Math.random() * (thirdWidth)) / 2;

      // Calculate top similarly as before
      let maxTopBoundary = parentHeight / 16 - 16.5625; // Adjust as necessary
      let minTop = 16;
      let topRange = maxTopBoundary - minTop;
      let top = minTop + Math.random() * topRange;

      return { left, top };
    }

    if (itemNum === 2) {
      // For the second third, range is from thirdWidth to 2 * thirdWidth
      let leftStart = thirdWidth;
      let left = (leftStart + Math.random() * thirdWidth /2)

      // Calculate top similarly as before
      let minTop = 0;
      let maxTop = parentHeight / 16 - 11.75; // Adjust as necessary
      let topRange = maxTop - minTop;
      let top = Math.random() * topRange;

      return { left, top };
    }

    if (itemNum === 3) {
      // For the third third, range is from 2 * thirdWidth to 3 * thirdWidth (end of parentWidth)
      let leftStart = 2 * thirdWidth;

      console.log()
      let left = (leftStart + Math.random() * thirdWidth);

      // Calculate top similarly as before
      let minTop = 0;
      let maxTop = parentHeight / 16; // Adjust as necessary
      let topRange = maxTop - minTop;
      let top = Math.random() * topRange;

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
  let relatLeft;
  let relatTop;
  let imgLeft;
  let imgTop;
  let img2Left;
  let img2Top;
</script>

<div
  bind:clientWidth={parentWidth}
  bind:clientHeight={parentHeight}
  class="season-container"
>
  <div
    bind:clientWidth={relatWidth}
    bind:clientHeight={relatHeight}
    class="relat-container"
    style={`--clr-background: ${colorOptions[clrIndex]}; --wd: ${relatWidth}rem; --hg: ${relatHeight}rem; left: ${relatLeft}rem; top: ${relatTop}rem`}
  >
    <h3>El Relat</h3>
    <p>{truncateString($currentSeason.relat)}</p>
    <a href="/">Llegir més</a>
  </div>
  {#if $currentSeason.images && $currentSeason.images[0]}
    <div
      bind:clientWidth={imgContainerWidth}
      bind:clientHeight={imgContainerHeight}
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
        src={$currentSeason.images[0].src}
        alt={$currentSeason.images[0].alt}
      />
    </div>
  {/if}
  {#if $currentSeason.images && $currentSeason.images[1]}
    <div
      bind:clientWidth={imgContainerWidth2}
      bind:clientHeight={imgContainerHeight2}
      class="img-container img-2"
      style={`${determineContainerSize(
        imgWidth2,
        imgHeight2,
      )}; left: ${img2Left}rem; top: ${img2Top}rem `}
    >
      <img
        bind:naturalWidth={imgWidth2}
        bind:naturalHeight={imgHeight2}
        style={determineImageSize(imgWidth2, imgHeight2)}
        src={$currentSeason.images[1].src}
        alt={$currentSeason.images[1].alt}
      />
    </div>
  {/if}
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{$currentSeason.name}</h2>
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
    max-width: var(--wd);
    max-height: var(--hg);
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
