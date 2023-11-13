<script>
  //Import components
  import TimelineArrow from '@assets/TimelineArrow.svelte';
   const seasons = [
      '74/75',
      '75/76',
      '76/77',
      '77/78',
      '78/79',
      '79/80',
      '80/81',
      '81/82',
      '82/83',
      '83/84',
    ]
let currentSeason = 0;
let userInteractionCount = 0;
const baseDuration = 0.5; // Minimum duration for interactions
const maxDuration = 2.5;


  $: distance = Math.abs(previousSeason - currentSeason);
  $: adjustedDuration = Math.min(baseDuration * Math.sqrt(distance), maxDuration);
 $: interactionAdjustedDuration = userInteractionCount === 1
  ? baseDuration
  : Math.max(
      maxDuration / (1 + Math.sqrt(userInteractionCount)), 
      baseDuration
    );

   $: activeSeason = seasons[currentSeason]; 
   $: direction = previousSeason - currentSeason;
   $: rotationDirection = (360 * -direction) + 'deg';
   let previousSeason = 0;

   let animationDuration;

$: animationDuration = directSelection ? `${adjustedDuration}s` : `${interactionAdjustedDuration}s`;

 $: if (currentSeason !== previousSeason) {
  let duration;
  if (directSelection) {
    duration = Math.min(baseDuration * Math.sqrt(Math.abs(previousSeason - currentSeason)), maxDuration) * 1000;
  } else {
    duration = Math.max(maxDuration / (1 + Math.sqrt(userInteractionCount)), baseDuration) * 1000;
  }

  setTimeout(() => {
    previousSeason = currentSeason;
    if (!directSelection) {
      userInteractionCount = 0; // Reset the count after the animation
    }
    directSelection = false; // Reset directSelection flag
  }, duration);
}

  let containerWidth;
 
  //The 3x16 is the padding inline of the season container
  $: spaceBetweenDots = containerWidth ? (((containerWidth / (seasons.length - 1)) - (3*16)) * direction) + 'px' : 0;

  
  $: scrollbarWidth = getScrollbarWidth();
  
  function prevSeason() {
     directSelection = false;
     userInteractionCount++;
    direction = 1;
    if (currentSeason > 0) {
      currentSeason--;
    }
  }

  function nextSeason() {
    userInteractionCount++;
    directSelection = false;
    direction = -1;
    if (currentSeason < seasons.length - 1) {
      currentSeason++;
    }
  }

  let directSelection = false;

  function selectSeason(index) {
    directSelection = true;
    currentSeason = index;
  }
  
  
  function handleMouseEnter() {
    if (currentSeason === 0) return;
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  function handleMouseLeave() {
    document.body.style.overflow = ''; 
    document.body.style.paddingRight = '';
  }
  
 function handleWheel(event) {
    directSelection = false;
   userInteractionCount++;
    const scrollPosition = window.scrollY ;
    const webHeight = document.body.scrollHeight - window.innerHeight;
    if (event.deltaY < 0 && currentSeason === 0) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }
    if (scrollPosition === webHeight) {
      document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

     if (event.deltaY > 0 && currentSeason < seasons.length - 1) { // Scrolling down
        currentSeason++;
      } else if (event.deltaY < 0 && currentSeason > 0) { // Scrolling up
  
      if (currentSeason > 0) {
      currentSeason--;
    }
  }}}

 function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

  function handleKeyDown(event) {
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

    // Check if the window's scroll position is at its maximum height
    if (window.scrollY >= maxScrollHeight) {
      switch (event.key) {
        case 'ArrowLeft':
          prevSeason();
          break;
        case 'ArrowRight':
          nextSeason();
          break;
      }
    }}
</script>

<svelte:window on:keydown={handleKeyDown}/>
<div role='list' aria-label='This is a timeline' class='line' on:wheel={handleWheel} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} 
     >
  <button class='left-arrow' disabled={currentSeason === 0} on:click={prevSeason}>
   <TimelineArrow opacity={!currentSeason && "0.3"} hover={currentSeason && "0.3"}/>

  </button>

   <button class='right-arrow' disabled={currentSeason >= seasons.length - 1} on:click={nextSeason}>
   <TimelineArrow rotate={180} opacity={currentSeason >= seasons.length -1 && "0.3"} hover={currentSeason < seasons.length -1 && "0.3"}/>

   </button>
  <div class='selection-container' bind:clientWidth={containerWidth}>
    {#each seasons as season, i (season)}
    {#if i < 10}
      <div role='listitem' class='season-container'>

        <p class='fade-transition' class:active={season === activeSeason}>{season}</p>
        <button class='dot color-transition' class:active={season === activeSeason} on:click={() => selectSeason(i)}>
         <img class:show={season === activeSeason} style="--distance: {spaceBetweenDots}; --rotation: {rotationDirection}; --duration: {animationDuration}" src="/ball.png" alt="">

        </button>
      </div>
    {/if}
    {/each}
  </div>
</div>
<style>
  .show {
    display: block;
    animation-name: move-horizontal;
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
;  }
  .line {
    --arrow-width: 3.3125rem;
    position: absolute;
    width: 100%;
    bottom: 2.5rem;
    height: 0.1875rem;
     background: linear-gradient(
      90deg,
      var(--clr-accent) 35.36%,
      var(--clr-primary) 68.89%
    );
  }

  .left-arrow {
    position: absolute;
    width: var(--arrow-width);
    top: 50%;
    transform: translateY(-50%);
    left: -1px;
    z-index: 1;
  }

  .right-arrow {
    position: absolute;
    width: var(--arrow-width);
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
    z-index: 1;
  }

  button:disabled {
    cursor: default;
  }


  .selection-container {
    display: flex;
    justify-content: space-between;
   position: relative;
    top: 50%;
    transform: translateY(-80%);
    padding-inline: 6rem;
  }

  .season-container {
    min-width: 4.5rem;
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
</style>