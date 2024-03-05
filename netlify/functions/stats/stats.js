// Import the necessary modules
import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Use fileURLToPath and path.dirname to dynamically get the directory name
const statsDir = path.dirname(fileURLToPath(import.meta.url));

export const handler = async (event, context) => {
  try {
    // Extract season and endpoint from the path
    const pathParts = event.path.split("/"); // Assuming the path is structured like /{season}/{endpoint}
    const season = pathParts[pathParts.length - 2]; // Second to last part of the path
    const endpoint = pathParts.pop(); // Last part of the path

    // Dynamically construct the file path based on the season
    const filePath = path.join(statsDir, `${season}_stats.ods`);

    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    let resultats,
      resultatsCopaDelRey,
      classificacio,
      jugadors,
      entrenadors,
      divisio;

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
    });

    // Select data based on endpoint
    let data;
    switch (endpoint) {
      case "resultats":
        data = resultats;
        break;
      case "classificacio":
        data = classificacio;
        break;
      case "jugadors":
        data = jugadors;
        break;
      case "entrenadors":
        data = entrenadors;
        break;
      case "divisio":
        data = divisio;
        break;
      case "resultats_copa_del_rey":
        data = resultatsCopaDelRey;
        break;
      default:
        return { statusCode: 404, body: "No s'ha trobat cap contingut" };
    }

    // Return the selected data
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
