<script>
    import {closeMenuIcon} from "@assets/icons"
  import { currentIndex, display } from "src/svelte/stores";

  export let SEASONS;

</script>
<section class="more-info-menu">
  <header class="menu-header">
    <h2>
      <span style="color: var(--clr-accent)">Jugadors</span> Temporada {SEASONS[
        $currentIndex
      ].name}
    </h2>
    <button on:click={() => display.set("relats")}>{@html closeMenuIcon}</button
    >
  </header>
</section>

<style>
    .more-info-menu {
    position: absolute;
    height: inherit;
    width: 100vw;
    margin: 0;
    background-color: var(--clr-contrast);
    z-index: 10;
  }
  .menu-header {
    background-color: var(--clr-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 7.12rem;
    height: 8.25rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }
</style>
