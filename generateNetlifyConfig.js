import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// __dirname is not available in ES module scope, so we need to create an equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const statsDirectory = path.join(__dirname, "netlify/functions/stats"); // Adjust the path as necessary
const netlifyTomlTemplate = `
[build]
  publish = "build"
  functions = "netlify/functions"

[functions]
  included_files = [
    %FILES%
  ]
`;

fs.readdir(statsDirectory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const fileEntries = files
    .filter((file) => !file.endsWith(".js"))
    .map((file) => `"${path.join(statsDirectory, file)}"`)
    .join(",\n    ");

  const netlifyTomlContent = netlifyTomlTemplate.replace(
    "%FILES%",
    fileEntries,
  );

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
});
