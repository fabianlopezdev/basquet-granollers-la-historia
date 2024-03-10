<script>
  import {getKeyDescription } from "../../../utils/helperFunctions"
  export let classificacio;
  export let competition;
  export let key;

  console.log('classificacio', classificacio);
</script>

<h3>Classificació {getKeyDescription(key, competition)}</h3>
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
    {#each classificacio as posicio, i}
      <tr
        style={posicio.equip.toLowerCase().includes("granollers") &&
          "background-color: var(--clr-primary); color: var(--clr-contrast)"}
      >
        <td class="short-stat">{i + 1}</td>
        <td class="team">{posicio.equip.toUpperCase()}</td>
        <td class="short-stat">{posicio.p_j}</td>
        <td class="short-stat">{posicio.p_g}</td>
        <td class="short-stat">{posicio.p_e}</td>
        <td class="short-stat">{posicio.p_p}</td>
        <td class="long-stat">{posicio.punts_favor}</td>
        <td class="long-stat">{posicio.punts_contra}</td>
        <td class="long-stat">{posicio.punts_lliga}</td>
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
    width: 2.37rem;
  }
  .team {
    width: 6rem;
    min-width: clamp(
      6rem,
      3.189873417721519rem + 12.489451476793247vw,
      13.4rem
    );
    padding-left: 1.44rem;
  }

  .short-stat {
    width: 1.2rem;
    min-width: clamp(
      1.2rem,
      0.7556962025316455rem + 1.9746835443037976vw,
      2.37rem
    );
    
  }
  .long-stat {
    width: 2.9rem;
    min-width: clamp(
      2.9rem,
      2.6151898734177212rem + 1.2658227848101264vw,
      3.65rem
    );
  }
  .short-stat,
  .long-stat {
    text-align: center;
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
