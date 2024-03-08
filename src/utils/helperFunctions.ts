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
    'Links Generals (Fins a tres elements)'
  );
  const generalLinksEnd = content.indexOf('Links Fixes');
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

  const fixedLinksStart = content.indexOf('Links Fixes');
  const fixedLinksEnd = content.indexOf('PEU DE PÀGINA INFERIOR');

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
  const linksStart = content.indexOf('PEU DE PÀGINA INFERIOR');
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
   const seasonYears = season.split('/');
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
  const dialog = document.getElementById(dialogId) as HTMLDialogElement
  if (dialog === null) return;
  if (dialog.open) {
    dialog.close();
  } else {
    dialog.showModal();
  }
}