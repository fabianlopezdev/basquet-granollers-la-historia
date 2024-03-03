const XLSX = require("xlsx");
const path = require("path");

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const handler = async (event, context) => {
  try {
    // Extract season and endpoint from the path
    const pathParts = event.path.split("/"); // Assuming the path is structured like /{season}/{endpoint}
    const season = pathParts[pathParts.length - 2]; // Second to last part of the path
    const endpoint = pathParts.pop(); // Last part of the path

    // Dynamically construct the file path based on the season
    const filePath = path.join(__dirname, `${season}_stats.ods`);

    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    let resultats, classificacio, jugadors, entrenadors;

    sheetNames.forEach((sheetName) => {
      const normalizedSheetName = removeAccents(sheetName).toLowerCase();

      if (normalizedSheetName.includes("resultats")) {
        const sheet = workbook.Sheets[sheetName];
        resultats = XLSX.utils.sheet_to_json(sheet);
      }
      if (normalizedSheetName.includes("classificacio")) {
        const sheet = workbook.Sheets[sheetName];
        classificacio = XLSX.utils.sheet_to_json(sheet);
      }
      if (normalizedSheetName.includes("jugadors")) {
        const sheet = workbook.Sheets[sheetName];
        jugadors = XLSX.utils.sheet_to_json(sheet);
      }
      if (normalizedSheetName.includes("entrenadors")) {
        const sheet = workbook.Sheets[sheetName];
        entrenadors = XLSX.utils.sheet_to_json(sheet);
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
