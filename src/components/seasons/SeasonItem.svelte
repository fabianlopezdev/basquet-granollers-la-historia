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

  $: if (parentWidth && parentHeight && (imgContainerWidth || imgContainerWidth2)) {
    let calculatedPositions = determinePositions();
    [
      { left: relatLeft, top: relatTop },
      { left: imgLeft, top: imgTop },
      { left: img2Left, top: img2Top },
    ] = calculatedPositions;
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

  function isOverlapping(item1, item2) {
    return !(
      item1.left > item2.left + item2.width ||
      item1.left + item1.width < item2.left ||
      item1.top > item2.top + item2.height ||
      item1.top + item1.height < item2.top
    );
  }

  function getRandomPosition() {
    console.log("parentWidth", parentWidth);
    let maxLeftBoundary = parentWidth / 16 - 26.9375; // Adjust this as necessary
    let maxTopBoundary = parentHeight / 16 - 17; // Adjust this as necessary

    let left = Math.random() * maxLeftBoundary;
    let top = Math.random() * maxTopBoundary;

    return { left, top };
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

  function determinePositions() {
    let positions = [];
    let maxAttempts = 100;

    const elementSizes = [
      { width: relatWidth, height: relatHeight }, // Dimensions for relat-container
      { width: imgContainerWidth / 16, height: imgContainerHeight / 16 }, // Dimensions for img-1
      { width: imgContainerWidth2 / 16, height: imgContainerHeight2 / 16 }, // Dimensions for img-2
    ];

    for (let i = 0; i < 3; i++) {
      let attempts = 0;
      let newPos, isOverlap;
      do {
        isOverlap = false;
        newPos = getRandomPosition();
        newPos.width = elementSizes[i].width; // Set the width of the current element
        newPos.height = elementSizes[i].height; // Set the height of the current element

        // Adjust max boundaries based on element size
        newPos.maxLeft = parentWidth / 16 - newPos.width;
        newPos.maxTop = parentHeight / 16 - newPos.height;

        // Generate a random position within boundaries
        newPos.left = Math.random() * newPos.maxLeft;
        newPos.top = Math.random() * newPos.maxTop;

        // Check for overlap with already positioned elements
        for (let pos of positions) {
          if (isOverlapping(newPos, pos)) {
            isOverlap = true;
            break;
          }
        }
        attempts++;
        if (attempts === maxAttempts) break;
      } while (isOverlap);

      positions.push({ left: newPos.left, top: newPos.top });
    }

    return positions;
  }
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
      src="./74-75-1.avif"
      alt=""
    />
  </div>
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
      src="./74-75-2.avif"
      alt=""
    />
  </div>

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
  }
</style>
