// getSeasonCount.js
const fs = require("fs");
const path = require("path");

export const handler = async (event, context) => {
  console.log(__dirname);
  const statsDirectory = path.join(__dirname, "stats"); // Adjust the path as necessary

  try {
    const files = fs.readdirSync(statsDirectory);
    const seasonsCount = files.length;
    const firstSeason = files[0].split("_")[0];

    return {
      statusCode: 200,
      body: JSON.stringify({ totalSeasons: seasonsCount, firstSeason }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
