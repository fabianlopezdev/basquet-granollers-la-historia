import mammoth from "mammoth";
import path from "path";
import { fileURLToPath } from "url";

export async function getSeasonRelat(season) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Determine if running in production or development
  // Adjust this line based on how your environment variables are set up
  const isProduction = process.env.NODE_ENV === 'production';

  // Set the base folder and file name based on the environment
  const basePath = isProduction ? '../relats' : '../../public/relats';
  const fileName = `${season}_relat.docx`;

  // Construct the full path to the file
  const filePath = path.join(__dirname, basePath, fileName);

  // Convert document to HTML and extract raw text
  const resultHTML = await mammoth.convertToHtml({ path: filePath });
  const resultText = await mammoth.extractRawText({ path: filePath });

  // Extract the content
  const html = resultHTML.value;
  const text = resultText.value;

  // Return the converted content
  return { html, text };
}
