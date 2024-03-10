// Import the necessary modules
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

import { capitalizeWords } from "../utils/helperFunctions";
import { removeAccents } from "../utils/helperFunctions";


export const getSeasonStats = (season) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  //DEV PATH
  const filePath = path.join(
    __dirname,
    `../../public/estadistiques/${season}_stats.xlsx`,
  );

  //PRODUCTION PATH
  //  const relatsFolderPath = path.join(__dirname, "../estadistiques");
  //  const filePath = path.join(relatsFolderPath, `${season}_stats.xlsx`);

  const workbook = XLSX.readFile(filePath);

  const sheetNames = workbook.SheetNames;

  let classificacio,
    classificacioA1,
    classificacioA2,
    classificacioAscens,
    classificacioFinalTemporada,
    classificacioGrupPar,
    classificacioGrupSenar,
    classificacioLligaRegular,
    classificacioLligaRegularGrup,
    classificacioPlayout,
    classificacioPrimeraFaseA1,
    classificacioSegonaFaseGrup1,
    classificacioTemporadaRegular,
    divisio,
    entrenadors,
    jugadors,
    resultats,
    resultatsAscens,
    resultatsCopaDelRey,
    resultatsFaseRegular,
    resultatsFaseRegularA1,
    resultatsFaseRegularA2,
    resultatsFaseRegularGrupPar,
    resultatsFaseRegularGrupSena,
    resultatsFaseRegularPlayoff,
    resultatsLligaRegular,
    resultatsLligaRegularGrupPare,
    resultatsPlayoffsPermanencia,
    resultatsPlayoffsclassificacio,
    resultatsPlayoffsQuarts,
    resultatsPlayoffsVuitens,
    resultatsPrimeraFaseA1,
    resultatsPrimeraFaseA2,
    resultatsPromocio,
    resultatsPromocioTriangular,
    resultatsSegonaFaseGrup1,
    resultatsSegonaFaseGrup2;

  sheetNames.forEach((sheetName) => {
    const normalizedSheetName = removeAccents(sheetName).toLowerCase();

    if (normalizedSheetName === "classificacio") {
      const sheet = workbook.Sheets[sheetName];
      classificacio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_a1") {
      const sheet = workbook.Sheets[sheetName];
      classificacioA1 = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "classificacio_2") {
      const sheet = workbook.Sheets[sheetName];
      classificacioA2 = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "classificacio_ascens") {
      const sheet = workbook.Sheets[sheetName];
      classificacioAscens = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "classificacio_finaltemporada") {
      const sheet = workbook.Sheets[sheetName];
      classificacioFinalTemporada = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_grupopar") {
      const sheet = workbook.Sheets[sheetName];
      classificacioGrupPar = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "classificacio_grupsenar") {
      const sheet = workbook.Sheets[sheetName];
      classificacioGrupSenar = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_lligaregular") {
      const sheet = workbook.Sheets[sheetName];
      classificacioLligaRegular = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_lligaregular_grup") {
      const sheet = workbook.Sheets[sheetName];
      classificacioLligaRegularGrup = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_playout") {
      const sheet = workbook.Sheets[sheetName];
      classificacioPlayout = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_primerafase_a1") {
      const sheet = workbook.Sheets[sheetName];
      classificacioPrimeraFaseA1 = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_segonafase_grup1") {
      const sheet = workbook.Sheets[sheetName];
      classificacioSegonaFaseGrup1 = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "classificacio_tempregular") {
      const sheet = workbook.Sheets[sheetName];
      classificacioTemporadaRegular = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "divisio") {
      const sheet = workbook.Sheets[sheetName];
      divisio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "entrenadors") {
      const sheet = workbook.Sheets[sheetName];
      entrenadors = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "jugadors") {
      const sheet = workbook.Sheets[sheetName];
      jugadors = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats") {
      const sheet = workbook.Sheets[sheetName];
      resultats = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "ascens") {
      const sheet = workbook.Sheets[sheetName];
      resultatsAscens = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_copadelrey") {
      const sheet = workbook.Sheets[sheetName];
      resultatsCopaDelRey = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_faseregular") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegular = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_faseregular_a1") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegularA1 = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_faseregular_a2") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegularA2 = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_faseregular_grupopar") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegularGrupPar = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_faseregular_gruposena") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegularGrupSena = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_faseregular_playoff") {
      const sheet = workbook.Sheets[sheetName];
      resultatsFaseRegularPlayoff = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_ligaregular") {
      const sheet = workbook.Sheets[sheetName];
      resultatsLligaRegular = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_lligaregular_gruppare") {
      const sheet = workbook.Sheets[sheetName];
      resultatsLligaRegularGrupPare = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_playoffspermanencia") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPlayoffsPermanencia = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_playoffsclassificacio") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPlayoffsclassificacio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_playoffsquarts") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPlayoffsQuarts = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_playoffsvuitens") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPlayoffsVuitens = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_primerafase_a1") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPrimeraFaseA1 = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_primerafase_a1") {
      // Note: Duplicate entry, already provided above.
      const sheet = workbook.Sheets[sheetName];
      resultatsPrimeraFaseA2 = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "promocio") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPromocio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "promocio_triangular") {
      const sheet = workbook.Sheets[sheetName];
      resultatsPromocioTriangular = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_segonafase_grup1") {
      const sheet = workbook.Sheets[sheetName];
      resultatsSegonaFaseGrup1 = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "resultats_segonafase_grup2") {
      const sheet = workbook.Sheets[sheetName];
      resultatsSegonaFaseGrup2 = XLSX.utils.sheet_to_json(sheet);
    }
  });

  const stats = {
    ...(classificacio !== undefined && { classificacio }),
    ...(classificacioA1 !== undefined && { classificacioA1 }),
    ...(classificacioA2 !== undefined && { classificacioA2 }),
    ...(classificacioAscens !== undefined && { classificacioAscens }),
    ...(classificacioFinalTemporada !== undefined && {
      classificacioFinalTemporada,
    }),
    ...(classificacioGrupPar !== undefined && { classificacioGrupPar }),
    ...(classificacioGrupSenar !== undefined && { classificacioGrupSenar }),
    ...(classificacioLligaRegular !== undefined && {
      classificacioLligaRegular,
    }),
    ...(classificacioLligaRegularGrup !== undefined && {
      classificacioLligaRegularGrup,
    }),
    ...(classificacioPlayout !== undefined && { classificacioPlayout }),
    ...(classificacioPrimeraFaseA1 !== undefined && {
      classificacioPrimeraFaseA1,
    }),
    ...(classificacioSegonaFaseGrup1 !== undefined && {
      classificacioSegonaFaseGrup1,
    }),
    ...(classificacioTemporadaRegular !== undefined && {
      classificacioTemporadaRegular,
    }),
    ...(divisio !== undefined && { divisio }),
    ...(entrenadors !== undefined && { entrenadors }),
    ...(jugadors !== undefined && { jugadors }),
    ...(resultats !== undefined && { resultats }),
    ...(resultatsAscens !== undefined && { resultatsAscens }),
    ...(resultatsCopaDelRey !== undefined && { resultatsCopaDelRey }),
    ...(resultatsFaseRegular !== undefined && { resultatsFaseRegular }),
    ...(resultatsFaseRegularA1 !== undefined && { resultatsFaseRegularA1 }),
    ...(resultatsFaseRegularA2 !== undefined && { resultatsFaseRegularA2 }),
    ...(resultatsFaseRegularGrupPar !== undefined && {
      resultatsFaseRegularGrupPar,
    }),
    ...(resultatsFaseRegularGrupSena !== undefined && {
      resultatsFaseRegularGrupSena,
    }),
    ...(resultatsFaseRegularPlayoff !== undefined && {
      resultatsFaseRegularPlayoff,
    }),
    ...(resultatsLligaRegular !== undefined && { resultatsLligaRegular }),
    ...(resultatsLligaRegularGrupPare !== undefined && {
      resultatsLligaRegularGrupPare,
    }),
    ...(resultatsPlayoffsPermanencia !== undefined && {
      resultatsPlayoffsPermanencia,
    }),
    ...(resultatsPlayoffsclassificacio !== undefined && {
      resultatsPlayoffsclassificacio,
    }),
    ...(resultatsPlayoffsQuarts !== undefined && { resultatsPlayoffsQuarts }),
    ...(resultatsPlayoffsVuitens !== undefined && { resultatsPlayoffsVuitens }),
    ...(resultatsPrimeraFaseA1 !== undefined && { resultatsPrimeraFaseA1 }),
    ...(resultatsPrimeraFaseA2 !== undefined && { resultatsPrimeraFaseA2 }),
    ...(resultatsPromocio !== undefined && { resultatsPromocio }),
    ...(resultatsPromocioTriangular !== undefined && {
      resultatsPromocioTriangular,
    }),

    ...(resultatsSegonaFaseGrup1 !== undefined && {
      resultatsSegonaFaseGrup1,
    }),
    ...(resultatsSegonaFaseGrup2 !== undefined && {
      resultatsSegonaFaseGrup2,
    }),
  };

  stats.jugadors.sort((a, b) => {
    const secondWordA = (a.jugador || "").split(" ")[1] || "";
    const secondWordB = (b.jugador || "").split(" ")[1] || "";
    return secondWordA.localeCompare(secondWordB);
  });

  return stats;
};
//
