// Import the necessary modules
import fs from "fs";
import path from "path";

// Define the directory you want to inspect
const directoryPath = path.join(process.cwd(), "src", "data","stats");

// Read the directory contents
const files = fs.readdirSync(directoryPath);

// Count the number of files
const seasonsCount = files.length -1;

const firstSeason = +extractYearsFromString(files[0]);

const listOfSeasons = getSeasonsList(seasonsCount, firstSeason);

export function getSeasonsCount() {
  return { seasonsCount, firstSeason, listOfSeasons }
}

// Example of iterating over the files
function extractYearsFromString(inputString) {
  // Regular expression to match the years pattern
  let firstYear = inputString.split('-')[0];
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
