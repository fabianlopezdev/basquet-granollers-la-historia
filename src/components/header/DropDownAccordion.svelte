<script>
  import SeasonsList from "./SeasonsList.svelte";
  export let item;
  export let isDropDownMenuOpen = false;
</script>

<details>
  <summary>
    {item.name.toUpperCase()}
  </summary>
  <SeasonsList seasonsList={item.dropdown} bind:isDropDownMenuOpen />
</details>

<style>
  summary {
    font-size: var(--fnt-sz-h5);
    font-weight: var(--fnt-wg-medium);
  }

  details > summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details summary {
    cursor: pointer;
    position: relative;
    transition: margin 0.45s ease-out;
  }

  details[open] summary {
    margin-bottom: 10px;
  }

  summary::before {
    position: absolute;
    top: -20%;
    right: 0rem;
    content: url("../../../collapsibleArrow.svg");
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: rotate(0);
    transform-origin: 50% 35%;
    transition: 0.45s transform ease-in-out;
  }

  details[open] > summary:before {
    transform: rotate(-180deg);
    transition: 0.45s transform ease-in-out;
  }
</style>
