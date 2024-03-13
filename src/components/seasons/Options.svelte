<script>
  import { display } from "../../svelte/stores.ts";

  function selectDisplay(e) {
    const buttonText = e.target.textContent.toLowerCase();
    if (buttonText === $display) display.set("relats");
    else display.set(buttonText);
  }

  let windowHeight;
  let paddingTop = 0;
  $: {
    if (windowHeight < 788) {
      paddingTop = "2rem";     
    } else {
      paddingTop = "-1rem";
    }
  }

</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class="options-container"style="--paddingTop: {paddingTop};">
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
    position: relative;
    display: flex;
    justify-content: center;
    /* padding-bottom: 2rem; */
    gap: 1.25rem;
    /* margin-top: var(--paddingTop); */
    /* margin-top: auto; */
    z-index: 1;
    /* mix-blend-mode: multiply; */
  }
  button {
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
    
  

  @media (max-width: 648px) {
    .options-container {
      padding-inline: var(--pd-x-small);
      gap: 0.8rem;
      /* margin-top: auto; */
    }
    /* .options-container {
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: -2.7rem;
    }
    button {
      width: 100%;
    } */
  }

  
  </style>
