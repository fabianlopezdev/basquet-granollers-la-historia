<script>
  //Import components
  import TimelineArrow from "@assets/TimelineArrow.svelte";

  //Import Stores
  import { currentIndex, isOutsideSelection } from "src/svelte/stores";

  //Get props
 
  export let windowHeight;
  export let windowScrollY;
  export let windowWidth;

  export let listOfSeasons = [];



  const BASE_DURATION = 0.5;
  const MAX_DURATION = 2.5;
  const SEASON_WIDTH = 4.5; // Width of each season container in rem
  let TIMELINE_PADDING_X = 6;
  const KEYACTIONS = {
    ArrowLeft: prevSeason,
    ArrowRight: nextSeason,
    // Add more key actions as needed
  };
  const MIN_GAP = 2;
  // Minimum gap between seasons in rem
 let mobile = false;
  $: if (windowWidth < 648) {
    mobile = true;
    TIMELINE_PADDING_X = 0;
  }

  let currentPage = 0;
  let userInteractionCount = 0;
  let timelineWidth;
  let timeoutId;
  $: scrollbarWidth = windowWidth - document.documentElement.clientWidth;
  let distance;
  let adjustedDuration;
  let interactionAdjustedDuration;
  let rotationDirection;
  let activeSeason;
  let direction;
  let previousSeason;
  let animationDuration;
  let animationInView = false;
  let previousIndex = $currentIndex;
  let incomingAnimationClass = "";
  let outgoingAnimationClass = "";

  function updateAnimationClasses(newIndex) {
    if (newIndex > previousIndex) {
      incomingAnimationClass = "slide-in-right";
      outgoingAnimationClass = "slide-out-left";
    } else {
      incomingAnimationClass = "slide-in-left";
      outgoingAnimationClass = "slide-out-right";
    }

    // Apply the outgoing animation immediately
    animationClass = outgoingAnimationClass;

    // After the outgoing animation, apply the incoming animation
    setTimeout(() => {
      animationClass = incomingAnimationClass;
    }, 300); // Assuming 0.5s is your animation duration for outgoing animation

    // Reset the animation class after the incoming animation
    setTimeout(() => {
      animationClass = "";
    }, 800); // Total duration for both animations
  }

  export let animationClass;
  $: if ($isOutsideSelection) {
    if ($currentIndex > 0) {
      currentPage = Math.floor($currentIndex / maxSeasonsPerPage);
    } else {
      currentPage = 0;
    }
  }

  $: isDirectSelection = $isOutsideSelection;

  $: maxSeasonsPerPage = Math.floor(
    (timelineWidth - TIMELINE_PADDING_X * 2 * 16) /
      ((SEASON_WIDTH + MIN_GAP) * 16),
  );

  $: {
  // This statement reacts whenever $currentIndex changes
  if ($currentIndex >= 0 && listOfSeasons.length > 0 && maxSeasonsPerPage > 0) {
    currentPage = Math.floor($currentIndex / maxSeasonsPerPage);
  }
};
  $: displayedSeasons = listOfSeasons.slice(
    currentPage * maxSeasonsPerPage,
    currentPage * maxSeasonsPerPage + maxSeasonsPerPage,
  );

  //The 3x16 is the padding inline of the season container
  $: spaceBetweenDots = timelineWidth
    ? (SEASON_WIDTH + MIN_GAP) * 16 * direction + "px"
    : 0;

  $: {
    if ($currentIndex !== previousSeason) {
      activeSeason = listOfSeasons[$currentIndex];
      direction = previousSeason - $currentIndex;
      rotationDirection = 360 * -direction + "deg";
      distance = Math.abs(direction);

      adjustedDuration = Math.min(
        BASE_DURATION * Math.sqrt(distance),
        MAX_DURATION,
      );

      interactionAdjustedDuration =
        userInteractionCount === 1
          ? BASE_DURATION
          : Math.max(
              MAX_DURATION / (1 + Math.sqrt(userInteractionCount)),
              BASE_DURATION,
            );

      if (animationInView) {
        animationDuration = `${BASE_DURATION}s`;
        animationInView = false;
      } else {
        animationDuration = isDirectSelection
          ? `${adjustedDuration}s`
          : `${interactionAdjustedDuration}s`;
      }

      let duration = isDirectSelection
        ? adjustedDuration * 1000
        : interactionAdjustedDuration * 1000;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        previousSeason = $currentIndex;
        if (!isDirectSelection) {
          userInteractionCount = 0;
        }
      }, duration);
    }
  }

  function prevSeason() {
    $isOutsideSelection = false;
    isDirectSelection = false;
    userInteractionCount++;
    direction = 1;
    if ($currentIndex > 0) {
      let newIndex = $currentIndex - 1;
      updateAnimationClasses(newIndex);
      $currentIndex = newIndex;
      previousIndex = $currentIndex;

      // Additional logic if needed, like updating currentPage
      if ($currentIndex < currentPage * maxSeasonsPerPage) {
        currentPage--;
      }
    }
  }

  function nextSeason() {
    $isOutsideSelection = false;
    isDirectSelection = false;
    userInteractionCount++;
    direction = -1;
    if ($currentIndex < listOfSeasons.length - 1) {
      let newIndex = $currentIndex + 1;
      updateAnimationClasses(newIndex);
      $currentIndex = newIndex;
      previousIndex = $currentIndex;

      // Additional logic if needed, like updating currentPage
      if ($currentIndex >= (currentPage + 1) * maxSeasonsPerPage) {
        currentPage++;
      }
    }
  }
  function selectSeason(index) {
    let newIndex = currentPage * maxSeasonsPerPage + index;
    updateAnimationClasses(newIndex);
    $currentIndex = newIndex;
    previousIndex = $currentIndex;
  }

 function handleMouseEnter() {
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  console.log('scrollbarWidth', scrollbarWidth);
  document.body.style.boxSizing = 'border-box';
}

function handleMouseLeave() {
  document.body.style.paddingRight = '';
  document.body.style.boxSizing = '';
}

  function handleWheel(event) {
    isDirectSelection = false;
    userInteractionCount++;
    event.deltaY > 0 ? nextSeason() : prevSeason();
  }

  function handleKeyDown(event) {
    if (windowScrollY >= windowHeight) {
      if (KEYACTIONS[event.key]) {
        KEYACTIONS[event.key]();
      }
    }
  }

  // function initialBallMove(node) {
  //   if ($currentIndex > 0) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if ($currentIndex === -1) {
  //             animationInView = true;
  //             $currentIndex = 0;
  //           }
  //         } else {
  //           if ($currentIndex === 0) {
  //             $currentIndex = -1;
  //           }
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "0px",
  //       threshold: 1,
  //     },
  //   );

  //   observer.observe(node);
  // }
</script>

<svelte:window on:keydown={handleKeyDown} />
<div
  role="list"
  aria-label="This is a timeline"
  class="line"
  on:wheel={handleWheel}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <button
    class="left-arrow"
    disabled={$currentIndex === 0}
    on:click={prevSeason}
  >
    <TimelineArrow
      opacity={$currentIndex <= 0 && "0.3"}
      hover={$currentIndex && "0.3"}
      {mobile}
    />
  </button>

  <button
    class="right-arrow"
    disabled={$currentIndex >= listOfSeasons.length - 1}
    on:click={nextSeason}
  >
    <TimelineArrow
      rotate={180}
      opacity={$currentIndex >= listOfSeasons.length - 1 && "0.3"}
      hover={$currentIndex < listOfSeasons.length - 1 && "0.3"}
      {mobile}
    />
  </button>
  <div class="selection-container" bind:clientWidth={timelineWidth}>
    {#each displayedSeasons as season, i (season)}
      <div role="listitem" class="season-container">
        <p class="fade-transition" class:active={season === activeSeason}>
          {season}
        </p>
        <button
          class="dot color-transition"
          class:active={season === activeSeason}
          on:click={() => selectSeason(i)}
        >
          <img
            class:show={season === activeSeason}
            style="--distance: {spaceBetweenDots}; --rotation: {rotationDirection}; --duration: {animationDuration}"
            src="/ball.png"
            alt=""
          />
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
  .line {
    position: relative;
    --arrow-width: 3.3125rem;
    --arrow-bottom: -1.9rem;
    /* position: absolute; */
    /* margin-top: auto; */
    /* margin-bottom: 3rem; */
    height: 0.1875rem;
    background: linear-gradient(
      90deg,
      var(--clr-accent) 35.36%,
      var(--clr-primary) 68.89%
    );
    z-index: 1;
  }
  .show {
    display: block;
  }

  @keyframes move-horizontal {
    from {
      transform: translateX(var(--distance)) rotate(0deg) scale(2);
      border-color: none;
    }
    to {
      transform: translateX(0%) rotate(var(--rotation)) scale(2);
      border-color: var(--clr-contrast);
    }
  }

  img {
    display: none;
    background-color: var(--clr-contrast);
    border-radius: 50%;
    border: 2px solid var(--clr-contrast);
    width: 1.5rem;
    height: auto;
    transform: scale(2);
    object-fit: cover;
    animation-name: move-horizontal;
    animation-duration: var(--duration);
    animation-timing-function: ease-out;
    z-index: 1;
  }

  .fade-transition {
    transition: opacity 0.5s ease;
  }
  .color-transition {
    transition: background-color 0.5s ease;
  }
  p {
    color: var(--clr-primary);
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
    opacity: 0.3;
  }

  .left-arrow {
    position: absolute;
    width: var(--arrow-width);
    bottom: var(--arrow-bottom);
    left: -1px;
    z-index: 1;
  }

  .right-arrow {
    position: absolute;
    width: var(--arrow-width);
    bottom: var(--arrow-bottom);

    right: 2px;
    z-index: 1;
  }

  button:disabled {
    cursor: default;
  }

  .selection-container {
    display: flex;
    /* justify-content: space-between; */
    position: relative;
    top: 50%;
    transform: translateY(-80%);
    padding-inline: 6rem;
    gap: 2.75rem;
  }

  .season-container {
    width: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .dot {
    position: relative;
    --brdr-thick: 3px;
    width: calc(1.25rem - var(--brdr-thick));
    height: calc(1.25rem - var(--brdr-thick));
    background-color: var(--clr-contrast);
    border-radius: 50%;
    border: var(--brdr-thick) solid var(--clr-accent);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot:hover {
    background-color: var(--clr-accent);
  }

  .dot:active {
    transform: scale(0.9);
  }
  .dot.active {
    background-color: var(--clr-accent);
  }

  p.active {
    opacity: 1;
    font-size: 1.25rem;
    font-weight: var(--fnt-wg-medium);
  }

  @media (max-width: 648px ) {
    .line {
      /* margin-bottom: 2rem; */
    --arrow-bottom: -1.42rem;
    --arrow-width: 2.68rem;

    }

    .selection-container {
      padding-inline: 2.5rem;
    }
  }

  @media (max-height: 780px) {
    .line {
      /* margin-bottom: 2.5rem; */
    }
  }
</style>
