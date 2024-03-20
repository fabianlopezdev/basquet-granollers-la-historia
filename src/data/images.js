import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
// import { dirname } from "path";

// When using ES modules, __dirname is not defined, so we define it manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = import.meta.env.NODE_ENV === 'production';
const basePath = isProduction? "../imatges/jugadors" : `../../public/imatges/jugadors`;

const folderPath = path.join(__dirname, basePath);


export async function getJugadorsImagesListNames() {
  try {
    const files = await fs.readdir(folderPath);

    const imageFiles = files.filter((file) => /\.(webp)$/i.test(file));
    return imageFiles;
  } catch (err) {
    console.error("An error occurred:", err);
    return []; // Return an empty array or null to indicate the error
  }
}

