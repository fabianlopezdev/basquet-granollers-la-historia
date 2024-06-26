<script>
  //Import components
  import Options from "./Options.svelte";
  import Timeline from "./Timeline.svelte";
  import SeasonItem from "./SeasonItem.svelte";
  import PopupMenu from "../popupMenu/PopupMenu.svelte";
  import MadeBy from "@components/MadeBy.svelte";

  //Import data
  import { currentIndex, safari } from "src/svelte/stores";
  import { display } from "src/svelte/stores";
  import { collapsibleArrowSeasonMobileMenu } from "@assets/icons";
  import SeasonsList from "../header/SeasonsList.svelte";
  import SponsorsResponsive from "@components/header/SponsorsResponsive.svelte";
  import { closeMenuIcon } from "@assets/icons";

  import { onMount } from "svelte";

  import { disableBgScroll, enableBgScroll } from "@utils/helperFunctions";
  import { fade } from "svelte/transition";

  export let seasons;
  export let totalSeasons;
  export let listOfSeasons;

  let windowWidth;
  let windowHeight;
  let windowScrollY;
  let animationClass;
  let touchstartX = 0;
  let touchendX = 0;
  let direction = "";
  let prevIndex = 0;
  let windowOuterHeight;

  let isMenuOpen = false;

  let seasonWidth = 100 / totalSeasons;
  $: transform = `translateX(${-seasonWidth * $currentIndex}%)`;

  let isSafari = false;

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    const isWebKit = userAgent.indexOf("AppleWebKit") !== -1;
    const isChrome = userAgent.indexOf("Chrome") !== -1;
    const isFirefox = userAgent.indexOf("Firefox") !== -1;
    isSafari = isWebKit && !isChrome && !isFirefox;
    safari.set(isSafari);
  });

  function movePrevSlide() {
    // Prevent moving to the previous slide if the current index is 0
    if ($currentIndex > 0) {
      direction = "prev";
      prevIndex = $currentIndex;
      $currentIndex = $currentIndex - 1;
    }
  }

  // Function to move to next slide
  function moveNextSlide() {
    // Prevent moving to the next slide if the current index is the last index
    if ($currentIndex < totalSeasons - 1) {
      direction = "next";
      prevIndex = $currentIndex;
      $currentIndex = $currentIndex + 1;
    }
  }
  // Function to handle touch start
  const handleTouchStart = (e) => {
    if (isDialogOpen) return;
    touchstartX = e.touches[0].clientX;
  };

  // Function to handle touch end
  const handleTouchEnd = (e) => {
    if (isDialogOpen) return;
    touchendX = e.changedTouches[0].clientX;
    handleSwipeGesture();
  };
  const SWIPE_THRESHOLD = 0; // Adjust as needed for sensitivity

  const handleSwipeGesture = () => {
    const swipeDistance = touchendX - touchstartX;

    // Check if the swipe distance exceeds the threshold
    if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
      if (swipeDistance < 0) {
        // Swipe was left (to see the next season)
        moveNextSlide();
      } else {
        // Swipe was right (to see the previous season)
        movePrevSlide();
      }
    }
  };

  let isDialogOpen = false;
  let seasonsElement;
  let initialWindowHeight;
  let openImg1 = false;
  let openImg2 = false;

  function handleClick() {
    openImg1 = false;
    openImg2 = false;
    // Disable scrolling
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  let isMobileSafari =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);

  let scrollPosition = 0;
  $: {
    if ($display !== "relats" || isDialogOpen || openImg1 || openImg2) {
      scrollPosition = window.scrollY;
      // For any browser
      disableBgScroll(scrollPosition, isMobileSafari);
    } else {
      enableBgScroll(scrollPosition, isMobileSafari);
    }
  }
</script>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={windowScrollY}
  bind:outerHeight={windowOuterHeight}
/>

<section id="seasons" bind:this={seasonsElement}>
  {#if $display !== "relats"}
    <PopupMenu season={seasons[$currentIndex]} />
  {/if}
  <div class="season-wrapper">
    <div class="season-menu mobile">
      <h4 class="menu-title">Tria una temporada</h4>
      <button
        class="menu-season-selected"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        >{seasons[$currentIndex].years}
        <div class="rotate" class:rotated={isMenuOpen}>
          {@html collapsibleArrowSeasonMobileMenu}
        </div></button
      >
    </div>
    <div class:showMenu={isMenuOpen} class="select-season-popup">
      <p>TEMPORADES</p>
      <SeasonsList bind:isMenuOpen seasonsList={listOfSeasons} />
      <div style="padding-top: 3rem; width: 100%;">
        <SponsorsResponsive />
      </div>
      <MadeBy />
    </div>
    <div
      class="seasons-container"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
      style="--totalSeasons: {totalSeasons}; transform: {transform}"
    >
      {#each seasons as season, seasonIndex}
        <SeasonItem
          {season}
          {windowHeight}
          {windowScrollY}
          {seasonIndex}
          bind:isDialogOpen
          bind:openImg1
          bind:openImg2
          bind:scrollPosition
        />
      {/each}
    </div>
  </div>
  <div class="timeline-options" class:safari={isSafari}>
    <Options />
    <Timeline
      {listOfSeasons}
      {windowHeight}
      {windowScrollY}
      {windowWidth}
      bind:animationClass
    />
  </div>
</section>

{#if openImg1 === true}
  <section class="dialog-container" in:fade={{ duration: 300 }}>
    <button class="modal-button" on:click={handleClick}>
      {@html closeMenuIcon}
    </button>
    <div>
      <img
        src={seasons[$currentIndex].images.img_1.url}
        alt={seasons[$currentIndex].images.img_1.alt}
      />
    </div>
  </section>
{/if}
{#if openImg2 === true}
  <section class="dialog-container" in:fade={{ duration: 300 }}>
    <button class="modal-button" on:click={handleClick}>
      {@html closeMenuIcon}
    </button>
    <div>
      <img
        src={seasons[$currentIndex].images.img_2.url}
        alt={seasons[$currentIndex].images.img_2.alt}
      />
    </div>
  </section>
{/if}

<style>
  #seasons {
    overflow-y: scroll;
  }

  .modal-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 20;
  }

  .dialog-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    margin-top: calc(var(--hg-menu) * -1);
    height: 101dvh;
    width: 102vw;
    z-index: 10;
  }

  .timeline-options {
    position: absolute;
    bottom: 4rem;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    max-width: var(--wd-max);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4.5rem;
    z-index: 1;
  }
  #seasons {
    --hg-menu: 4rem;
    --offset-season-menu: calc(var(--hg-menu) - 2px);
    background-color: var(--clr-contrast);
    position: relative;
    height: 100vh;
    height: 100dvh;
  }

  .mobile {
    display: none;
  }

  .season-wrapper {
    display: flex;
    height: inherit;
    flex-direction: column;
    background-position: center;
    margin: auto;
    background-image: url("/cancha.png");
    max-width: var(--wd-max);
    overflow: hidden;
  }

  .season-menu {
    height: var(--hg-menu);
    /* width: 100vw; */
    color: var(--clr-primary);

    justify-content: space-between;
    padding-block: 1.44rem;
    padding-inline: var(--pd-x-small);
    font-size: 0.875rem;
    position: relative;
    background-color: var(--clr-contrast);
    z-index: 3;
  }
  /*Line Separator*/
  .season-menu::after {
    content: "";
    position: absolute;
    left: var(--pd-x-small);
    right: var(--pd-x-small);
    bottom: 0;
    border-bottom: 2px solid var(--clr-primary);
  }

  .select-season-popup {
    position: absolute;
    top: var(--offset-season-menu);
    left: 0;
    right: 0;
    background-color: var(--clr-primary-opacity);
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    transform: translateY(calc(-100% - var(--offset-season-menu)));
    transition: transform 0.5s ease-out;
    color: var(--clr-contrast);
    z-index: 2;
  }

  .select-season-popup.showMenu {
    visibility: visible;
    transform: translateY(0);
  }

  .seasons-container {
    width: calc(100% * var(--totalSeasons));
    height: calc(100svh - var(--pd-y-options-btns));
    display: flex;
    color: var(--clr-primary);
    transition: transform 1.5s ease-out;
    z-index: 1;
  }

  P {
    color: var(--clr-accent);
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
    padding-top: 3rem;
  }
  button {
    cursor: pointer;
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

  .rotated {
    transform: rotate(-180deg);
  }

  @media (max-height: 780px) {
    .timeline-options {
      bottom: 2rem;
      gap: 4rem;
    }
  }

  @media (max-width: 648px) {
    .timeline-options {
      bottom: 2.5rem;
      gap: 3.5rem;
    }

    .seasons-container {
      height: calc(100svh - var(--pd-y-options-btns) - 2.5rem);
    }

    .mobile {
      display: flex;
    }
  }

  @media (max-height: 812px) and (max-width: 648px) {
    .season-menu {
      padding-block: 1rem;
      height: max-content;
    }

    .select-season-popup {
      top: calc(var(--offset-season-menu) - 0.88rem);
    }
  }
  @media (max-height: 568px) {
    .timeline-options {
      bottom: 2rem;
      gap: 2.8rem;
    }
  }
</style>
