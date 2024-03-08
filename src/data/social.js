import mammoth from "mammoth";
import path from "path";
import { fileURLToPath } from "url";

export async function getSeasonSocial(season) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  //DEV PATH
  // const filePath = path.join(
  //   __dirname,
  //   `../../public/socials/${season}_social.docx`,
  // );

  //PRODUCTION PATH
  const relatsFolderPath = path.join(__dirname, "../socials");
  const filePath = path.join(relatsFolderPath, `${season}_social.docx`);

  const resultHTML = await mammoth.convertToHtml({ path: filePath });
  const resultText = await mammoth.extractRawText({ path: filePath });
  const html = resultHTML.value;
  const text = resultText.value;
  return { html, text };
}
