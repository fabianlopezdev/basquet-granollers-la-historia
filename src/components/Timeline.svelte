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
   $: activeSeason = seasons[currentSeason]; // Reactive statement

  function prevSeason() {
    if (currentSeason > 0) {
      currentSeason--;
    }
  }

  function nextSeason() {
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
  <div class='selection-container'>
    {#each seasons as season, i (season)}
    {#if i < 10}
      <div class='season-container'>

        <p  class='fade-transition'class:active={season === activeSeason}>{season}</p>
        <button  class='dot color-transition' 
        class:active={season === activeSeason}
        on:click={() => selectSeason(i)}>
      </button>
  </div>
      {/if}
    {/each}
  </div>
</div>
<style>
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
    background-color: var(--clr-accent);
  }

  p.active {
    opacity: 1;
     font-size: 1.25rem;
    font-weight: var(--fnt-wg-medium);
  }
</style>