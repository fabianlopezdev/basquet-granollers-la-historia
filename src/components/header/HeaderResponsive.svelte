<script>
  import { hamburgerMenuIcon } from "@assets/icons";
  import CbgLogo from "../../assets/CbgLogo.svelte";

  import DropDownAccordion from "./DropDownAccordion.svelte";
  import SponsorsResponsive from "./SponsorsResponsive.svelte";
  import MadeBy from "@components/MadeBy.svelte";

  export let headerNavigation;

  let isDropDownMenuOpen = false;

  const headerSponsorsWhite = [
    {
      url: `https://cbgranollers.cat/`,
      src: "/cbg-logo-blanc.svg",
      alt: "Logo del Club Bàsquet Granolelrs",
    },
    {
      url: `https://finquesvallbona.com/`,
      src: "/finques-vallbona-logo-blanc.svg",
      alt: "Logo de Finques Ballbona",
    },
    {
      url: `https://www.granollers.cat/`,
      src: "/ajuntament-granollers-logo-blanc.svg",
      alt: "Logo de l'ajuntament de Granollers",
    },
  ];

  function handleTouchMove(event) {
    if (isDropDownMenuOpen) {
      event.preventDefault();
    }
  }
  $: {
    if (isDropDownMenuOpen) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("touchmove", handleTouchMove);
    }
  }
</script>

<button
  class="dropdown-menu-button"
  on:click={() => (isDropDownMenuOpen = !isDropDownMenuOpen)}
>
  {@html hamburgerMenuIcon}
</button>

<ul class:visible={isDropDownMenuOpen} class="dropdown-menu-content">
  <li>
    <a
      class="cbg-link-wrapper"
      href="https://cbgranollers.cat/"
      target="_blank"
    >
      <CbgLogo color={"#fff"} wd={25} />
      <h5 class="cbg-link">CLUB BÀSQUET GRANOLLERS</h5>
    </a>
  </li>
  {#each headerNavigation as item}
    <li>
      {#if item.dropdown}
        <DropDownAccordion {item} bind:isDropDownMenuOpen />
      {:else if item.link.includes("http")}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <h5>{item.name.toUpperCase()}</h5>
        </a>
      {:else}
        <a href={item.link}>
          <h5>{item.name.toUpperCase()}</h5>
        </a>
      {/if}
    </li>
  {/each}

  <SponsorsResponsive />
  <MadeBy />
</ul>

<style>
  .cbg-link-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .cbg-link {
    text-align: center;
    text-decoration: underline;
  }

  .dropdown-menu-content {
    position: fixed;
    display: flex;
    background-color: var(--clr-primary);
    color: var(--clr-contrast);
    top: calc(var(--hg-header) + var(--hg-separator-line-responsive));
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

  h5 {
    font-size: var(--fnt-sz-h5);
    font-weight: var(--fnt-wg-medium);
  }
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

  .dropdown-menu-content.visible {
    transform: translateX(0);
  }

  @media (max-width: 648px) {
    .dropdown-menu-button {
      right: var(--pd-x-small);
    }

    .dropdown-menu-content {
      padding-inline: var(--pd-x-small);
    }
  }
</style>
