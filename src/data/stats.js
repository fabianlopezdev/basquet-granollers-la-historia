// Import the necessary modules
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import { removeAccents } from "../utils/helperFunctions";

export const getSeasonStats = (season) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "../estadistiques" : "../../public/estadistiques";
  const fileName = `${season}_stats.xlsx`;
  const filePath = path.join(__dirname, basePath, fileName);

  const workbook = XLSX.readFile(filePath);
  const sheetNames = workbook.SheetNames;

  const sheetNameMap = {
    classificacio: "classificacio",
    classificacio_a1: "classificacioA1",
    classificacio_2: "classificacioA2",
    classificacio_ascens: "classificacioAscens",
    classificacio_finaltemporada: "classificacioFinalTemporada",
    classificacio_grupopar: "classificacioGrupPar",
    classificacio_grupsenar: "classificacioGrupSenar",
    classificacio_lligaregular: "classificacioLligaRegular",
    classificacio_lligaregular_grup: "classificacioLligaRegularGrup",
    classificacio_playout: "classificacioPlayout",
    classificacio_primerafase_a1: "classificacioPrimeraFaseA1",
    classificacio_segonafase_grup1: "classificacioSegonaFaseGrup1",
    classificacio_tempregular: "classificacioTemporadaRegular",
    divisio: "divisio",
    entrenadors: "entrenadors",
    jugadors: "jugadors",
    resultats: "resultats",
    ascens: "resultatsAscens",
    resultats_copadelrey: "resultatsCopaDelRey",
    resultats_faseregular: "resultatsFaseRegular",
    resultats_faseregular_a1: "resultatsFaseRegularA1",
    resultats_faseregular_a2: "resultatsFaseRegularA2",
    resultats_faseregular_grupopar: "resultatsFaseRegularGrupPar",
    resultats_faseregular_gruposena: "resultatsFaseRegularGrupSena",
    resultats_faseregular_playoff: "resultatsFaseRegularPlayoff",
    resultats_ligaregular: "resultatsLligaRegular",
    resultats_lligaregular_gruppare: "resultatsLligaRegularGrupPare",
    resultats_playoffspermanencia: "resultatsPlayoffsPermanencia",
    resultats_playoffsclassificacio: "resultatsPlayoffsclassificacio",
    resultats_playoffsquarts: "resultatsPlayoffsQuarts",
    resultats_playoffsvuitens: "resultatsPlayoffsVuitens",
    resultats_primerafase_a1: "resultatsPrimeraFaseA1",
    promocio: "resultatsPromocio",
    promocio_triangular: "resultatsPromocioTriangular",
    resultats_segonafase_grup1: "resultatsSegonaFaseGrup1",
    resultats_segonafase_grup2: "resultatsSegonaFaseGrup2",
  };

  const stats = {};

  sheetNames.forEach((sheetName) => {
    const normalizedSheetName = removeAccents(sheetName).toLowerCase();
    const propertyName = sheetNameMap[normalizedSheetName];

    if (propertyName) {
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      stats[propertyName] = data;
    }
  });

  if (stats.jugadors) {
    stats.jugadors.sort((a, b) => {
      const secondWordA = (a.jugador || "").split(" ")[1] || "";
      const secondWordB = (b.jugador || "").split(" ")[1] || "";
      return secondWordA.localeCompare(secondWordB);
    });
  }

  return stats;
};