<script>

  import { currentIndex, display, isOutsideSelection } from "../../svelte/stores";

  export let seasonsList;
  export let isDropDownMenuOpen;
  export let isMenuOpen;
  // console.log('seasonsList', seasonsList)
  function setStores(i) {
    currentIndex.set(i);
    if (seasonsList !== undefined) {
      display.set(seasonsList.name);
    }
    // console.log('seasonsList.name', seasonsList.name)
  }

  function handlePopupsMenu() {
    if (isDropDownMenuOpen === true) isDropDownMenuOpen = false;
    if (isMenuOpen === true) isMenuOpen = false;
  }
  // $: console.log('isDropDownMenuOpen', isDropDownMenuOpen);
</script>

<div class='wrapper'>

  <ul class="links-container">
    {#each seasonsList.dropdown as season, i}
    <li>
      <a on:click={() => { setStores(i); handlePopupsMenu()}} href={'#seasons'}>{season}</a>
    </li>
    {/each}
  </ul>
</div>

<style>
  .wrapper {
     width: 100vw;
    display: flex;
    justify-content: center;
    padding-right: var(--pd-x);
  }
  .links-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 1rem;
    width: 18rem;
    color: white;
  }
</style>