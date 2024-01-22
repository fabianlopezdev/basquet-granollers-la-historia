<script>
  import { hamburgerMenuIcon } from "@assets/icons";
  import DropDownAccordion from "./DropDownAccordion.svelte";
  export let navigation;

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
  console.log("navigation", navigation);

  $: {
    if (isDropDownMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
  {#each navigation as item}
    <li>
      {#if item.dropdown}
        <DropDownAccordion {item} />
        <!-- {:else if item.link.includes("http")}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <h5>{item.name.toUpperCase()}</h5>
        </a>
      {:else}
        <a href={item.link}>
          <h5>{item.name.toUpperCase()}</h5>
        </a> -->
      {/if}
    </li>
  {/each}

  <ul class="sponsors-menu-container">
    <p class='sponsors-title'>Sponsors</p>
    <div class="sponsors-container">
      {#each headerSponsorsWhite as sponsor}
        <li>
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.src} alt={sponsor.alt} />
          </a>
        </li>
      {/each}
    </div>
  </ul>
</ul>

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

  .dropdown-menu-content.visible {
    transform: translateX(0);
  }

  .sponsors-menu-container {
    margin-top: auto;
  }

  .sponsors-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

   .sponsors-title {
    width: 100%;
    text-align: center;
    padding-bottom: 1.06rem;
    position: relative;
  }

  .sponsors-title::before {
    content: "";
    height: 1px;
    width: calc(50% - 3rem);
    background-color: #d8d8d8;
    position: absolute;
    top: calc(50% - 0.4rem);
    left: 0;
  }

  .sponsors-title::after {
    content: "";
    height: 1px;
    width: calc(50% - 3rem);
    background-color: #d8d8d8;
    position: absolute;
    top:calc(50% - 0.4rem);
    right: 0;
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
