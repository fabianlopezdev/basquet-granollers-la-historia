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

  const baseDuration = 0.5; // Base duration in seconds for moving one season
  const maxDuration = 2.5;

  $: distance = Math.abs(previousSeason - currentSeason);
  $: adjustedDuration = Math.min(baseDuration * Math.sqrt(distance), maxDuration);
   $: activeSeason = seasons[currentSeason]; 
   $: direction = previousSeason - currentSeason;
   $: rotationDirection = (360 * -direction) + 'deg';
   $: animatioDuration = `${adjustedDuration}s`;
  //  $: timeOutDuration = animatioDuration ? 1000 * parseFloat(animatioDuration) : 500;
   let previousSeason = 0;

  $: if (currentSeason !== previousSeason) {
    // Logic to handle animation start position
    // Update previousSeason after the animation logic
    setTimeout(() => {
      previousSeason = currentSeason;
    },Math.min(baseDuration * Math.sqrt(Math.abs(previousSeason - currentSeason)), maxDuration) * 1001); // Duration of the animation
  }
  let containerWidth;
 
  //The 3x16 is the padding inline of the season container
  $: spaceBetweenDots = containerWidth ? (((containerWidth / (seasons.length - 1)) - (3*16)) * direction) + 'px' : 0;

  

  function prevSeason() {
    direction = 1;
    if (currentSeason > 0) {
      currentSeason--;
    }
  }

  function nextSeason() {
    direction = -1;
    if (currentSeason < seasons.length - 1) {
      currentSeason++;
    }
  }

  function selectSeason(index) {
    currentSeason = index;
  }
 
</script>

<div class='line'>
  <button class='left-arrow' disabled={currentSeason === 0} on:click={prevSeason}>
   <TimelineArrow opacity={!currentSeason && "0.3"}/>

  </button>

   <button class='right-arrow' disabled={currentSeason >= seasons.length - 1} on:click={nextSeason}>
   <TimelineArrow rotate={180} opacity={currentSeason >= seasons.length -1 && "0.3"}/>

   </button>
  <div class='selection-container' bind:clientWidth={containerWidth}>
    {#each seasons as season, i (season)}
    {#if i < 10}
      <div class='season-container'>

        <p  class='fade-transition'class:active={season === activeSeason}>{season}</p>
        <button  class='dot color-transition' 
        class:active={season === activeSeason}
        on:click={() => selectSeason(i)}>
        <img 
        class:show={season === activeSeason} 
        style="--distance: {spaceBetweenDots}; --rotation: {rotationDirection}; --duration: {animatioDuration}"
        src="/ball.png" alt="">
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
    transform: translateX(var(--distance)) rotate(0deg);

  }
  to {
    transform: translateX(0%) rotate(var(--rotation));
  }
}
  img {
    display: none;
    background-color: var(--clr-contrast);
    border-radius: 50%;
    width: 1.5rem;
    height: auto;
    object-fit: cover;
    animation-duration: var(--duration);
  animation-timing-function: linear;
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

  .dot.active {
    /* background-color: var(--clr-accent); */
     border: none;
     width: 1.5rem;
     height: 1.5rem;
  }

  p.active {
    opacity: 1;
     font-size: 1.25rem;
    font-weight: var(--fnt-wg-medium);
  }
</style>