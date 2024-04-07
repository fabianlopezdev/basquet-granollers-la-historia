<script>
  const headerSponsorsWhite = [
    {
      url: `https://finquesvallbona.com/`,
      src: "/imatges/sponsors//finques-vallbona-logo-blanc.svg",
      alt: "Logo de Finques Ballbona",
    },
    {
      url: `https://votv.cat/`,
      src: "/imatges/sponsors/votv-logo-blanc.svg",
      alt: "Logo de Vallès Oriental Televisió",
    },

    {
      url: `https://www.granollers.cat/`,
      src: "/imatges/sponsors/ajuntament-granollers-logo-blanc.svg",
      alt: "Logo de l'ajuntament de Granollers",
    },
  ];
</script>

<ul class="sponsors-menu-container">
  <p class="sponsors-title">Sponsors</p>
  <div class="sponsors-container">
    {#each headerSponsorsWhite as sponsor}
      <li>
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
          <img src={sponsor.src} alt={sponsor.alt} />
        </a>
      </li>
    {/each}
  </div>
</ul>

<style>
  .sponsors-menu-container {
    margin-top: auto;
    width: 100%;
  }

  .sponsors-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.06rem;
    padding-top: 0.5rem;
  }

  .sponsors-title {
    width: 100%;
    text-align: center;
    position: relative;
  }

  .sponsors-title::before {
    content: "";
    height: 1px;
    width: calc(50% - 3rem);
    background-color: #d8d8d8;
    position: absolute;
    top: calc(50% + 0.1rem);
    left: 0;
  }

  .sponsors-title::after {
    content: "";
    height: 1px;
    width: calc(50% - 3rem);
    background-color: #d8d8d8;
    position: absolute;
    top: calc(50% + 0.1rem);
    right: 0;
  }
</style>
