<script>
  export let text;
  export let title;
  export let author;
</script>

<div class='social-container' class:article-page={author !== undefined}>
  <article>
    <div class='article-content'>
      <header class='article-header'>
        {#if author !== undefined}
        <h1 class='title'>{title}</h1>
        {:else}
        <h2 class='title'>{title}</h2>
        {/if}
        {#if text.image} 
          <img src={text.image} alt='' />
          {/if}
      </header>
      {#if author !== undefined}
      <p><i>{author}</i></p>
      {/if}
       {#if text.html}
       {@html text.html}
       {:else}
        {@html text}
        {/if}
    </div>
  </article>
  
</div>

<style>
  .article-page {
    margin-top: calc(var(--hg-header) + var(--hg-separator-line));
    margin-inline: auto;
  }
  .social-container {
    /* padding-inline: var(--pd-x); */
    color: var(--clr-primary);
    max-width: var(--wd-regular);
    padding-inline: calc(19.44rem - var(--pd-x));
    padding-block: 2.5rem;
    color: var(--clr-primary);
    max-width: 1206px;
  }
  /* img {
    opacity: 0.5;
  transition: opacity 0.3s;
  } */
  .title { 
    font-size: 2.75rem;
    font-weight: var(--fnt-wg-medium);
    line-height: 1.1;
    margin: auto;
    padding-bottom: 3rem;
  }
 
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

 
    .article-content {
      padding-inline: calc(var(--pd-x-small) * -1);
    }
  }
</style>