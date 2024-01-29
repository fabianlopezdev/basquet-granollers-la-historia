<script>
  export let SEASON_STANDINGS;
</script>

<h3>Classificació</h3>
<table class="g-table">
  <tbody class="g-body-table">
    <tr class="table-header">
      <td class="short-stat"></td>
      <td class="team">Equip</td>
      <td class="short-stat">PJ</td>
      <td class="short-stat">PG</td>
      <td class="short-stat">PE</td>
      <td class="short-stat">PP</td>
      <td class="long-stat">RF</td>
      <td class="long-stat">PC</td>
      <td class="long-stat">PUNTS</td>
    </tr>
    {#each SEASON_STANDINGS as standing, i}
      <tr style={standing.team.toLowerCase().includes('granollers') && 'background-color: var(--clr-primary); color: var(--clr-contrast)'}>
        <td class="short-stat">{i + 1}</td>
        <td class="team" >{standing.team.toUpperCase()}</td>
        <td class="short-stat">{standing.pj}</td>
        <td class="short-stat">{standing.pg}</td>
        <td class="short-stat">{standing.pe}</td>
        <td class="short-stat">{standing.pp}</td>
        <td class="long-stat">{standing.pf}</td>
        <td class="long-stat">{standing.pc}</td>
        <td class="long-stat">{standing.points}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  tr {
    background-color: var(--clr-contrast);
  }
  .table-header {
    font-weight: var(--fnt-wg-medium);
  }
  .position {
    max-width: 2.37rem;
  }
  .team {
    max-width: 13.4rem;
    padding-left: 1.44rem;
  }

  .short-stat {
    max-width: 2.37rem;
  }
  .long-stat {
    max-width: 3.65rem;
  }
  .short-stat,
  .long-stat {
    text-align: center;
  }
</style>
