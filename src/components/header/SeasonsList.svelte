<script>

  import { currentIndex } from "../../svelte/stores";
 

  export let seasonsList;
  export let isDropDownMenuOpen;
  export let isMenuOpen;

 
  function setStores(i) {
    currentIndex.set(i);
  }

  function handlePopupsMenu() {
    if (isDropDownMenuOpen === true) isDropDownMenuOpen = false;
    if (isMenuOpen === true) isMenuOpen = false;
  }
</script>


<div class='wrapper'>

  <ul class="links-container">
    {#each seasonsList as season, i}
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
  @media (max-width: 648px) {
    .wrapper {
 padding-right: 0;
    }}
</style>