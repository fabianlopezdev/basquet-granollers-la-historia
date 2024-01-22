<script>
  export let item;
</script>

<details>
  <summary>
    <p>{item.name.toUpperCase()}</p>
  </summary>
  <ul class="links-container">
    {#each item.dropdown as dropDownItem}
      <li>
          <a href={'#seasons-timeline'}>{dropDownItem.name}</a>
      </li>
    {/each}
  </ul>
</details>

<style>
  p {
    font-size: 1.125rem;
  }
  details > summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details summary {
    cursor: pointer;
    position: relative;
    transition: margin 0.45s ease-out;
  }

  details[open] summary {
    margin-bottom: 10px;
  }

  summary::before {
    position: absolute;
    top: -20%;
    right: 0rem;
    content: url("../../../collapsibleArrow.svg");
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: rotate(0);
    transform-origin: 50% 35%;
    transition: 0.45s transform ease-in-out;
  }

  details[open] > summary:before {
    transform: rotate(-180deg);
    transition: 0.45s transform ease-in-out;
  }

  .links-container {
    display: flex;
    flex-wrap:wrap;
    /* justify-content: space-between; */
    gap: 1rem;
    padding-left: 1rem;
    width: 18rem;
  }
</style>
