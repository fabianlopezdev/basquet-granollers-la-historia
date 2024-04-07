<script>
  export let jugador;
  import { collapsibleArrowPlayer } from "@assets/icons";

  function capitalizeWords(str) {
    // Convert the entire string to lowercase first
    const lowerStr = str.toLowerCase();

    // Split the string into words based on spaces
    const words = lowerStr.split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      if (words[i][0]) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
    }

    // Join the words back into a string with spaces
    return words.join(" ");
  }

  let showDetails = false;

  function formatExcelDate(serial) {
    if (serial > 1900 && serial < 9999) {
      return serial.toString();
    }

    const excelEpoch = new Date(1899, 11, 30); // Excel's base date is December 30, 1899

    if (serial >= 60) {
      serial += 1; // Adjusting for Excel's leap year bug
    }

    // Subtracting one from the serial number to adjust for the +1 day error
    serial -= 1;

    const parsed = new Date(excelEpoch.getTime() + serial * 86400000);

    // Generate the date string using UTC methods to prevent timezone issues
    const day = ("0" + parsed.getDate()).slice(-2);
    const month = ("0" + (parsed.getMonth() + 1)).slice(-2);
    const year = parsed.getFullYear();

    return [day, month, year].join("/");
  }

  const date = formatExcelDate(jugador.data_naix);

  function showPlayerStats() {
    showDetails = !showDetails;
  }
</script>

{#if jugador.jugador !== "TOTAL"}
  <li>
    <article class="player">
      <div class="image-container">
        <img
          src={jugador.image
            ? `/imatges/jugadors/${jugador.image}`
            : "/player-avatar.png"}
          alt=""
        />
      </div>
      <div class="info-container">
        <p class="name">{capitalizeWords(jugador.jugador)}</p>
        <button
          class="mobile-arrow"
          class:rotate={showDetails}
          on:click={() => showPlayerStats()}
        >
          {@html collapsibleArrowPlayer}
        </button>
      </div>
      <div class="player-details" class:show-player-details={showDetails}>
        {#if jugador.data_naix !== undefined}
          <p>
            {date.length === 4 ? "Any de naixement" : "Data de naixement"}
            <br /><span
              >{jugador.jugador.includes("David Lee")
                ? "26/11/1969"
                : date}</span
            >
          </p>
        {/if}
        {#if jugador.lloc_naix !== undefined}
          <p>Lloc de naixement <span>{jugador.lloc_naix}</span></p>
        {/if}

        {#if jugador.posicio !== undefined}
          <p>Posició <span>{jugador.posicio}</span></p>
        {/if}

        {#if jugador.alçada !== undefined}
          <p>Alçada <span>{jugador.alçada}</span></p>
        {/if}

        {#if jugador.p_j !== undefined && jugador.punts !== undefined}
          <p>
            Estadístiques <br /><span
              >{jugador.p_j} partits <br />{jugador.punts} punts
            </span>
          </p>
        {/if}
      </div>
    </article>
  </li>
{/if}

<style>
  .player {
    height: 27.31rem;
    width: 17.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .player-details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    padding-inline: 1.5rem;
    padding-block: 2.12rem;
    background-color: var(--clr-secondary-opacity);
    border-top-left-radius: var(--brdr-left-top-radius);
  }

  .image-container {
    height: 85%;
    width: 100%;
    background-color: #d9d9d9;
    border-top-left-radius: var(--brdr-left-top-radius);
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    margin: auto;
  }

  .info-container {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.1rem;
    background-color: var(--clr-secondary);
    color: var(--clr-contrast);
    padding-inline: 2rem;
    line-height: 1.3;
    z-index: 1;
  }

  .mobile-arrow {
    display: none;
    padding-bottom: 0.5rem;
    transform: rotate(-180deg);
    transition: 0.45s transform ease-in-out;
  }

  .show-player-details {
    opacity: 1;
  }

  .rotate {
    padding-bottom: 0rem;
    padding-top: 0.5rem;
    transform: rotate(0deg);
  }

  span {
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
  }

  @media (hover: hover) {
    .player-details {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .player:hover .player-details {
      opacity: 1;
    }
  }

  @media (max-width: 648px) {
    .mobile-arrow {
      display: block;
    }

    .info-container {
      justify-content: space-between;
      text-align: left;
    }
    .player-details {
      transform: translateY(100%);
      transition: transform 0.5s ease-in-out;
    }

    .show-player-details {
      transform: translateY(0);
    }

    li {
      width: 100%;
    }
    .player {
      width: inherit;
    }
  }
</style>
