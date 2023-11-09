<script>
  import TimelineArrow from '@assets/TimelineArrow.svelte';
   const seasons = [
      '74/75',
      '75/76',
      '77/78',
      '76/77',
      '78/79',
      '79/80',
      '80/81',
      '81/82',
      '82/83',
      '83/84',
    ]
  let activeSeason = seasons[0];
  let currentSeason = 0;

  function prevSeason() {
    if (currentSeason > 0) {
      currentSeason--;
      activeSeason = seasons[currentSeason];
    }
  }

  function nextSeason() {
    if (currentSeason < seasons.length - 1) {
      currentSeason++;
      activeSeason = seasons[currentSeason];
    }
  }

  function selectSeason(season, i) {
    currentSeason = i;
    activeSeason = season;
  }
 
</script>

<div class='line'>
  <div class='left-arrow' class:cursor={currentSeason > 0} on:click={prevSeason}>
   <TimelineArrow opacity={!currentSeason && "0.3"}/>

  </div>

   <div class='right-arrow' class:cursor={currentSeason < seasons.length - 1} on:click={nextSeason}>
   <TimelineArrow rotate={180} opacity={currentSeason >= seasons.length -1 && "0.3"}/>

  </div>
  <div class='selection-container'>
    {#each seasons as season, i (season)}
    {#if i < 10}
      <div class='season-container'>

        <p  class:active={season === activeSeason}>75/76</p>
        <div class='dot' 
        class:active={season === activeSeason}
        on:click={() => selectSeason(season, i)}>
      </div>
  </div>
      {/if}
    {/each}
  </div>
</div>
<style>
  p {
    color: var(--clr-primary);
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
    opacity: 0.3;
;  }
  .line {
    --arrow-width: 3.3125rem;
    position: absolute;
    width: calc(100% - (var(--pd-x) * 2));
    bottom: 2rem;
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
    transform: translateY(-45%);
    left: -1px;
    z-index: 1;
  }

  .right-arrow {
    position: absolute;
    width: var(--arrow-width);
    top: 50%;
    transform: translateY(-45%);
    right: 2px;
    z-index: 1;
  }

  .cursor {
    cursor: pointer;
  }
  .selection-container {
    display: flex;
    justify-content: space-between;
   position: relative;
    top: 50%;
    transform: translateY(-82%);
    padding-inline: 6rem;
  }

  .season-container {
    min-width: 4rem;
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
    cursor: pointer;
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