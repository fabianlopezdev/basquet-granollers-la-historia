<script>
  //Import assets
  import { collapsibleArrowHeader } from "@assets/icons";

  //Import stores
  import { currentIndex, display, isOutsideSelection } from "../../svelte/stores";
  import { persistantInd } from "../../svelte/stores";
  // import { writable } from "svelte/store";

  // import { page} from '$app/stores';
  import { onMount } from "svelte";

  const isSpecialsPage = window.location.pathname.includes('especials');

  if (!isSpecialsPage && $persistantInd !== $currentIndex && $persistantInd !== "") {
    onMount(() => {
      currentIndex.set($persistantInd);
      localStorage.setItem('persistantInd', "");
      setTimeout(() => { // Timeout for potential delay after reload
        const seasonsSection = document.getElementById('seasons');
        if (seasonsSection) {
           seasonsSection.scrollIntoView({ behavior: 'smooth' });
        } 
    }, 50);
    });
  }
  export let item;


  let isDropdownExpanded = false;
  let isRotated = false;

  function handleClick() {
    isDropdownExpanded = !isDropdownExpanded;
    isRotated = !isRotated;
  }

  function setCurrentIndex(i) {
    if (isSpecialsPage) {
      localStorage.setItem('persistantInd', i);
      console.log('persistantInd', $persistantInd)
      // display.set(i);
      return;
    }
    $isOutsideSelection = true;
    currentIndex.set(i);
  }



</script>

<div class="dropdown">
  <button
    aria-haspopup="true"
    aria-expanded={isDropdownExpanded}
    class:rotated={isRotated}
  >
    {item.name.toUpperCase()}
    <div class="rotate">
      {@html collapsibleArrowHeader}
    </div>
  </button>
  <div class="bridge"></div>
  <nav class="nav" class:show={isDropdownExpanded}>
    <ul class="dropdown-content">
      {#each item.dropdown as dropDownItem, i}
        <li>
          <a on:click={() => setCurrentIndex(i)} href="/#seasons">
            {dropDownItem}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  @media (hover: hover) {
    .dropdown:hover .nav {
      display: block;
    }

    .dropdown:hover .rotate {
      transform: rotate(-180deg);
    }
  }

  .bridge {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2.5rem;
    background-color: transparent;
  }

  .nav {
    display: none;
    position: absolute;
    background-color: var(--clr-primary);
    color: var(--clr-contrast);
    top: 2.5rem;
    padding-inline: 1.31rem;
    padding-block: 0.81rem;
    max-width: 19rem;
    z-index: 1;
  }
  h4 {
    padding-bottom: 0.81rem;
    font-size: var(--fnt-sz-regular);
    font-weight: var(--fnt-wg-regular);
  }

  .dropdown-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.75rem;
  }

  .dropdown-content:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 0.71875rem solid transparent;
    border-right: 0.71875rem solid transparent;
    border-bottom: 0.9375rem solid var(--clr-primary);
    position: absolute;
    top: -0.85rem;
    left: 10%;
  }
  .dropdown-content a {
    display: block;
  }
  a {
    font-weight: var(--fnt-wg-light);
  }
  .show {
    display: block;
  }
  .rotate {
    display: inline-block;
    transform: rotate(0);
    transform-origin: 60% 55%;
    transition: 0.45s transform ease-in-out;
  }

  .rotated {
    transform: rotate(-180deg);
  }

  @keyframes slideInFromTop {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .dropdown-content a {
    animation-name: slideInFromTop;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
</style>
