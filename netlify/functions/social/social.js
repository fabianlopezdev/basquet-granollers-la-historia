const mammoth = require("mammoth");
const XLSX = require("xlsx");
const path = require("path");

export const handler = async (event, context) => {
  try {
    const pathParts = event.path.split("/");
    const season = pathParts[pathParts.length - 2];
    const endpoint = pathParts.pop();

    const filePath = path.join(__dirname, `${season}_social.docx`);
    try {
          const resultHTML = await mammoth.convertToHtml({ path: filePath });
          const resultText = await mammoth.extractRawText({ path: filePath });
          var html = resultHTML.value;
          var text = resultText.value;
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: `Error processing document: ${error.toString()}`,
      };
    }
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({text, html}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
