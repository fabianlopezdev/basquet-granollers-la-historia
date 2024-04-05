<script>
  import { getKeyDescription } from "../../../utils/helperFunctions";

  export let resultats;
  export let competition;
  export let key;

  function formatExcelDate(serial) {
    const excelEpoch = new Date(1899, 11, 30); // Excel's base date is December 30, 1899
    const excelEpochAsUnixTimestamp = excelEpoch.getTime();
    const missingLeapYearDay = 24 * 60 * 60 * 1000;
    const delta = excelEpochAsUnixTimestamp - missingLeapYearDay;
    const parsed = new Date(delta + serial * 86400000); // 86400000 is the number of milliseconds in one day

    // Check if parsed is a valid date
    if (isNaN(parsed.getTime())) {
      return ""; // Return an empty string if parsed is not a valid date
    }

    const parsedDate = [
      parsed.getDate(),
      parsed.getMonth() + 1, // getMonth() is zero-based
      parsed.getFullYear(),
    ].join("/");

    return parsedDate; // Returns the formatted date string if valid
  }
</script>

<h3>Resultats {getKeyDescription(key, competition)}</h3>
<table class="g-table">
  <tbody class="g-body-table">
    {#each resultats as resultat}
      <tr>
        <td class="date">{formatExcelDate(resultat.data)}</td>
        <td
          class="team"
          style={resultat.equip_local.includes("GRANOLLERS") &&
            "background-color:var(--clr-primary); color: var(--clr-contrast)"}
          >{resultat.equip_local.toUpperCase()}</td
        >
        <td class="score score-one">{resultat.puntuacio_1}</td>
        <td class="score score-two">{resultat.puntuacio_2}</td>
        <td
          class="team"
          style={resultat.equip_visitant.includes("GRANOLLERS") &&
            "background-color:var(--clr-primary); color: var(--clr-contrast)"}
          >{resultat.equip_visitant.toUpperCase()}</td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  h3 {
    line-height: 1.5rem;
  }

  .date {
    width: 3rem;
    min-width: clamp(3rem, 2.0506329113924053rem + 4.219409282700422vw, 5.5rem);
    background-color: var(--clr-contrast);
    text-align: center;
    overflow: hidden;
  }
  .team {
    width: 7.1rem;
    min-width: clamp(7.1rem, 5.131rem + 8.403vw, 12rem);
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
    h3 {
      padding-bottom: 1rem;
    }
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
