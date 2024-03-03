import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// __dirname is not available in ES module scope, so we need to create an equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const statsDirectory = path.join(__dirname, "netlify/functions/stats"); // Adjust the path as necessary
const relatsDirectory = path.join(__dirname, "netlify/functions/relats"); // Adjust the path as necessary
const netlifyTomlTemplate = `
[build]
  publish = "build"
  functions = "netlify/functions"

[functions]
  included_files = [
    %FILES%
  ]
`;

// Function to read directory and filter files based on condition
function readAndFilterDirectory(directory, filterCondition) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        reject("Could not list the directory. " + err);
      } else {
        const filteredFiles = files
          .filter(filterCondition)
          .map((file) => `"${path.join(directory, file)}"`);
        resolve(filteredFiles);
      }
    });
  });
}

// Read both directories and filter files accordingly
Promise.all([
  readAndFilterDirectory(statsDirectory, (file) => !file.endsWith(".js")),
  readAndFilterDirectory(relatsDirectory, (file) => file.endsWith(".docx")),
])
  .then((results) => {
    const allFileEntries = results.flat().join(",\n    ");
    const netlifyTomlContent = netlifyTomlTemplate.replace(
      "%FILES%",
      allFileEntries,
    );

    // Write the netlify.toml file
    fs.writeFile(
      path.join(__dirname, "netlify.toml"),
      netlifyTomlContent,
      (err) => {
        if (err) {
          console.error("Error writing netlify.toml", err);
        } else {
          console.log("netlify.toml generated successfully.");
        }
      },
    );
  })
  .catch((error) => {
    console.error(error);
  });
