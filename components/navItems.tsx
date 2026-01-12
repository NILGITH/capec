"use client"

// Définissez et exportez le type NavItem dans ce fichier
export type NavItem = {
  titleKey: string
  href: string
  submenu?: NavItem[]  // sous-menu optionnel
}

// Exportez ensuite vos données
export const navItems: NavItem[] = [
  {
    titleKey: "home",
    href: "/",
  },
  {
    titleKey: "about",
    href: "",
    submenu: [
      {
        titleKey: "directorWord",
        href: "/a-propos/mot-du-directeur",
      },
      {
        titleKey: "historyObjectives",
        href: "/a-propos/historique-objectif",
      },
      {
        titleKey: "ourActivities",
        href: "/a-propos/nos-activites",
      },
      {
        titleKey: "orgChart",
        href: "/a-propos/organigramme",
      },
      {
        titleKey: "capecFigures",
        href: "/a-propos/capec-en-chiffres",
      },
      {
        titleKey: "references",
        href: "/a-propos/references",
      },
    ],
  },
  {
    titleKey: "resources",
    href: "",
    submenu: [
      {
        titleKey: "researchProjects",
        href: "/ressources/recherches",
      },
      {
        titleKey: "studies",
        href: "/ressources/etudes",
      },
    ],
  },
  {
    titleKey: "publications",
    href: "/publication",
  },
  {
    titleKey: "activities",
    href: "",
    submenu: [
      {
        titleKey: "activityPrograms",
        href: "/activites/programme",
      },
      {
        titleKey: "activityReports",
        href: "/activites/rapport",
      },
      /* {
        title: "CR d'actualités",
        href: "/activites/compte-rendu",
      }, */
      {
        titleKey: "interviews",
        href: "/activites/interview",
      },
      {
        titleKey: "news",
        href: "/activites/actualites",
      },
    ],
  },
  {
    titleKey: "media",
    href: "",
    submenu: [
      {
        titleKey: "photoLibrary",
        href: "/medias/phototheque",
      },
      {
        titleKey: "videoLibrary",
        href: "/medias/videotheque",
      },
    ],
  },
  {
    titleKey: "researchers",
    href: "/chercheur",
  },
]