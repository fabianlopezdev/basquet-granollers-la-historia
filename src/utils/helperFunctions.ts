// Function to replace HTML apostrophe entity with a regular apostrophe
export function addApostrophe(str: string): string {
  return str.replace(/&#8217;/g, "'");
}

// Function to normalize a string by removing diacritics and converting to lowercase
function normalizeString(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Function to truncate a string to a maximum of 198 characters and remove specific patterns
export function truncateString(str: string): string {
  const truncated = str.length <= 198 ? str : str.slice(0, 198);
  const normalizedTruncated = normalizeString(truncated);

  const patternsToRemove = [
    "Eugeni Rius Daví",
    "Eugeni",
    "Rius",
    "Daví",
    "Jordi Sanuy Bassa",
    "Jordi",
    "Sanuy",
    "Bassa",
  ].map(normalizeString);

  for (const pattern of patternsToRemove) {
    if (normalizedTruncated.startsWith(pattern)) {
      const actualLength = str.slice(0, pattern.length).length;
      return truncated.slice(actualLength).trim() + "...";
    }
  }

  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return lastSpaceIndex !== -1
    ? truncated.slice(0, lastSpaceIndex).trim() + "..."
    : truncated + "...";
}

// Function to capitalize the first letter of a string
export function upperCaseFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to toggle the visibility of a dialog element
export function toggleDialog(dialogId: string): void {
  const dialog = document.getElementById(dialogId) as HTMLDialogElement;
  if (dialog) {
    dialog.open ? dialog.close() : dialog.showModal();
  }
}

// Function to get the description for a given key and division
export function getKeyDescription(key: string, divisio: string): string {
  const keyDescriptions: Record<string, string> = {
    classificacio: capitalizeWords(divisio),
    resultats: capitalizeWords(divisio),
    classificacioA1: "A1",
    resultatsFaseRegularA1: "Fase Regular A1",
    resultatsPrimeraFaseA1: "Primera Fase A1",
    resultatsPlayoffsQuarts: "Playoffs Quarts",
    classificacioA2: "A2",
    resultatsFaseRegularA2: "Fase Regular A2",
    resultatsPrimeraFaseA2: "Primera Fase A2",
    classificacioAscens: "Ascens",
    resultatsAscens: "Ascens",
    classificacioFinalTemporada: "Final Temporada",
    classificacioGrupPar: "Grup Par",
    resultatsFaseRegularGrupPar: "Grup Par",
    resultatsLligaRegularGrupPare: "Grup Par",
    classificacioGrupSenar: "Grup Senar",
    resultatsFaseRegularGrupSena: "Grup Senar",
    classificacioLligaRegular: "Lliga Regular",
    resultatsLligaRegular: "Lliga Regular",
    resultatsFaseRegular: "Fase Regular",
    classificacioTemporadaRegular: "Temporada Regular",
    resultatsTemporadaRegular: "Temporada Regular",
    classificacioLligaRegularGrup: "Lliga Regular Grup",
    resultatsFaseRegularGrup: "Lliga Regular Grup",
    classificacioPlayout: "Playout",
    resultatsPlayout: "Playout",
    resultatsPlayoffsPermanencia: "Playoffs Permanencia",
    classificacioPrimeraFaseA1: "Primera Fase A1",
    classificacioSegonaFaseGrup1: "Segona Fase Grup 1",
    resultatsSegonaFaseGrup1: "Segona Fase Grup 1",
    resultatsPromocio: "Promoció",
    resultatsPromocioTriangular: "Promoció Triangular",
    resultatsFaseRegularPlayoff: "Fase Regular Playoff",
    resultatsPlayoffsVuitens: "Playoffs Vuitens",
  };

  return keyDescriptions[key] || "Unknown";
}

// Function to capitalize each word in a string
export function capitalizeWords(str: string): string {
  return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Function to remove diacritics from a string
export function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Function to convert a string to a URL-friendly slug
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
}

// Function to disable background scrolling
export function disableBgScroll(scrollPosition?: number, isMobileSafari?: boolean): void {
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

// Function to enable background scrolling
export function enableBgScroll(scrollPosition?: number, isMobileSafari?: boolean): void {
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