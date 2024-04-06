<script>
  import { toggleDialog } from "@utils/helperFunctions";
  import { closeMenuIcon } from "@assets/icons";
  import {disableBgScroll, enableBgScroll} from "@utils/helperFunctions";
    import { fade } from "svelte/transition";

  export let years;
  export let dialogId;
  export let relat;
  export let isDialogOpen;

  function darkenColor(color, amount) {
    let [r, g, b] = color.match(/\d+/g).map(Number);
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);
    return `rgb(${r}, ${g}, ${b})`;
  }


  $: darkerColor = darkenColor(relat.props.color, 50);
</script>

<!-- {#if relatColor !== undefined}  -->
<dialog
  id={dialogId}
  style="--clr-bg-relat: {relat.props.color}; --clr-bg-scrollbar: {darkerColor}"
  >
  <header class='dialog-header' >
    <h3>El relat de la temporada {years}</h3>
    <button
    class="modal-button"
    on:click={() => {
      toggleDialog(dialogId);
      isDialogOpen = false;
    }}
>
{@html closeMenuIcon}
</button>
</header>
 

<p class="text">{@html relat.content.html}</p>

</dialog>

<!-- {/if} -->
<style>
  .text {
    text-align: justify;
  }
  dialog {
    overflow-y: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--clr-contrast);
    padding-inline: 9.5rem;
    padding-bottom: 2.69rem;
    z-index: 1000;
    background-color: var(--clr-bg-relat);
    border-radius: 0.4rem;
    border: none;
    width: 80vw;
    max-width: var(--wd-max);
    font-size: 1rem;
  }

  h3 {
    color: var(--clr-contrast);
    padding: 0;
    line-height: 2rem;
  }


  .dialog-container {
    margin: auto;
    max-width: 780px;
    display: flex;
    flex-direction: column;

    gap: 1.7rem;
  }
  .text{
    line-height: 1.5rem;
  }

  .dialog-header {
    position: sticky;
    top:-0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--clr-bg-relat);
    padding-top: 2.69rem;
    padding-bottom: 1.5rem;
    z-index: 10;
  }

  dialog::backdrop {
    /*Opacity property does not work with backdrop*/
    background-color: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--clr-bg-scrollbar);
    border-radius: 12px;
  }

  @media (max-width: 1340px) {
    dialog {
      padding-inline: var(--pd-x-medium);
      /* padding-block: 2.2rem; */
    }
  }

  @media (max-width: 648px) {
    dialog {
      padding-bottom: 2.2rem;
      padding-inline: var(--pd-x-small);
      width: 90vw;
    }
  }
</style>
