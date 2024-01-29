<script>
  export let SCORES;
</script>

<h3>Resultats</h3>
<table class="g-table">
  <tbody class="g-body-table">
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
  .date {
    width: 3rem;
    min-width: clamp(3rem, 2.0506329113924053rem + 4.219409282700422vw, 5.5rem);
    background-color: var(--clr-contrast);
    text-align: center;
  }
  .team {
    width: 7.1rem;
    min-width: clamp(
      7.1rem,
      4.70759493670886rem + 10.632911392405063vw,
      13.4rem
    );
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

  @media (max-width: 648px) {
    /* .date {
      width: 3rem;
    } */
    .team {
      padding-left: 0rem;
      text-align: center;
    }

    /* .score {
      width: 1.25rem;
    } */
  }
</style>
