<script>
  export let text;
  export let title;
</script>

<div class='social-container'>
  <article>
    <header class='article-header'>
        <h2>{title}</h2>
        <!-- {#if image !== undefined && image.url}
          <img src={image.url} alt={image.alt && image.alt} />
          {/if} -->
        </header>
    <div class='article-content'>
       {@html text.html}
    </div>
  </article>
  
</div>

<style>
  .social-container {
    /* padding-inline: var(--pd-x); */
    color: var(--clr-primary);
    max-width: var(--wd-regular);
    padding-inline: calc(19.44rem - var(--pd-x));
    padding-block: 2.5rem;
    color: var(--clr-primary);
    max-width: 1206px;
  }
  img {
    opacity: 0.5;
  transition: opacity 0.3s;
  }
  h1 { 
    font-size: 2.75rem;
    font-weight: var(--fnt-wg-medium);
  }
 

  /* .article-header-text {
    color: var(--clr-contrast);
    position: relative;
    padding-inline: var(--pd-x-internal-page);
    padding-block: 2rem;
    min-height: 19.0625rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    justify-content: center;
    text-wrap: balance;
    gap: 2.62rem;
    max-width: 1206px;
    margin: auto;
  } */

  .article-content {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: justify;
    margin: auto;
  }

  .article-content img {
    object-fit: contain;
  }

  .article-content li {
    display: block !important;
  }

   @media (max-width: 1181px) {
    .social-container {
      padding-inline: var(--pd-x-medium);
    }
    /* .article-header {
      margin-inline: calc(var(--pd-x-medium) * -1);
    } */
    .article-header-text {
      padding-inline: var(--pd-x-medium);
    }

    .article-content {
      padding-inline: calc(6.88rem - var(--pd-x-medium));
    }
  }

  @media (max-width: 648px) {
    h1 {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }
    .social-container {
      padding-inline: var(--pd-x-small);
    }

    /* .article-header {
      margin-inline: calc(var(--pd-x-small) * -1);
    } */

    .article-header-text {
      padding-inline: var(--pd-x-small);
      gap: 1.38rem;
    }
    .article-content {
      padding-inline: calc(var(--pd-x-small) * -1);
    }
  }
</style>