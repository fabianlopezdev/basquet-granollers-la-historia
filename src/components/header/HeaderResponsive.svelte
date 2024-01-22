<script>
  import { hamburgerMenuIcon } from "@assets/icons";
  // export let navigation;
  // export let headerSponsors;
  let isDropDownMenuOpen = false;

  $: {
    if (isDropDownMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
</script>

<button
  class="dropdown-menu-button"
  on:click={() => (isDropDownMenuOpen = !isDropDownMenuOpen)}
>
  {@html hamburgerMenuIcon}
</button>

<ul class:visible={isDropDownMenuOpen} class="dropdown-menu-content"></ul>

<style>
  .dropdown-menu-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--pd-x-medium);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;
  }

  .dropdown-menu-content {
    position: fixed;
    display: flex;
    background-color: var(--clr-primary);
    color: var(--clr-contrast);
    top: calc(var(--hg-header) + var(--hg-separator-line-responsive) );
    left: 0;
    right: 0;
    bottom: 0;
    padding-inline: var(--pd-x-medium);
    padding-block: 2.06rem;
    flex-direction: column;
    gap: 1.87rem;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
    overflow: auto;
  }

  .dropdown-menu-content.visible {
    transform: translateX(0);
  }

  @media (max-width: 648px) {
    .dropdown-menu-button {
      right: var(--pd-x-small);
    }
  }
</style>
