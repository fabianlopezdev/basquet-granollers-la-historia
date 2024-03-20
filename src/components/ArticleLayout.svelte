<script>
  export let text;
  export let title;
  export let author;
  export let image;
  export let specialArticle;

  console.log('specialArticle', specialArticle)

  function replaceAndAddBreaks(htmlString) {
  // First, replace empty paragraphs with <br>
  let stringWithBreaks = htmlString.replace(/<p>\s*<\/p>/g, '<br>');
  
  // Then, add <br> at the end of each paragraph (excluding the last one if you don't want a break after the last paragraph)
  // This regex targets all <p> tags that are followed by another tag or end of string and inserts <br> before the closing </p>
  stringWithBreaks = stringWithBreaks.replace(/<p>(.*?)<\/p>(?=<p>|$)/g, '<p>$1</p><br>');

  return stringWithBreaks;
}

</script>

<div class='social-container' class:article-page={author !== undefined}>
  <article>
    <div class='article-content' class:special-article={specialArticle}>
      <header class='article-header'>
        {#if author !== undefined}
        <h1 class='title'>{title}</h1>
        {:else}
        <h2 class='title'>{title}</h2>
        {/if}
        {#if text.image || image !== undefined} 
          <img src={text.image || image} alt='' />
          {/if}
      </header>
      {#if author !== undefined}
      <p style='padding-top: 1rem; font-size: 1rem;'><i>{author}</i></p>
      {/if}
      <div class='text'>

        {#if text.html}
        {@html replaceAndAddBreaks(text.html)}
        {:else}
        {@html replaceAndAddBreaks(text)}
        {/if}
      </div>
    </div>
  </article>
  
</div>

<style>
  .special-article {
    padding-inline: var(--pd-x);
  }

  .article-page {
    margin-top: calc(var(--hg-header) + var(--hg-separator-line));
    /* margin-inline: auto; */
  }
  .social-container {
    line-height: 1.5rem;
    /* padding-inline: var(--pd-x); */
    color: var(--clr-primary);
    /* max-width: var(--wd-max); */
    /* padding-inline: calc(19.44rem - var(--pd-x)); */
    padding-block: 2rem;
    color: var(--clr-primary);
    /* max-width: 1206px; */
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
    /* padding-top: 2rem; */
    display: flex;
    max-width: 780px;
    flex-direction: column;
    gap: 0.5rem;
    margin: auto;
  }
  
  .text {
    padding-top: 1rem;
    font-size: 1rem;
    text-align: justify;
  }

  .article-content img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
  }

  .article-content li {
    display: block !important;
  }

  @media (max-width: 1065px) {
    .social-container {
      padding-block: 1.5rem;
    }
    .special-article {
    padding-inline: var(--pd-x-medium);
  }

 

  }
  
  @media (max-width: 775px) {
    .article-content img {
    width: 100vw; /* Image takes the full viewport width */
    max-width: none; /* Overrides any max-width that may be set */
    height: auto; /* Adjust the height to maintain aspect ratio */
    object-fit: cover; /* Ensures the image covers the area nicely */
    position: relative; /* Enables us to use negative margins */
    left: 50%; /* Move the image halfway across its current container */
    right: 50%;
    margin-left: -50vw; /* Pull it back to the left edge of the viewport */
    margin-right: -50vw; /* Ensure it stretches to the right edge as well */
  }
  }

  @media (max-width: 648px) {
    h1 {
      font-size: 2.25rem;
      line-height: 2.75rem;
    }
    .social-container {
      padding-inline: calc(var(--pd-x-small) *-1);
      padding-block: 1rem;
    }

    /* .article-header {
      margin-inline: calc(var(--pd-x-small) * -1);
    } */

 
    .article-content {
      padding-inline: calc(var(--pd-x-small) * -1);
    }

    .special-article {
    padding-inline: var(--pd-x-small);
  }

  .article-page {
    margin-top: 1rem;
  }

  .title {
    font-size: 2.3rem;
    padding-bottom: 2rem;
  }
  }
</style>