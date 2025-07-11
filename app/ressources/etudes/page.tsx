"use client";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { MainNav } from "@/components/main-nav";

interface Etude {
  title: string;
  date: string;
  pdfLink: string;
}

export default function EtudePage() {
  const [selectedType, setSelectedType] = useState("Analyse d'impact économique");
  const [selectedYear, setSelectedYear] = useState("Sélectionnez l’année");
  const [showEtude, setShowEtude] = useState(false);
  const [currentEtude, setCurrentEtude] = useState<Etude[]>([]);

  // Définir les études par catégorie et par année
  const etudesByCategory: { [key: string]: { [key: string]: Etude[] } } = {
    "Analyse d'impact économique": {
      "2020": [
        {
          title: "CRIME, SELF PROTECTION AND BUSINESS GROWTH IN COTE D'IVOIRE",
          date: "2020",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2020/crime self.pdf",
        },
      ],
      "2018": [
        {
          title: "ETUDE DE L'IMPACT DES INVESTISSEMENTS DANS LES SECTEURS DES HYDROCARBURES ET DE L'ENERGIE SUR L'ECONOMIE IVOIRIENNE",
          date: "2018",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2018/etude impact des investissements.pdf",
        },
      ],
      "2017": [
        {
          title: "Impacts sanitaire et financier du financement de la lutte contre le SIDA en Côte d'Ivoire : Modélisation de Scénarii de financement.",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2017/impact sanitaire.pdf",
        },
      ],
      "2016": [
        {
          title: "Etude d'impact des radios de proximité en côte d'ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2016/etude impact des radios.pdf",
        },
      ],
      "2015": [
        {
          title: "ETUDE D'IMPACT SOCIO-ECONOMIQUE DU RETOUR DE LA BANQUE AFRICAINE DE DEVELOPPEMENT EN COTE D'IVOIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2015/etude impact.pdf",
        },
      ],
    },
    "Institution et gouvernance": {
      "2017": [
        {
          title: "Rapport national d'auto évaluation Gouvernance d'entreprise",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2017/rapport.pdf",
        },
      ],
      "2016": [
        {
          title: "Emergence Gouvernance Et Planification",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2016/EMERGENCE.pdf",
        },
      ],
      "2015": [
        {
          title: "INDICATEURS DE CAPACITéS EN AFRIQUE 2015",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2015/INDICATEUR.pdf",
        },
      ],
      "2014": [
        {
          title: "GOUVERNANCE ET PLANIFICATION : QUEL ROLE DANS L'EMERGENCE DES PAYS",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2014/GOUVERNANCE.pdf",
        },
      ],
      "2013": [
        {
          title: "STRATEGIES D'AMELIORATION DES INDICATEURS DE GOUVERNANCE EN COTE D'IVOIRE",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2013/STRACTEGIE AMELIORATION.pdf",
        },
      ],
    },
    "Transformation structurelle, croissance, développement et financement de l'économie": {
      "2017": [
        {
          title: "STRATEGIE NATIONALE DE DIALOGUE PUBLIC-PRIVE (SNDPP) 2016-2020 EN COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2017/stractegie nationale.pdf",
        },
      ],
      "2015": [
        {
          title: "PROFIL PAYS COTE D'IVOIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2015/profil pays.pdf",
        },
      ],
      "2014": [
        {
          title: "EMERGENCE ET DEVELOPPEMENT HUMAIN DURABLE",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2014/emergence et developpemnt.pdf",
        },
      ],
    },
    "Finance publique et convergence économique": {
      "2017": [
        {
          title: "ELABORATION DE LA STRATEGIE NATIONALE DE DEVELOPPEMENT DES STATISTIQUES (SNDS) 2017-2021 DE LA COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/finance publique/2017/elaboration.pdf",
        },
      ],
      "2016": [
        {
          title: "REVUE DES DEPENSES PUBLIQUES AGRICOLES (SOMMAIRE)",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/finance publique/2016/revue des depenses.pdf",
        },
      ],
      "2015": [
        {
          title: "ANALYSE DIAGNOSTIQUE DES LOYERS DE L'ETAT ET PROPOSITION D'UNE STRATEGIE DE POLITIQUE PUBLIQUE IMMOBILIERE COMPATIBLE AVEC LE CONTEXTE BUDGETAIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/finance publique/2015/analyse diagnostique.pdf",
        },
      ],
      "2014": [
        {
          title: "Evaluation des régies financières en Côte d'Ivoire",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/finance publique/2014/evaluation.pdf",
        },
      ],
    },
    "Entreprenariat et modèles d'affaire inclusifs": {
      "2016": [
        {
          title: "Etude de faisabilité pour la mise en place du statut de l'entreprenant en Côte d'Ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/entrepreneuriat/2016/etude de faisabilité.pdf",
        },
      ],
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/entrepreneuriat/2015/partenariat.pdf",
        },
      ],
    },
    "Pauvrété, inégalité et rédistribution": {
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/pauvrete/partenariat.pdf",
        },
      ],
    },
    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles": {
      "2018": [
        {
          title: "Examen stratégique nationale FAIM ZERO Côte d'Ivoire",
          date: "2018",
          pdfLink: "/images/agriculture et nutrition/2018/examen stractegique.pdf",
        },
      ],
      "2015": [
        {
          title: "Diagnostic du Secteur des Pêches : Efficacité Economique et Environnementale de l'Aménagement des Pêches et des Droits",
          date: "2015",
          pdfLink: "/images/agriculture et nutrition/2015/diagnostic du secteur peche.pdf",
        },
      ],
      "2012": [
        {
          title: "L'accès à l'eau potable: bilan et perspectives",
          date: "2012",
          pdfLink: "/images/agriculture et nutrition/2012/eau potable.pdf",
        },
      ],
    },
    "Suivi et évaluation de projet": {
      "2010": [
        {
          title: "Les problèmes énergétiques en CI: bilan et perspectives (1960-2060)",
          date: "2010",
          pdfLink: "/images/ETUDE PDF/suivi/cinquantenaire.pdf",
        },
      ],
    },
    "Modélisation économique":{
      "2019": [
        {
          title:"Projet de modélisation GEMMES pour la Côte d'Ivoire",
          date:"2019",
          pdfLink:"/images/ETUDE PDF/modélisation economique/2019/modelisation.pdf",
        }
      ]
    },
    "Commerce international": {
      "2013": [
        {
          title: "Politique Commerciale et Enjeux pour l'éligibilité de La Côte d'Ivoire au Programme Millenium Challenge Corporation",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/commerce international/2013/politique commerciale.pdf",
        },
          {
          title: " PROJET RéGIONAL DE RECHERCHE-ACTION SUR LA TAXATION DES PRODUITS DE TABAC EN AFRIQUE DE L'OUEST",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/commerce international/2013/projet regional.pdf",
        },
      ],
      "2014": [
        {
          title: " ETUDE SUR LES MECANISMES INNOVANTS POUR LE FINANCEMENT DU DEVELOPPEMENT REGIONAL DE LA CEDEAO",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/commerce international/2014/dynamique de la dette.pdf",
        },
             {
          title: "REVUE DES DEPENSES PUBLIQUES AGRICOLES (SOMMAIRE)",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/commerce international/2014/etude sur le mecanisme.pdf",
        },
      ],
      "2015": [
        {
          title: "ANALYSE DIAGNOSTIQUE DES LOYERS DE L'ETAT ET PROPOSITION D'UNE STRATEGIE DE POLITIQUE PUBLIQUE IMMOBILIERE COMPATIBLE AVEC LE CONTEXTE BUDGETAIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/commerce international/2015/determinants.pdf",
        },
      ],
      "2016": [
        {
          title: "Evaluation des régies financières en Côte d'Ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/commerce international/2016/etude des consequences.pdf",
        },
      ],
      "2017": [
        {
          title: " LES MOTEURS DE LA CROISSANCE ET L'OUVERTURE COMMERCIALE EN COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/commerce international/2017/les moteurs de la croissnaces.pdf",
        },
      ],
    },
  };

  // Gérer l'affichage des études
  const handleShowEtude = () => {
    if (selectedYear === "Sélectionnez l’année") {
      setShowEtude(false);
      setCurrentEtude([]);
      return;
    }

    const etudesForType = etudesByCategory[selectedType]?.[selectedYear] || [];
    setCurrentEtude(etudesForType);
    setShowEtude(etudesForType.length > 0);
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <MainNav />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Études commanditées Section */}
            <div className="lg:w-2/3 bg-white rounded-lg p-6 shadow-sm">
              <section className="mb-10">
                <h1 className="text-2xl font-bold text-gray-900 border-b border-orange-500 pb-2 mb-8">
                  Études commanditées
                </h1>
                <div className="h-1 w-12 bg-orange-500 mb-6"></div>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select
                        value={selectedType}
                        onChange={(e) => {
                          setSelectedType(e.target.value);
                          setSelectedYear("Sélectionnez l’année");
                          setShowEtude(false);
                        }}
                        className="w-full sm:w-96 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2"
                      >
                        {Object.keys(etudesByCategory).map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full sm:w-96 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2"
                      >
                        <option>Sélectionnez l’année</option>
                        {[...new Set(Object.keys(etudesByCategory[selectedType] || {}))].map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <Button
                        onClick={handleShowEtude}
                        className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                      >
                        Afficher
                        <Search className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                {showEtude && (
                  <section className="mt-8">
                    {currentEtude.map((etu, index) => (
                      <div key={index} className="rounded border border-gray-200 py-3 px-4 mb-4">
                        <div className="flex items-center">
                          <h5 className="text-lg font-semibold text-orange-500 mr-2">{etu.date}</h5>
                          <FileText className="w-5 h-5 mr-2 text-gray-800" />
                          <h5 className="text-lg font-semibold text-gray-800">{etu.title}</h5>
                        </div>
                        <div className="flex items-center mt-2">
                          <Image
                            src="/images/pdf.png"
                            width={30}
                            height={30}
                            className="shadow-sm"
                            alt="PDF icon"
                          />
                          <a
                            href={etu.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:underline ml-4"
                          >
                            Télécharger le pdf
                          </a>
                        </div>
                      </div>
                    ))}
                  </section>
                )}
                {/* Comptes rendus d'activités Section */}
                <section className="mt-36">
                  <div className="text-center mb-6">
                    <h5 className="text-sm font-semibold text-gray-600 uppercase mb-3">Activités</h5>
                    <h2 className="text-xl font-bold text-gray-900">Comptes rendus d'activités</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">21 Sept, 2020</h6>
                        <a
                          href="/activites/compte-rendu/conf1"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          METHODES ET TECHNIQUES MARKETING : DES CADRES DU BNETD A L'ECOLE DE LA CAPEC
                        </a>
                      
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                   
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">09 Avr, 2019</h6>
                        <a
                          href="/activites/compte-rendu/conf2"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril
                        </a>
                      
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">12 Juill, 2017</h6>
                        <a
                          href="/activites/compte-rendu/conf3"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          DEVELOPPEMENT INDUSTRIEL: Des cadres outillés à l'Analyse de filières et aux techniques d'élaboration et de mise en œuvre
                        </a>
                      
                      </div>
                    </div>
                  </div>
                </section>
                {/* Études list (displayed when Afficher is clicked) */}
                
              </section>
            </div>

            {/* Actualités Récentes Section */}
            <div className="lg:w-1/3 h-full bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-12">Actualités Récentes</h4>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="/activites/actualites"
                    >
                      CELEBRATION DES 30 ANS DE LA CAPEC
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">8 et 9 octobre, 2024</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="/activites/actualites"
                    >
                   REUNION DE VALIDATION DU PROJET DE VISION 2050 PAR LES EXPERT DES ETATS MEMBRES DE LA CEDAO, du 10 au 12 Septembre 2021, Accra/Ghana
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">du 10 au 12 Septembre 2021</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="/activites/actualites"
                    >
                    Conférence internationale de cloture, Abidjan du projet de recherche sur 'impacts des politiques publiques liées à la pandemie de la Covid-19 sur les entreprises, les femmes et les jeunes: cas du Burkina  Faso, Cameroun, Cote d'Ivoire et du Sénégal
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600"> 23 Mars 2023</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}