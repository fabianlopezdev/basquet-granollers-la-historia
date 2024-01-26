<script>
   export let player;
</script>

<li>
  <article class="player">
    <div class="image-container">
      <img src={player.image || "/player-avatar.png"} alt="" />
    </div>
    <div class="info-container">
      <p class="name">{player.name}</p>
    </div>
    <div class="player-details">
      <p>Data de naixement <br /><span>{player.birth}</span></p>
      <p>Nacionalitat <span>{player.nacionality}</span></p>
      <p>Posició <span>{player.position}</span></p>
      <p>Alçada <span>{player.height}</span></p>
      <p>
        Estadístiques <br /><span
          >{player.stats.matches} partits <br />{player.stats.points} punts /
          {player.stats.rebounds} rebots</span
        >
      </p>
      <p>
        Temporades <br /><span
          >{player.seasons} temporades CBG
          <br />{`(${player.start}-${player.end})`}</span
        >
      </p>
    </div>
  </article>
</li>

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

</style>
