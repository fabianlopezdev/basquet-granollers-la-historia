<script>
  //Import stores
  import { currentIndex } from "src/svelte/stores";
  export let SEASONS;
</script>

<div class="season-container">
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{SEASONS[$currentIndex]}</h2>
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
    top: -7rem;
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
