import mammoth from "mammoth";
import path from "path";
import { fileURLToPath } from "url";

export async function getSeasonRelat(season) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  //DEV PATH
  const filePath = path.join(
    __dirname,
    `../../public/relats/${season}_relat.docx`,
  );

  //PRODUCTION PATH
  // const relatsFolderPath = path.join(__dirname, "../relats");
  // const filePath = path.join(relatsFolderPath, `${season}_relat.docx`);

  const resultHTML = await mammoth.convertToHtml({ path: filePath });
  const resultText = await mammoth.extractRawText({ path: filePath });
  const html = resultHTML.value;
  const text = resultText.value;
  return { html, text };
}
