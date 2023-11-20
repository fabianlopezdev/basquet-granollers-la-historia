<script>
  //Import components
  import Options from "./Options.svelte";
  import Timeline from "./Timeline.svelte";
  import SeasonItem from "./SeasonItem.svelte";
  //Import data
  import { SEASONS } from "@data/globalConstants";
  import { currentIndex } from "src/svelte/stores";

  const RELAT_COLORS = ["rgba(8, 67, 149, 0.90)", "rgba(251, 115, 38, 0.84)"];

  let relatColor;
  let parentWidth = 1308;
  let parentHeight = 707;
  let relatLeft;
  let relatTop;
  let imgLeft;
  let imgTop;
  let img2Left;
  let img2Top;
  let seasonsPositions;
  let season;
  let windowWidth;
  let windowHeight;
  let windowScrollY;
  let animationClass;

  function setSlide() {
    relatColor = RELAT_COLORS[Math.round(Math.random())];
    let item1 = getRandomPosition(1);
    let item2 = getRandomPosition(2);
    let item3 = getRandomPosition(3);
    imgLeft = item1.left;
    imgTop = item1.top;
    relatLeft = item2.left;
    relatTop = item2.top;
    img2Left = item3.left;
    img2Top = item3.top;
    return {
      relatColor,
      imgLeft,
      imgTop,
      relatLeft,
      relatTop,
      img2Left,
      img2Top,
    };
  }

  $: if (parentWidth !== undefined) {
    seasonsPositions = SEASONS.map(() => {
      let season = setSlide();

      return season;
    });
  }

  $: if (animationClass) console.log('animationClass', animationClass)

  $: if (seasonsPositions.length) {
    season = { ...SEASONS[$currentIndex], ...seasonsPositions[$currentIndex] };
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
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={windowScrollY}
/>

<section id="seasons">
  <img src="/cancha.png" alt="Dibuix d'una pista de bàsquet" />
  <div class="seasons-container ">
    <div
      class="season-container {animationClass}"
      bind:clientWidth={parentWidth}
      bind:clientHeight={parentHeight}
    >
      <SeasonItem
        {season}
        {windowHeight}
        {windowScrollY}
        {animationClass}
      />
    </div>
    <Options />
    <Timeline
      {SEASONS}
      {windowHeight}
      {windowScrollY}
      {windowWidth}
      bind:animationClass
    />
  </div>
</section>

<style>
  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

   @keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideOutLeft {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }

  @keyframes slideOutRight {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }
  

  .slide-in-left {
    animation: slideInLeft 0.5s;
  }

  .slide-in-right {
    animation: slideInRight 0.5s;
  }

  .slide-out-left {
    animation: slideOutLeft 0.5s;
  }

  .slide-out-right {
    animation: slideOutRight 0.5s;
  }

  .season-container {
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100dvh - var(--pd-y-options-btns) - 2.12rem);
    width: 100%;
    color: var(--clr-primary);
    /* overflow: hidden; */
  }
  section {
    position: relative;
    background-color: var(--clr-contrast);
    height: 100dvh;
    scroll-snap-align: start;

    max-width: var(--wd-regular);
    margin: auto;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
