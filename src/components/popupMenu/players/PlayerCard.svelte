<script>
   export let jugador;

   console.log('jugador', jugador);

   function capitalizeWords(str) {
  // Convert the entire string to lowercase first
  const lowerStr = str.toLowerCase();

  // Split the string into words based on spaces
  const words = lowerStr.split(' ');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i][0]) {

      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back into a string with spaces
  return words.join(' ');
}

function formatExcelDate(serial) {
    const excelEpoch = new Date(1899, 11, 30); // Excel's base date is December 30, 1899
    const excelEpochAsUnixTimestamp = excelEpoch.getTime();
    const missingLeapYearDay = 24 * 60 * 60 * 1000;
    const delta = excelEpochAsUnixTimestamp - missingLeapYearDay;
    const parsed = new Date(delta + (serial * 86400000)); // 86400000 is the number of milliseconds in one day
    
    const parsedDate = [
      parsed.getDate(),
        parsed.getMonth() + 1, // getMonth() is zero-based
        parsed.getFullYear(),
    ].join('/');
    
    return `${parsedDate}`; // or just return parsedDate for the date part
}
</script>

{#if jugador.jugador !== 'TOTAL'}

<li>
  <article class="player">
    <div class="image-container">
      <img src={jugador.image ? `/data/images/jugadors/${jugador.image}`: "/player-avatar.png"} alt="" />
    </div>
    <div class="info-container">
      <p class="name">{capitalizeWords(jugador.jugador)}</p>
    </div>
    <div class="player-details">
      {#if jugador.data_naix !== undefined}
      <p>Data de naixement <br /><span>{formatExcelDate(jugador.data_naix)}</span></p>
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
    /* justify-content: center; */
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

    opacity: 0;
    /*It is the secondary color with opacity*/
    background-color: var(--clr-secondary-opacity);

    transition: opacity 0.5s ease-in-out; /* Transition both transform and opacity */
    border-top-left-radius: var(--brdr-left-top-radius);
  }

  .player:hover .player-details {
    opacity: 1;
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
    object-fit: cover;
    margin: auto;
  }

  .info-container {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.3125rem;
    background-color: var(--clr-secondary);
    color: var(--clr-contrast);
  }
  span {
    font-size: 1rem;
    font-weight: var(--fnt-wg-regular);
  }

  @media (max-width: 648px) {
    li {
      width: 100%;
    }
    .player {
      width: inherit;
    }

  }

</style>
