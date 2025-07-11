"use client"

// Définissez et exportez le type NavItem dans ce fichier
export type NavItem = {
  title: string
  href: string
  submenu?: NavItem[]  // sous-menu optionnel
}

// Exportez ensuite vos données
export const navItems: NavItem[] = [
  {
    title: "ACCUEIL",
    href: "/",
  },
  {
    title: "A PROPOS",
    href: "",
    submenu: [
      {
        title: "Mot du Directeur",
        href: "/a-propos/mot-du-directeur",
      },
      {
        title: "Historique et Objectifs",
        href: "/a-propos/historique-objectif",
      },
      {
        title: "Nos Activités",
        href: "/a-propos/nos-activites",
      },
      {
        title: "Organigramme",
        href: "/a-propos/organigramme",
      },
      {
        title: "La CAPEC en Chiffres",
        href: "/a-propos/capec-en-chiffres",
      },
      {
        title: "Quelques Références",
        href: "/a-propos/references",
      },
    ],
  },
  {
    title: "RESSOURCES",
    href: "",
    submenu: [
      {
        title: "Projets de recherches",
        href: "/ressources/recherches",
      },
      {
        title: "Etude réalisée",
        href: "/ressources/etudes",
      },
    ],
  },
  {
    title: "PUBLICATIONS",
    href: "/publication",
  },
  {
    title: "ACTIVITES",
    href: "",
    submenu: [
      {
        title: "Programmes d'activités",
        href: "/activites/programme",
      },
      {
        title: "Rapports d'activités",
        href: "/activites/rapport",
      },
      {
        title: "CR d'actualités",
        href: "/activites/compte-rendu",
      },
      {
        title: "Interview - Question",
        href: "/activites/interview",
      },
      {
        title: "Actualités",
        href: "/activites/actualites",
      },
    ],
  },
  {
    title: "MEDIAS",
    href: "",
    submenu: [
      {
        title: "Photothèques",
        href: "/medias/phototheque",
      },
      {
        title: "Vidéothèques",
        href: "/medias/videotheque",
      },
    ],
  },
  {
    title: "CHERCHEURS",
    href: "/chercheur",
  },
]