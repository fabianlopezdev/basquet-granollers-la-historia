<script>
  import { closeMenuIcon } from "@assets/icons";
  import { display } from "src/svelte/stores";
  import { fade, slide } from "svelte/transition";
  import { upperCaseFirstLetter } from "@utils/helperFunctions";
  import PlayerCard from "./players/PlayerCard.svelte";
  import CoachCard from "./players/CoachCard.svelte";
  import ResultsTable from "./results/ResultsTable.svelte";
  import ClassificationTable from "./results/ClassificationTable.svelte";
  import ArticleLayout from "@components/ArticleLayout.svelte";
  import { onMount } from "svelte";

  export let season;

  const { stats, social, years } = season;
  const { divisio, jugadors, entrenadors } = stats;
  const normalizedDivisioKey = Object.keys(divisio[0]);

  const lliga = normalizedDivisioKey ? divisio[0][normalizedDivisioKey] : "";
  const yearsArr = years.split("/");

  function handleEscape(e) {
    if (e.key === "Escape") {
      if ($display === "relats") return;
      display.set("relats");
    }
  }

  let popUpStartingPosition;
  let initialPopUpStartingPosition;

  onMount(() => {
    initialPopUpStartingPosition = window.innerHeight;
  });

  function handleTopScrollLimit() {
    if (window.scrollY < initialPopUpStartingPosition) {
      window.scrollTo(0, initialPopUpStartingPosition);
    }
  }

  let initialTouchY;
  function handleTouch(event) {
    initialTouchY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    const currentTouchY = event.touches[0].clientY;
    const touchDiff = currentTouchY - initialTouchY;
    

    if ((window.scrollY === initialPopUpStartingPosition || window.scrollY === popUpStartingPosition) && touchDiff > 0) {
      event.preventDefault();
    } else {
      initialTouchY = currentTouchY;
    }
  }
</script>

<svelte:window
  on:keydown={handleEscape}
  on:scroll={handleTopScrollLimit}
  on:innerHeight={handleTopScrollLimit}
/>

<section
  class="more-info-menu"
  style={$display === "resultats" && "background-color: #F3F3F3"}
  in:fade={{ duration: 300 }}
  on:touchstart={handleTouch}
  on:touchmove={handleTouchMove}
>
  <div class="max-width">
    <header class="menu-header">
      <h2>
        <span style="color: var(--clr-accent)">
          {$display === "resultats"
            ? `${upperCaseFirstLetter($display)} i Classificació`
            : $display === "jugadors"
              ? `${upperCaseFirstLetter($display)} i Entrenadors`
              : upperCaseFirstLetter($display)}
        </span>
        Temporada {season.years}
      </h2>
      <button on:click={() => display.set("relats")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
        >
          <path
            d="M13.5781 36.7332L36.7331 13.5782"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M36.7319 36.7332L13.5769 13.5782"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <circle
            cx="25.5"
            cy="25.5002"
            r="24.5"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </button>
    </header>
    <div class="menu-container">
      {#if $display === "jugadors"}
        <h3 class="players-title">JUGADORS</h3>
        <ul class="players-container">
          {#each jugadors as jugador}
            <PlayerCard {jugador} />
          {/each}
        </ul>
        {#if entrenadors !== undefined > 0}
          <h3 class="players-title">ENTRENADORS</h3>
          <ul class="players-container">
            {#each entrenadors as entrenador}
              <CoachCard {entrenador} />
            {/each}
          </ul>
        {/if}
      {:else if $display === "resultats"}
        <div class="table-wrapper">
          {#each Object.keys(stats) as key}
            {#if key.startsWith("classificacio") && stats[key] !== undefined}
              <div class="table-item">
                <ClassificationTable
                  classificacio={stats[key]}
                  competition={lliga}
                  {key}
                />
              </div>
            {:else if key.startsWith("resultats") && stats[key] !== undefined}
              <div class="table-item">
                <ResultsTable
                  resultats={stats[key]}
                  competition={lliga}
                  {key}
                />
              </div>
            {/if}
          {/each}
          <div class="descarrega-button-wrapper">
            <div class="descarrega-button">
              <a
                href={`https://historiabasquetgranollers.cat/estadistiques/19${yearsArr[0]}-${yearsArr[1]}_stats.xlsx`}
                target="_blank"
              >
                MÉS INFORMACIÓ
              </a>
            </div>
          </div>
        </div>
      {:else if $display === "social"}
        <ArticleLayout
          text={social}
          title={`Te'n recordes del 19${years.split("/")[0].toString()}?`}
        />
      {/if}
    </div>
  </div>
</section>

<style>
  .more-info-menu {
    --hg-header-menu: calc(var(--hg-header) + 1rem);
    --mg-left-top-header: 1rem;
    position: absolute;
    min-height: 100%;
    width: 100vw;
    margin: 0;
    background-color: var(--clr-contrast);
    z-index: 10;
    overflow-x: hidden;
    /* overflow: hidden; */
  }

  .max-width {
    position: relative;
  }

  h2 {
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.5rem + 1.6vw, 1.9rem);
    font-weight: var(--fnt-wg-regular);
    line-height: 1.5rem;
  }

  h3 {
    font-size: 1.625rem;
    padding-top: 2rem;
  }

  svg {
    width: 1.5625rem;
    width: clamp(
      1.5625rem,
      0.6358793517406963rem + 3.12124849939976vw,
      3.1875rem
    );
  }

  .menu-container {
    padding-block: 1rem;
    max-width: var(--wd-max);
    padding-inline: var(--pd-x);
    margin: auto;
    min-height: calc(100% - var(--hg-header-menu) - var(--mg-left-top-header));
  }

  .menu-header {
    background-color: var(--clr-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: var(--pd-x);
    height: var(--hg-header-menu);
    /* margin-top: var(--mg-left-top-header); */
    /* margin-left: var(--mg-left-top-header); */
  }

  .players-title {
    text-align: center;
  }
  .players-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    padding-block: 2rem;
  }
  .table-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    row-gap: 2rem;
    width: 100%;
    padding-block: 2rem;
  }

  .table-item {
    flex-basis: calc(50% - 0.5rem);
  }

  .descarrega-button-wrapper {
    flex-basis: 100%;
    display: flex;
    justify-content: flex-start;
  }

  a {
    margin: auto;
    text-decoration: none;
    padding-bottom: 0.1rem;
    display: grid;
    place-items: center;
    height: var(--hg-btn);
    width: 11.5rem;
    border: 1px solid var(--clr-accent);
    background-color: var(--clr-contrast-opacity);
    color: var(--clr-accent);
    border-radius: 1.75rem;
    font-weight: var(--fnt-wg-regular);
    /* opacity: 0.7; */
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
  }

  a:active {
    transform: scale(0.95);
  }

  a:hover {
    cursor: pointer;
    background-color: var(--clr-accent);
    color: var(--clr-contrast);
  }

  @media (max-width: 1065px) {
    .menu-container,
    .menu-header {
      padding-inline: var(--pd-x-medium);
    }
  }

  @media (max-width: 648px) {
    .more-info-menu {
      --hg-header-menu: 4.25rem;
    }
    .menu-header {
      padding-inline: var(--pd-x-small);
    }
    .menu-container {
      padding-inline: var(--pd-x-small);
      font-size: 0.625rem;
    }
    .table-wrapper {
      padding-block: 1rem;
      position: absolute;
      left: 0;
      justify-content: center;
      /* width: 100vw; */
      /* flex-direction: column; */
    }

    .descarrega-button-wrapper {
      padding-left: var(--pd-x-small);
    }

    h2 {
      font-size: 1.2rem;
    }

    .menu-header {
      height: calc(var(--hg-header-menu) + 0.5rem);
    }
  }
</style>
