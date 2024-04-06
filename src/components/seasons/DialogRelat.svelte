<script>
  import { toggleDialog } from "@utils/helperFunctions";
  import { closeMenuIcon } from "@assets/icons";

  export let years;
  export let dialogId;
  export let relat;
  export let isDialogOpen;

  function darkenColor(color, amount) {
    // This is a simple placeholder function. You'll need to replace it with actual logic
    // to darken the color. This might involve parsing the color and adjusting its lightness.
    // For demonstration purposes only.
    let [r, g, b] = color.match(/\d+/g).map(Number);
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);
    return `rgb(${r}, ${g}, ${b})`;
  }

  $: {
    if (isDialogOpen) {
      //for any browser
      document.documentElement.style.overflow = "hidden";
      //for safari in mobile
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }

  $: darkerColor = darkenColor(relat.props.color, 50);
</script>

<!-- {#if relatColor !== undefined}  -->
<dialog
  id={dialogId}
  style="--clr-bg-relat: {relat.props.color}; --clr-bg-scrollbar: {darkerColor}"
>
  <button
    class="modal-button"
    on:click={() => {
      toggleDialog(dialogId);
      isDialogOpen = false;
    }}
  >
    {@html closeMenuIcon}
  </button>
  <div class="dialog-container">
    <h3>El relat de la temporada {years}</h3>
    <p class="text">{@html relat.content.html}</p>
  </div>
</dialog>

<!-- {/if} -->
<style>
  .text {
    text-align: justify;
  }
  dialog {
    overflow-y: scroll !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--clr-contrast);
    padding-inline: 9.5rem;
    padding-block: 2.69rem;
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
    padding-top: 1rem;
  }
  .modal-button {
    z-index: 2000;
  }

  .modal-button {
    position: absolute;
    top: 1rem;
    right: 0.7rem;
  }

  .dialog-container {
    margin: auto;
    max-width: 780px;
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
  .dialog-container p {
    line-height: 1.5rem;
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
      padding-block: 2.2rem;
      padding-inline: var(--pd-x-small);
      width: 90vw;
    }
  }
</style>
