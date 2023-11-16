<script>
  //Import stores
  import { truncateString } from "@utils/helperFunctions";
  import { currentSeason } from "src/svelte/stores";

  const widthOptions = [19.5, 38.625]; // in rem
  const heightOptions = [16.5625, 11.75]; // in rem
  const colorOptions = ["rgba(8, 67, 149, 0.90)", "rgba(251, 115, 38, 0.84)"];

  const szIndex = Math.round(Math.random());
  const clrIndex = Math.round(Math.random());
</script>

<div class="season-container">
  <div
    class="relat-container"
    style={`--clr-background: ${colorOptions[clrIndex]}; --wd: ${widthOptions[szIndex]}rem; --hg: ${heightOptions[szIndex]}rem;`}
  >
  <h3>El Relat</h3>
    <p>{truncateString($currentSeason.relat)}</p>
    <a href="/">Llegir més</a>
  </div>

  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{$currentSeason.name}</h2>
  </div>
</div>

<style>
  .season-container {
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100dvh - var(--pd-y-options-btns) - 2.12rem);
    width: 100%;
    color: var(--clr-primary);
    /* display: grid;
    place-content: center; */
  }
  .relat-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--clr-contrast);
    background-color: var(--clr-background);
    max-width: var(--wd);
    max-height: var(--hg);
    padding-inline: 2.5rem;
    padding-block: 2rem;
    opacity: 0.84;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: var(--fnt-wg-medium);
  }

  a {
    text-decoration: underline;
  }
  .season-title {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  aside {
    position: relative;
    top: 0;
    left: 3rem;
    top: -6.2rem;
    color: var(--clr-accent-2);
    font-size: 2.225rem;
    font-weight: var(--fnt-wg-medium);
  }
  .big-number {
    text-align: center;
    margin: 0;
    /*from 784px screen to 1400px*/
    font-size: 14rem;
    font-size: clamp(
      14rem,
      1.3846153846153832rem + 26.282051282051285vw,
      24.25rem
    );
    font-weight: var(--fnt-wg-medium);
    mix-blend-mode: multiply;
  }
</style>
