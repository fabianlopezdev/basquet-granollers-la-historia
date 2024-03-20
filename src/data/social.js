import mammoth from "mammoth";
import path from "path";
import { fileURLToPath } from "url";

export async function getSeasonSocial(season) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const isProduction = process.env.NODE_ENV === 'production';

  const basePath = isProduction ? '../socials' : '../../public/socials';
  const fileName = `${season}_social.docx`;

  const filePath = path.join(__dirname, basePath, fileName);

  const resultHTML = await mammoth.convertToHtml({ path: filePath });
  const resultText = await mammoth.extractRawText({ path: filePath });
  const html = resultHTML.value;
  const text = resultText.value;
  const image = `/imatges/social/${season}_social_foto.webp`;
  return { html, text, image };
}
