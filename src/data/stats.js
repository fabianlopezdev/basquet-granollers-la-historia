// Import the necessary modules
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const getSeasonStats = (season) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  //DEV PATH
  const filePath = path.join(__dirname, `../../public/estadistiques/${season}_stats.xlsx`);


  //PRODUCTION PATH
  //  const relatsFolderPath = path.join(__dirname, "../estadistiques");
  //  const filePath = path.join(relatsFolderPath, `${season}_stats.xlsx`);


  const workbook = XLSX.readFile(filePath);

  const sheetNames = workbook.SheetNames;

  console.log(sheetNames);
  let resultats,
    resultatsCopaDelRey,
    classificacio,
    jugadors,
    entrenadors,
    divisio,
    classificacioAscens,
    ascens,
    promocio,
    promocioTriangular;

  sheetNames.forEach((sheetName) => {
    const normalizedSheetName = removeAccents(sheetName).toLowerCase();

    if (normalizedSheetName === "resultats") {
      const sheet = workbook.Sheets[sheetName];
      resultats = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "resultats_copa_del_rey") {
      const sheet = workbook.Sheets[sheetName];
      resultatsCopaDelRey = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio") {
      const sheet = workbook.Sheets[sheetName];
      classificacio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "jugadors") {
      const sheet = workbook.Sheets[sheetName];
      jugadors = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "entrenadors") {
      const sheet = workbook.Sheets[sheetName];
      entrenadors = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "divisio") {
      const sheet = workbook.Sheets[sheetName];
      divisio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "promocio") {
      const sheet = workbook.Sheets[sheetName];
      promocio = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "promocio_triangular") {
      const sheet = workbook.Sheets[sheetName];
      promocioTriangular = XLSX.utils.sheet_to_json(sheet);
    }

    if (normalizedSheetName === "ascens") {
      const sheet = workbook.Sheets[sheetName];
      ascens = XLSX.utils.sheet_to_json(sheet);
    }
    if (normalizedSheetName === "classificacio_ascens") {
      const sheet = workbook.Sheets[sheetName];
      classificacioAscens = XLSX.utils.sheet_to_json(sheet);
    }
  });

  const stats = {
    ...(resultats !== undefined && { resultats }),
    ...(resultatsCopaDelRey !== undefined && { resultatsCopaDelRey }),
    ...(classificacio !== undefined && { classificacio }),
    ...(jugadors !== undefined && { jugadors }),
    ...(entrenadors !== undefined && { entrenadors }),
    ...(divisio !== undefined && { divisio }),
    ...(promocio !== undefined && { promocio }),
    ...(promocioTriangular !== undefined && { promocioTriangular }),
    ...(ascens !== undefined && { ascens }),
    ...(classificacioAscens !== undefined && { classificacioAscens }),
  };

  return stats;
};

function getPlayerImage(name, season) {
  console.log(name);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const imageName = `${season} ${capitalizeWords(name)}`;
  const filePath = path.join(
    __dirname,
    `../../images/jugadors/${imageName}.webp`,
  );
  return filePath;
}

function capitalizeWords(str) {
  // Convert the entire string to lowercase first
  const lowerStr = str.toLowerCase();

  // Split the string into words based on spaces
  const words = lowerStr.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back into a string with spaces
  return words.join(" ");
}
