<script>
   export let entrenador;

   const { name, position, image} = entrenador;
   

</script>



<li>
  <article class="player">
    <div class="image-container">
      <img src={image ? `/imatges/jugadors/${image}`: "/player-avatar.png"} alt="" />
    </div>
    <div class="info-container">
      <p class="position">{position}:</p>
      <p class="name">{name}</p>
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

  .image-container {
    height: 80%;
    width: 100%;
    background-color: #d9d9d9;
    border-top-left-radius: var(--brdr-left-top-radius);
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }

  .info-container {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    background-color: var(--clr-secondary);
    color: var(--clr-contrast);
    padding-inline: 2rem;	
    line-height: 1.4;
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
