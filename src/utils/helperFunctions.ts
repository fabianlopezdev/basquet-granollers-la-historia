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

