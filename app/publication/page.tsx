
"use client";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";
import { MainNav } from "@/components/main-nav";

// Définir une interface pour le type des publications
interface Publication {
  title: string;
  author: string;
  authorLink: string;
  pdfLink: string;
}

// Définir les types possibles pour selectedType
type PublicationType =
  | "Politique Économique et Développement (PED)"
  | "Bulletin de Politique Économique et Développement (BUPED)"
  | "Lettre de Politique Économique (LPE)"
  | "Publications dans les revues spécialisées (PRS)";

// Définir le type pour availableYearsByType et publicationsByType
interface YearsByType {
  [key: string]: string[];
}

interface PublicationsByType {
  [key: string]: { [year: string]: Publication[] };
}

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState<PublicationType>("Politique Économique et Développement (PED)");
  const [selectedYear, setSelectedYear] = useState<string>("Sélectionnez l’année");
  const [showPublications, setShowPublications] = useState<boolean>(false);
  const [currentPublications, setCurrentPublications] = useState<Publication[]>([]);

  // Liste des années disponibles pour chaque type de publication
  const availableYearsByType: YearsByType = {
    "Politique Économique et Développement (PED)": [
    
      "2012",
      "2013",
      "2014",
      "2015",
      "2017",
    ],
    "Bulletin de Politique Économique et Développement (BUPED)": [
      
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2018",
    ],
    "Lettre de Politique Économique (LPE)": [
      "2012",
      "2013",
      "2014",
      "2015",
      "2018",
      
    ],
    "Publications dans les revues spécialisées (PRS)": [],
  };

  // Données des publications
  const publications2015: Publication[] = [
    {
      title: "EFFETS REELS DE LA FUITE DES CAPITAUX EN COTE D’IVOIRE",
      author: "Prof. Loesse Jacques ESSO, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/effet reel.pdf",
    },
    {
      title: "ANALYSE DE LA PERFORMANCE DES EXPLOITATIONS DE CACAO DE LA COTE D’IVOIRE : VERS UNE DIVERSIFICATION DE L’OFFRE IVOIRIENNE",
      author: "Dr FE Doukoure, Chercheur Junior CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/analyse des performances.pdf",
    },
    {
      title: "DETERMINANTS DE LA DISPOSITION DES MANAGERS A FORMALISER LES ENTREPRISES DU SECTEUR INFORMEL EN COTE IVOIRE",
      author: "TRAORE Nohoua",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/determinants.pdf",
    },
    {
      title: "SOUTENABILITE DE LA DETTE PUBLIQUE DE COTE D’IVOIRE: LES IMPLICATIONS DE POLITIQUE FISCALE",
      author: "Nahoua YEO Enseignant-chercheur, Université Félix Houphouët-Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/soutenabilite.pdf",
    },
    {
      title: "IMPOSITION ET PERFORMANCE DES PETITES ET MOYENNES ENTREPRISES (PME) EN COTE D’IVOIRE",
      author: "Prof. BALLO Zié, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/imposition.pdf",
    },
    {
      title: "DECENTRALISATION ET INCITATIONS FISCALES EN COTE D’IVOIRE",
      author: "Prof. BALLO Zié, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2015/decentralisation.pdf",
    },
   
  ];


  const publications2012: Publication[] = [
    {
      title: "APE : UNE OPPORTUNITE POUR LA COTE D'IVOIRE ?",
      author: "Dr. SOBIA Assata, Dr. YOLI BI SANI Martin, M. KOUAME Kouad",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2012/une oppotunite.pdf",
    },
    {
      title: "STABILISATION DES PRIX DU CAFE ET DU CACAO EN COTE D'IVOIRE",
      author: "Dr. MALAN Béïla Benoît, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2012/stabilisation des prix.pdf",
    },
    {
      title: "SYSTEME THERMIQUE ET EQUILIBRE DU SECTEUR DE L'ENERGIE EN COTE D'IVOIRE",
      author: "Dr. DJEZOU Wadjamsse Beaudelaire & DJA N'GUESSAN Ferdinand",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2012/systeme thermique.pdf",
    },
    {
      title: "CLIMAT DES AFFAIRES ET PERFORMANCE DES ENTREPRISES IVOIRIENNES",
      author: "N'GOTTA Celaine & BECHO Isabelle, Chercheurs Associés",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2012/climat des affaires.pdf",
    },
    {
      title: "INVESTIGATION EMPIRIQUE DU RECOURS AUX CONSULTATIONS PRENATALES EN COTE D'IVOIRE",
      author: "Dr. TIEHI Tito Nestor, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2012/investigation.pdf",
    },
  ];

  const publications2013: Publication[] = [
    {
      title: "CRIME, SELF PROTECTION AND BUSINESS GROWTH IN COTE D'IVOIRE",
      author: "ASSI J. C. KIMOU AND KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2013/crime self.pdf",
    },
    {
      title: "ESSAI D’ÉVALUATION DE L’IMPACT DE LA CRÉATION DE L’UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "FE DOUKOURE CHARLES, ENSEA d’Abidjan et CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2013/essai devaluation.pdf",
    },
  ];

  const publications2014: Publication[] = [
    {
      title: "ANALYSE DES PERFORMANCES ECONOMIQUE ET TECHNIQUE DES FIRMES EN COTE D'IVOIRE",
      author: "N’GOTTA K. Celaine",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/analyse des performances.pdf",
    },
    {
      title: "INEGALITES DE GENRE ET ENTREPRENEURIAT EN COTE D'IVOIRE",
      author: "N’DEDE Bosoma Florence epse DAGNAN, Université Félix Houphouët Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/inegalite de genre.pdf",
    },
    {
      title: "MAIN D’OEUVRE FAMILIALE DANS LES PME IVOIRIENNES : LOGIQUES SOCIALES ET ENJEUX",
      author: "Jean-Louis LOGNON, Sociologue, Université Félix Houphouët Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/main doeuvre.pdf",
    },
    {
      title: "EFFET DES INVESTISSEMENTS EN TIC ET EN CAPITAL HUMAIN SUR LA PRODUCTIVITE DU TRAVAIL AU SEIN DES ENTREPRISES EN COTE D'IVOIRE : EVIDENCE EMPIRIQUE SUR DONNEES DE PANEL",
      author: "KOUADIO Kouassi B., Doctorant CAPEC-UFR SEG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/effet des investissements.pdf",
    },
    {
      title: "MACROECONOMIC AND SOCIAL IMPACTS OF ECONOMIC PARTNERSHIP AGREEMENTS ON IVORIAN ECONOMY: A NEW ASSESSMENT",
      author: "FE DOUKOURE Charles, ENSEA d'Abidjan et CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/macroeconomique.pdf",
    },
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO Zié, Chercheur à la CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2014/entreprise familial.pdf",
    },
 
  ];

  const publications2017: Publication[] = [
    {
      title: "IMPACT DU PROJET DE CONSEIL AGRICOLE SUR LES PERFORMANCES DES PRODUCTEURS D’ANACARDE DE COTE D’IVOIRE",
      author: "Dr FE Doukoure, Chercheur Junior CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/PED PDF/2017/impact du projet.pdf",
    },
  ];

  

  const bupedPublications2012: Publication[] = [
    {
      title: "LA RELANCE POST CRISE EN COTE D'IVOIRE A-T-ELLE NECESSAIREMENT BESOIN D'UN SURCROIT D'ASSISTANCE EXTERIEURE ? : UNE ANALYSE PAR LES EFFETS DE SEUILS",
      author: "YOHOU Djédjé Hermann & KAMAGATE Tidiane, Chercheurs Associés CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/RELANCE POST CRISE.pdf",
    },
    {
      title: "DETERMINANTS DE LA VOLATILITE DES PRIX DES PRODUITS ALIMENTAIRES ET LA PERTINENCE DES MESURES DE STABILISATION EN COTE D'IVOIRE",
      author: "Dr. NAHOUA YEO, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/DETERMINANT.pdf",
    },
    {
      title: "GOUVERNANCE, CLIMAT DES AFFAIRES ET PERFORMANCE PRODUCTIVE DU SECTEUR PRIVE IVOIRIEN : UNE ANALYSE COMPARATIVE AVEC LES PAYS AFRICAINS LEADERS",
      author: "N'GUESSAN Dieu-Donné Melagne, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/GOUVERNANCE.pdf",
    },
    {
      title: "CHOCS EXTERIEURS ET FLUCTUATIONS MACROECONOMIQUES EN COTE D'IVOIRE",
      author: "FE Doukouré Charles & KANGA Kouamé D'Ati",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/CHOC EXTERIEUR.pdf",
    },
    {
      title: "INVESTIGATION EMPIRIQUE DU RECOURS AUX CONSULTATIONS PRENATALES EN COTE D'IVOIRE",
      author: "Dr. TIEHI Tito Nestor, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/INVESTIGATION.pdf",
    },
    {
      title: "APE : UNE OPPORTUNITE POUR LA COTE D'IVOIRE ?",
      author: "Dr. SOBIA Aïssata, Dr. YOLI Bi Sani Martin, KOUAME Franc",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2012/APE.pdf",
    },
   
  ];

  const bupedPublications2013: Publication[] = [
    {
      title: "ESSAI D'ÉVALUATION DE L'IMPACT DE LA CRÉATION DE L'UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2013/ESSAI.pdf",
    },
    {
      title: "CRIME, SELF-PROTECTION AND BUSINESS GROWTH IN COTE D’IVOIRE",
      author: "ASSI J. C. KIMOU & KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2013/CRISE SELF.pdf",
    },
    {
      title: "INCIDENCE ET EFFICACITÉ ÉCONOMIQUE DES TAXES INDIRECTES EN COTE D’IVOIRE",
      author: "Nahoua YEO, PhD Enseignant-chercheur à l’UFRSEG, Université FHB",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2013/INCIDENCE.pdf",
    },
    {
      title: "ESSAI D'ÉVALUATION DE L'IMPACT DE LA CRÉATION DE L'UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2013/ESSAI DEVALUATION.pdf",
    },
    {
      title: "ARMED CONFLICT AND SCHOOLING OUTCOMES IN CÔTE D’IVOIRE",
      author: "Prof. Zié BALLO, Chercheur - CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2013/ARMED CONFLICT.pdf",
    },
  ];

  const bupedPublications2014: Publication[] = [
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO ZIE, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2014/LES ENTREPRISES FAMILIALE.pdf",
    },
    {
      title: "Analyse de la performance économique et de l’efficience des firmes en Côte d’Ivoire",
      author: "Célaine NGOTTA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2014/ANALYSE DE LA PERFORMANCE.pdf",
    },
    {
      title: "ENTREPRENEURIAT ET GENRE CÔTE D’IVOIRE",
      author: "N’DEDE Bosoma Florence epse DAGNAN; Jean-Louis LOGNON, Université F",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2014/ENTREPRENEURIAT ET GENRE.pdf",
    },
    {
      title: "MAIN D’ŒUVRE FAMILIALE DANS LES PME IVOIRIENNES : LOGIQUES SOCIALES ET ENJEUX",
      author: "Jean-Louis LOGNON, Sociologue, Enseignant chercheur Université Félix",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2014/MAIN DOEUVRE.pdf",
    },
    {
      title: "EFFET DES INVESTISSEMENTS EN TIC ET EN CAPITAL HUMAIN SUR LA PRODUCTIVITÉ DU TRAVAIL AU SEIN DES ENTREPRISES EN CÔTE D’IVOIRE.",
      author: "KOUADIO Kouassi B., CAPEC-UFR SEG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2014/EFFET DES INVESTISSEMENTS.pdf",
    },
    
  ];

  const bupedPublications2015: Publication[] = [
    {
      title: "Analyse de la performance des exportations de cacao de la Côte d'Ivoire : vers une diversification de l’offre Ivoirienne",
      author: "Dr FE Doukouré Charles Enseignant à l’ENSEA et Chercheur Junior à",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2015/ANALYSE DE LA PERFORMANCE.pdf",
    },
  ];

  const bupedPublications2016: Publication[] = [
    {
      title: "COMMERCE INTRA UEMOA DE LA COTE D’IVOIRE : INFLUENCE DES INFRASTRUCTURES ET DE L’ENVIRONNEMENT ECONOMIQUE.",
      author: "Dr FE Doukouré Charles Enseignant à l’ENSEA et Chercheur Junior à",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2016/COMMERCE INTRA UEMOA.pdf",
    },
  ];

  const bupedPublications2018: Publication[] = [
  
    {
      title: "ANALYSE DES EFFETS DE L’ENDETTEMENT ET DU DÉFICIT BUDGÉTAIRE SUR LA CROISSANCE DE LA CÔTE D’IVOIRE À LONG TERME",
      author: "Prof. Esso Loesse Jacques, Chercheurs CAPEC – Dr Fé Doukouré Charles",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/BUPED PDF/2018/ANALYSE DES EFFETS.pdf",
    },
   
  ];

  const lpePublications2012: Publication[] = [
    {
      title: "CLIMAT DES AFFAIRES ET PERFORMANCE PRODUCTIVE DU SECTEUR PRIVÉ IVOIRIEN",
      author: "N'GUESSAN Dieu-Donné Melagne, Chercheur Associé CAPEC",      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/LPE PDF/2012/CLIMAT DES AFFAIRES.pdf",
    },
  ];

  const lpePublications2013: Publication[] = [
    {
      title: "CRIME, SELF-PROTECTION AND BUSINESS GROWTH IN CÔTE D’IVOIRE",
      author: "ASSI J. C. KIMOU & KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/LPE PDF/2013/CRIMINALITE.pdf",
    },
  ];

  const lpePublications2014: Publication[] = [
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PLUS PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO Zié, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/LPE PDF/2014/ENTREPRISE FAMILIALE.pdf",
    },
  ];

  const lpePublications2015: Publication[] = [
    {
      title: "ANALYSE DE LA PERFORMANCE DES EXPORTATIONS DE CACAO DE LA CÔTE D’IVOIRE",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/LPE PDF/2015/ANALYSE DES PERFORMANCES.pdf",
    },
  ];

  const lpePublications2018: Publication[] = [
    {
      title: "ANALYSE DES EFFETS DE L’ENDETTEMENT ET DU DÉFICIT BUDGÉTAIRE SUR LA CROISSANCE À LONG TERME",
      author: "Prof. Esso Loesse Jacques & Dr. FE Doukouré Charles, Chercheurs CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "/images/PUBLICATION/LPE PDF/2018/ANALYSE DE LENDETTEMENT.pdf",
    },
  ];




  // Structure des publications par type et année
  const publicationsByType: PublicationsByType = {
    "Politique Économique et Développement (PED)": {
     
      "2012": publications2012,
      "2013": publications2013,
      "2014": publications2014,
      "2015": publications2015,
      "2017": publications2017,
    },
    "Bulletin de Politique Économique et Développement (BUPED)": {
     
      "2012": bupedPublications2012,
      "2013": bupedPublications2013,
      "2014": bupedPublications2014,
      "2015": bupedPublications2015,
      "2016": bupedPublications2016,
      "2018": bupedPublications2018,
    },
    "Lettre de Politique Économique (LPE)": {
    
      "2012": lpePublications2012,
      "2013": lpePublications2013,
      "2014": lpePublications2014,
      "2015": lpePublications2015,
      "2018": lpePublications2018,
      
     
    },
   
  };

  // Gestion de l'affichage des publications
  const handleShowPublications = () => {
    if (selectedYear === "Sélectionnez l’année") {
      setShowPublications(false);
      setCurrentPublications([]);
      return;
    }

    const publications = publicationsByType[selectedType]?.[selectedYear] || [];
    setCurrentPublications(publications);
    setShowPublications(true);
  };

  // Rendu des années disponibles pour le type sélectionné
  const availableYears = availableYearsByType[selectedType] || [];

  return (
    <div className="flex flex-col min-h-screen">
    <MainNav/>
    <main className="flex-grow">
    <div className="max-w-5xl mx-auto mt-24 mb-52 p-6 bg-white rounded-lg">
    <h2 className="text-4xl font-bold text-gray-800 mb-2">Publications</h2>
        <div className="h-1 w-12 bg-orange-500 mb-6"></div>

        {/* Section PED */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Politique Économique et Développement (PED)
          </h3>
          <p className="text-gray-600">
            Le PED rend compte des résultats des études et recherches dans leur intégralité sans aucune restriction, avec toute la technicité et la rigueur nécessaires. Sa distribution se fait sur demande expresse quand les lecteurs ne le consultent pas sur place.
          </p>
        </section>

        {/* Section BUPED */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Bulletin de Politique Économique et Développement (BUPED)
          </h3>
          <p className="text-gray-600">
            Le BUPED, à la différence du PED, résume en une vingtaine de pages au plus et sans détail technique, les conclusions et recommandations des études.
          </p>
        </section>

        {/* Section LPE */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Lettre de Politique Économique (LPE)
          </h3>
          <p className="text-gray-600">
            La LPE rend compte de l’essentiel des résultats des recherches et des recommandations de politiques économiques qui en découlent. Elle est aussi utilisée comme support pour les chroniques économiques. Elle ne comporte que quatre pages et reste spécialement destinée aux décideurs.
          </p>
        </section>


      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Type de publication
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as PublicationType)}
              className="block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              
              <option>Politique Économique et Développement (PED)</option>
              <option>Bulletin de Politique Économique et Développement (BUPED)</option>
              <option>Lettre de Politique Économique (LPE)</option>
            </select>
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
              Année
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Sélectionnez l’année</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
          <Button
                  onClick={handleShowPublications}
                  className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Rechercher
                  <Search className="w-4 h-4 ml-2" />
                </Button>
          </div>
        </div>
      </div>

      {showPublications && (
          <section className="mt-6">
            {currentPublications.map((pub, index) => (
              <div key={index} className="rounded border py-3 px-4 mb-4">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-gray-800" />
                  <h5 className="text-lg font-semibold text-gray-800">{pub.title}</h5>
                </div>
                <h6 className="text-gray-600 mt-1">
                  Auteur : <a href={pub.authorLink} className="text-orange-500 hover:underline">{pub.author}</a>
                </h6>
                <div className="flex items-center mt-2">
                  < Image
                    src="/images/pdf.png"
                    width="30"
                    height="30"
                    className="shadow"
                    alt="PDF icon"
                  />
                  <a
                    href={pub.pdfLink}
                    target="_blank"
                    className="text-orange-500 hover:underline ml-4"
                  >
                    Télécharger le pdf
                  </a>
                </div>
              </div>
            ))}
          </section>
        )}


   </div>
    </main>
    <Footer />
  </div>

  );
}