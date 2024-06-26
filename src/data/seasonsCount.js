// Import the necessary modules
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// import { dirname } from "path";

// When using ES modules, __dirname is not defined, so we define it manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = import.meta.env.NODE_ENV === "production";
const basePath = isProduction
  ? "../estadistiques"
  : "../../public/estadistiques";

const folderPath = path.join(__dirname, basePath);

// Read the directory contents
const files = fs.readdirSync(folderPath);

// Count the number of files
const seasonsCount = files.length;

const firstSeason = +extractYearsFromString(files[0]);

const listOfSeasons = getSeasonsList(seasonsCount, firstSeason);

export function getSeasonsCount() {
  return { seasonsCount, firstSeason, listOfSeasons };
}

// Example of iterating over the files
function extractYearsFromString(inputString) {
  // Regular expression to match the years pattern
  let firstYear = inputString.split("-")[0];
  let firstYearLastTwoDigits = firstYear.slice(-2);

  return firstYearLastTwoDigits;
}

function getSeasonsList(seasonsCount, firstSeason) {
  let currentSeason = firstSeason;
  let seasonsList = [];
  for (let i = 0; i < seasonsCount; i++) {
    seasonsList.push(`${currentSeason}/${currentSeason + 1}`);
    currentSeason++;
  }
  return seasonsList;
}
