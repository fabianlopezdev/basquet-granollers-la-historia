// Import the necessary modules
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mammoth from "mammoth";
import {slugify} from "../utils/helperFunctions"

// When using ES modules, __dirname is not defined, so we define it manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//DEV PATH
// const folderPath = path.join(__dirname, `../../public/especials`);

//PRODUCTION PATH
const folderPath = path.join(__dirname, "../especials");

// Read the directory contents
const files = fs.readdirSync(folderPath);

export async function getEspecials() {
const especials = await Promise.all(
  files.map(async (file) => {
    let strQMark = file.replace('Pregunta', '?')
    let strNoAuthor = strQMark.replace("Jordi_Sanuy_Bassa", "");

    // Replace ".docx" with an empty string
    let strNoExtension = strNoAuthor.replace(".docx", "");

    let title = strNoExtension.split("_").join(" ");

    const htmlValues = await mammoth.convertToHtml({
      path: `${folderPath}/${file}`,
    });

    return {
      title: title,
      author: "Jordi Sanuy Bassa",
      htmlValues: htmlValues.value,
      slug: slugify(title),
    };
  }),
);

return especials;

}

