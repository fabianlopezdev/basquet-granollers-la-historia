export function addApostrophe(str: string) {
  return str.replace(/&#8217;/g, "'");
}

//Regex for the next two functions
const sectionRegex =
  /T[ií]tol:(?:\s|&nbsp;)*<\/strong>(?:\s|&nbsp;)*(.*?)(?:\s|&nbsp;)*<\/p>([\s\S]*?)(?=<p><strong>(?:\s|&nbsp;)*T[ií]tol:|<ul>|$)/gis;
const nameLinkRegex =
  /Nom:(?:\s|&nbsp;)*<\/strong>(?:\s|&nbsp;)*(.*?)(?:\s|&nbsp;)*<strong>, Link:(?:\s|&nbsp;)*<\/strong>(?:\s|&nbsp;)*(.*?)(?:\s|&nbsp;)*<\/p>/gis;

export function extractTopFooterInfo(content: string) {
  const generalLinksStart = content.indexOf(
    "Links Generals (Fins a tres elements)",
  );
  const generalLinksEnd = content.indexOf("Links Fixes");
  const generalLinksSection = content.slice(generalLinksStart, generalLinksEnd);

  const generalLinks = [];

  for (const sectionMatch of generalLinksSection.matchAll(sectionRegex)) {
    const sectionTitle = addApostrophe(sectionMatch[1]);
    const sectionContent = sectionMatch[2];
    const contentItems = [];

    for (const nameLinkMatch of sectionContent.matchAll(nameLinkRegex)) {
      contentItems.push({
        name: addApostrophe(nameLinkMatch[1]),
        link: addApostrophe(nameLinkMatch[2]),
      });
    }

    generalLinks.push({ title: sectionTitle, content: contentItems });
  }

  const fixedLinksStart = content.indexOf("Links Fixes");
  const fixedLinksEnd = content.indexOf("PEU DE PÀGINA INFERIOR");

  const fixedLinksSection = content.slice(fixedLinksStart, fixedLinksEnd);

  const fixedLinks = [];

  for (const nameLinkMatch of fixedLinksSection.matchAll(nameLinkRegex)) {
    fixedLinks.push({
      name: addApostrophe(nameLinkMatch[1]),
      link: addApostrophe(nameLinkMatch[2]),
    });
  }

  return { generalLinks, fixedLinks };
}

export function extractBottomFooterInfo(content: string) {
  const linksStart = content.indexOf("PEU DE PÀGINA INFERIOR");
  const linksEnd = content.length;

  const linksSection = content.slice(linksStart, linksEnd);

  const links = [];

  for (const nameLinkMatch of linksSection.matchAll(nameLinkRegex)) {
    links.push({
      name: addApostrophe(nameLinkMatch[1]),
      link: addApostrophe(nameLinkMatch[2]),
    });
  }

  return links;
}

export function seasonToEndpointMapper(season: string) {
  const seasonYears = season.split("/");
  return `/temporada-${seasonYears[0]}-${seasonYears[1]}`;
}

export function truncateString(str: string) {
  // Function to normalize the input for easier matching
  const normalizeString = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  // Truncate if the string is longer than 198 characters
  let truncated = str.length <= 198 ? str : str.slice(0, 198);
  let normalizedTruncated = normalizeString(truncated);

  // Patterns to remove (considering variations in accents and capitalization)
  const patternsToRemove = [
    normalizeString("Eugeni Rius Daví"),
    normalizeString("Eugeni"),
    normalizeString("Rius"),
    normalizeString("Daví"),
    normalizeString("Jordi Sanuy Bassa"),
    normalizeString("Jordi"),
    normalizeString("Sanuy"),
    normalizeString("Bassa"),
  ];

  // Attempt to remove each pattern from the start of the string
  let removedPattern = false;
  for (const pattern of patternsToRemove) {
    if (normalizedTruncated.startsWith(pattern)) {
      // Calculate actual length of the pattern to remove it from the original string
      const actualLength = str.slice(0, pattern.length).length;
      truncated = truncated.slice(actualLength).trim();
      removedPattern = true;
      break; // Stop after removing the first matching pattern
    }
  }

  // If no specific pattern was removed, ensure any starting word is not abruptly cut off
  if (!removedPattern) {
    let lastSpaceIndex = truncated.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      truncated = truncated.slice(0, lastSpaceIndex).trim();
    }
  }

  return truncated + "...";
}

export function upperCaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toggleDialog(dialogId: string) {
  const dialog = document.getElementById(dialogId) as HTMLDialogElement;
  if (dialog === null) return;
  if (dialog.open) {
    dialog.close();
  } else {
    dialog.showModal();
  }
}
export function getKeyDescription(key: string, divisio: string) {
  switch (key) {
    case "classificacio":
    case "resultats":
      return capitalizeWords(divisio);
    case "classificacioA1":
      return "A1";
    case "resultatsFaseRegularA1":
      return "Fase Regular A1";
    case "resultatsPrimeraFaseA1":
      return "Primera Fase A1";
    case "resultatsPlayoffsQuarts":
      return "Playoffs Quarts";
    case "classificacioA2":
      return "A2";
    case "resultatsFaseRegularA2":
      return "Fase Regular A2";
    case "resultatsPrimeraFaseA2":
      return "Primera Fase A2";
    case "classificacioAscens":
    case "resultatsAscens":
      return "Ascens";
    case "classificacioFinalTemporada":
      return "Final Temporada";
    case "classificacioGrupPar":
    case "resultatsFaseRegularGrupPar":
    case "resultatsLligaRegularGrupPare":
      return "Grup Par";
    case "classificacioGrupSenar":
    case "resultatsFaseRegularGrupSena":
      return "Grup Senar";
    case "classificacioLligaRegular":
    case "resultatsLligaRegular":
      return "Lliga Regular";
    case "resultatsFaseRegular":
      return "Fase Regular";
    case "classificacioTemporadaRegular":
    case "resultatsTemporadaRegular":
      return "Temporada Regular";
    case "classificacioLligaRegularGrup":
    case "resultatsFaseRegularGrup":
      return "Lliga Regular Grup";
    case "classificacioPlayout":
    case "resultatsPlayout":
      return "Playout";
    case "resultatsPlayoffsPermanencia":
      return "Playoffs Permanencia";
    case "classificacioPrimeraFaseA1":
      return "Primera Fase A1";
    case "classificacioSegonaFaseGrup1":
    case "resultatsSegonaFaseGrup1":
      return "Segona Fase Grup 1";
    case "resultatsPromocio":
      return "Promoció";
    case "resultatsPromocioTriangular":
      return "Promoció Triangular";
    case "resultatsFaseRegularPlayoff":
      return "Fase Regular Playoff";
    case "resultatsPlayoffsVuitens":
      return "Playoffs Vuitens";

    default:
      return "Unknown";
  }
}

export function capitalizeWords(str: string) {
  // Convert the entire string to lowercase first
  const lowerStr = str.toLowerCase();

  // Split the string into words based on spaces
  const words = lowerStr.split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back into a string with spaces
  return words.join(" ");
}
export function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function slugify(text: string) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
}

export function disableBgScroll(scrollPosition?, isMobileSafari?) {
  if (isMobileSafari) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.style.position = "fixed";
  } else {
    document.documentElement.style.overflow = "hidden";
  }
}

export function enableBgScroll(
  scrollPosition?: number,
  isMobileSafari?: boolean,
) {
  if (isMobileSafari) {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
  } else {
    document.documentElement.style.overflow = "";
  }
}
