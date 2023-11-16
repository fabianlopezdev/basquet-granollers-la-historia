<script>
  import { display } from "../../svelte/stores.ts";

  function selectDisplay(e) {
    const buttonText = e.target.textContent;
    if (buttonText === $display) display.set("RELATS");
    else display.set(buttonText);
  }
</script>

<div class="options-container">
  <button class:active={$display === "jugadors"} on:click={selectDisplay}>
    JUGADORS
  </button>
  <button class:active={$display === "resultats"} on:click={selectDisplay}>
    RESULTATS
  </button>
  <button class:active={$display === "social"} on:click={selectDisplay}>
    SOCIAL
  </button>
</div>

<style>
  .options-container {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    position: relative;
    bottom: var( --pd-y-options-btns);
  }
  button {
    text-decoration: none;
    padding-bottom: 0.1rem;
    display: grid;
    place-items: center;
    height: var(--hg-btn);
    width: 11.5rem;
    border: 1px solid var(--clr-accent);
    background-color: var(--clr-contrast);
    color: var(--clr-accent);
    border-radius: 1.75rem;
    font-weight: var(--fnt-wg-regular);
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
  }

  button:active {
    transform: scale(0.95);
  }

  button:hover {
    cursor: pointer;
    background-color: var(--clr-accent);
    color: var(--clr-contrast);
  }
  .active {
    background-color: var(--clr-accent);
    color: var(--clr-contrast);
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease,
      transform 0.1s ease;
  }
</style>
