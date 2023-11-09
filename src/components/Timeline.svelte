<script>
  import TimelineArrow from '@assets/TimelineArrow.svelte';
  let activeSeason = null;
  function selectSeason(season) {
    activeSeason = season;
  }
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
      '84/85',
      '85/86',
      '86/87',
      '87/88',
      '88/89',
      '89/90',
      '90/91',
      '91/92',
      '92/93',
    ]
</script>

<div class='line'>
  <div class='left-arrow'>
   <TimelineArrow opacity="0.3"/>

  </div>

   <div class='right-arrow'>
   <TimelineArrow rotate={180}/>

  </div>
  <div class='dots-container'>
    {#each seasons as season, i (season)}
    {#if i < 10}
      <div class='dot' 
       class:active={season === activeSeason}
      on:click={() => selectSeason(season)}>
  
      </div>
      {/if}
    {/each}
  </div>
</div>
<style>
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
  }

  .right-arrow {
    position: absolute;
    width: var(--arrow-width);
    top: 50%;
    transform: translateY(-45%);
    right: 2px;
  }
  .dots-container {
    display: flex;
    justify-content: space-between;
   position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding-inline: 6rem;
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

  .active {
    background-color: var(--clr-accent);
  }
</style>