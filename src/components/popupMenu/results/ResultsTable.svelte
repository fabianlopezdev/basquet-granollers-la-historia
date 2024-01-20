<script>
  export let SCORES;
</script>

<h3>Resultats</h3>
<table class="g-my-table">
  <tbody>
    {#each SCORES as score}
      <tr>
        <td class="date">{score.date}</td>
        <td
          class="team"
          style={score.home &&
            "background-color:var(--clr-primary); color: var(--clr-contrast)"}
          >{score.home ? "C.B. GRANOLLERS" : score.rival.toUpperCase()}</td
        >
        <td class="score score-one">{score.result1}</td>
        <td class="score score-two">{score.result2}</td>
        <td
          class="team"
          style={!score.home &&
            "background-color:var(--clr-primary); color: var(--clr-contrast)"}
          >{!score.home ? "C.B. GRANOLLERS" : score.rival.toUpperCase()}</td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  td {
    height: 2.22rem;
    border: 2.097px solid #d9d9d9;
  }

  .date {
    width: 5.5rem;
    background-color: var(--clr-contrast);
    text-align: center;
  }
  .team {
    width: 13.4rem;
    background-color: var(--clr-contrast);
    padding-left: 1.44rem;
  }
  .score {
    width: 3.5rem;
    text-align: center;
    background-color: #d9d9d9;
  }

  .score-one {
    border-right-color: #f3f3f3 !important;
  }

  .score-two {
    border-left-color: #f3f3f3 !important;
  }
</style>
