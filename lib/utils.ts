import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Fonction pour trier les actualités de la plus récente à la plus ancienne
 */
export function sortNewsByDate<T extends { date: string }>(news: T[]): T[] {
  return [...news].sort((a, b) => {
    // Gestion des dates vides (on les met en fin de liste)
    if (!a.date) return 1;
    if (!b.date) return -1;

    // Convertir les dates en objets Date pour comparaison
    const dateA = parseFrenchDate(a.date);
    const dateB = parseFrenchDate(b.date);

    // Tri décroissant (les plus récentes en premier)
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Fonction pour parser les dates françaises dans différents formats
 */
function parseFrenchDate(dateString: string): Date {
  if (!dateString) return new Date(1970, 0, 1);

  // Normaliser la chaîne de date
  let cleanDate = dateString
    .replace(/^(Le\s+|Publié\s+le\s+|du\s+|le\s+)/i, "")
    .trim();

  // Mapper les mois français vers les mois numériques
  const monthMap: { [key: string]: number } = {
    janvier: 0,
    février: 1,
    fevrier: 1,
    mars: 2,
    avril: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    août: 7,
    aout: 7,
    septembre: 8,
    octobre: 9,
    novembre: 10,
    décembre: 11,
    decembre: 11,
  };

  // Format 1 : "1 au 5 avril 2019" - prendre la date de début (1 avril 2019)
  const auMatch = cleanDate.match(
    /^(\d{1,2})\s+au\s+\d{1,2}\s+([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (auMatch) {
    const day = parseInt(auMatch[1], 10);
    const month = monthMap[auMatch[2].toLowerCase()] || 0;
    const year = parseInt(auMatch[3], 10);
    return new Date(year, month, day);
  }

  // Format 2 : "21 septembre 2020"
  const simpleMatch = cleanDate.match(
    /^(\d{1,2})\s+([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (simpleMatch) {
    const day = parseInt(simpleMatch[1], 10);
    const month = monthMap[simpleMatch[2].toLowerCase()] || 0;
    const year = parseInt(simpleMatch[3], 10);
    return new Date(year, month, day);
  }

  // Format 3 : "septembre 2020" (sans jour)
  const monthYearMatch = cleanDate.match(
    /^([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (monthYearMatch) {
    const month = monthMap[monthYearMatch[1].toLowerCase()] || 0;
    const year = parseInt(monthYearMatch[2], 10);
    return new Date(year, month, 1); // Premier du mois par défaut
  }

  // Format 4 : "2024" (juste l'année)
  const yearOnlyMatch = cleanDate.match(/^(\d{4})$/);
  if (yearOnlyMatch) {
    const year = parseInt(yearOnlyMatch[1], 10);
    return new Date(year, 0, 1); // 1er janvier par défaut
  }

  // Format 5 : "Le 15 mai 2025" avec "Le" déjà retiré, mais pour sécurité
  const leMatch = cleanDate.match(
    /^(\d{1,2})\s+([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (leMatch) {
    const day = parseInt(leMatch[1], 10);
    const month = monthMap[leMatch[2].toLowerCase()] || 0;
    const year = parseInt(leMatch[3], 10);
    return new Date(year, month, day);
  }

  // Format 6 : Gestion des intervalles avec mois différents "30 juin au 2 juillet 2016"
  const complexIntervalMatch = cleanDate.match(
    /^(\d{1,2})\s+([a-zA-Zéèêëàâäôöûüç]+)\s+au\s+\d{1,2}\s+[a-zA-Zéèêëàâäôöûüç]+\s+(\d{4})$/i
  );
  if (complexIntervalMatch) {
    const day = parseInt(complexIntervalMatch[1], 10);
    const month = monthMap[complexIntervalMatch[2].toLowerCase()] || 0;
    const year = parseInt(complexIntervalMatch[3], 10);
    return new Date(year, month, day);
  }

  // Format 7 : Gestion des "et" (ex: "8 et 9 octobre 2024")
  const etMatch = cleanDate.match(
    /^(\d{1,2})\s+et\s+\d{1,2}\s+([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (etMatch) {
    const day = parseInt(etMatch[1], 10);
    const month = monthMap[etMatch[2].toLowerCase()] || 0;
    const year = parseInt(etMatch[3], 10);
    return new Date(year, month, day);
  }

  // Format 8 : Gestion des dates avec "du" (ex: "du 10 au 12 Septembre 2021")
  const duMatch = cleanDate.match(
    /^(\d{1,2})\s+au\s+\d{1,2}\s+([a-zA-Zéèêëàâäôöûüç]+)\s+(\d{4})$/i
  );
  if (duMatch) {
    const day = parseInt(duMatch[1], 10);
    const month = monthMap[duMatch[2].toLowerCase()] || 0;
    const year = parseInt(duMatch[3], 10);
    return new Date(year, month, day);
  }

  // Pour les dates non reconnues, on essaie de les parser avec Date()
  try {
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  } catch (e) {
    // Ignorer l'erreur
  }

  // Date par défaut pour les formats non reconnus (très ancienne)
  return new Date(1900, 0, 1);
}

/**
 * Fonction utilitaire pour formater la date en français (optionnel)
 */
export function formatFrenchDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}
