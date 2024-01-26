<script>
  import { SEASONS_INFO } from '@data/globalConstants'
</script>

 <ul class="links-container">
    {#each SEASONS_INFO as season}
      <li>
          <a href={'#seasons-timeline'}>{season.years}</a>
      </li>
    {/each}
  </ul>


<style>
    .links-container {
    display: flex;
    flex-wrap:wrap;
    /* justify-content: space-between; */
    gap: 1rem;
    padding-left: 1rem;
    width: 18rem;
    color: white;
  }
</style>