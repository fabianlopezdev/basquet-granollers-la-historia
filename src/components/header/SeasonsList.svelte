<script>
  import { SEASONS_INFO } from '@data/globalConstants';
  import { currentIndex, display, isOutsideSelection } from "../../svelte/stores";

  export let item;
  export let isDropDownMenuOpen;
  export let isMenuOpen;
  // console.log('item', item)
  function setStores(i) {
    currentIndex.set(i);
    if (item !== undefined) {
      display.set(item.name);
    }
    // console.log('item.name', item.name)
  }

  function handlePopupsMenu() {
    if (isDropDownMenuOpen === true) isDropDownMenuOpen = false;
    if (isMenuOpen === true) isMenuOpen = false;
  }
  // $: console.log('isDropDownMenuOpen', isDropDownMenuOpen);
</script>

<ul class="links-container">
  {#each SEASONS_INFO as season, i}
    <li>
      <a on:click={() => { setStores(i); handlePopupsMenu()}} href={'#seasons'}>{season.years}</a>
    </li>
  {/each}
</ul>

<style>
  .links-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 1rem;
    padding-left: 1rem;
    width: 18rem;
    color: white;
  }
</style>