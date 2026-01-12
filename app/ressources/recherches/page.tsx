"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useState, useMemo } from "react";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

interface Etude {
  titleKey: string;
  dateKey: string;
  pdfLink: string;
}

interface NewsItem {
  titleKey: string;
  dateKey: string;
  link: string;
}

export default function RecherchesPage() {
  const t = useTranslations("recherches");

  // --- Etudes organisées par catégorie -> année -> études ---
  // Chaque étude a maintenant titleKey et dateKey (resolues via next-intl)
  const etudesByCategory: { [cat: string]: { [year: string]: Etude[] } } = {
    "Analyse d'impact économique": {
      "2018": [
        {
          titleKey: "etudes.study1.title",
          dateKey: "etudes.study1.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2018/etude impact des investissements.pdf",
        },
      ],
      "2017": [
        {
          titleKey: "etudes.study2.title",
          dateKey: "etudes.study2.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2017/impact sanitaire.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study3.title",
          dateKey: "etudes.study3.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2016/etude impact des radios.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study4.title",
          dateKey: "etudes.study4.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2015/etude impact.pdf",
        },
      ],
    },

    "Institution et gouvernance": {
      "2017": [
        {
          titleKey: "etudes.study5.title",
          dateKey: "etudes.study5.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2017/rapport.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study6.title",
          dateKey: "etudes.study6.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2016/EMERGENCE.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study7.title",
          dateKey: "etudes.study7.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2015/INDICATEUR.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study8.title",
          dateKey: "etudes.study8.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2014/GOUVERNANCE.pdf",
        },
      ],
      "2013": [
        {
          titleKey: "etudes.study9.title",
          dateKey: "etudes.study9.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2013/STRACTEGIE AMELIORATION.pdf",
        },
      ],
    },

    "Transformation structurelle, croissance, développement et financement de l'économie": {
      "2017": [
        {
          titleKey: "etudes.study10.title",
          dateKey: "etudes.study10.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2017/stractegie nationale.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study11.title",
          dateKey: "etudes.study11.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2015/profil pays.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study12.title",
          dateKey: "etudes.study12.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2014/emergence et developpemnt.pdf",
        },
      ],
    },

    "Finance publique et convergence économique": {
      "2017": [
        {
          titleKey: "etudes.study13.title",
          dateKey: "etudes.study13.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2017/elaboration.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study14.title",
          dateKey: "etudes.study14.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2016/revue des depenses.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study15.title",
          dateKey: "etudes.study15.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2015/analyse diagnostique.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study16.title",
          dateKey: "etudes.study16.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2014/evaluation.pdf",
        },
      ],
    },

    "Entreprenariat et modèles d'affaire inclusifs": {
      "2016": [
        {
          titleKey: "etudes.study17.title",
          dateKey: "etudes.study17.date",
          pdfLink:
            "/images/ETUDE PDF/entrepreneuriat/2016/etude de faisabilité.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study18.title",
          dateKey: "etudes.study18.date",
          pdfLink:
            "/images/ETUDE PDF/entrepreneuriat/2015/partenariat.pdf",
        },
      ],
    },

    "Pauvrété, inégalité et rédistribution": {
      "2015": [
        {
          titleKey: "etudes.study19.title",
          dateKey: "etudes.study19.date",
          pdfLink:
            "/images/ETUDE PDF/pauvrete/partenariat.pdf",
        },
      ],
    },

    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles": {
      "2018": [
        {
          titleKey: "etudes.study20.title",
          dateKey: "etudes.study20.date",
          pdfLink:
            "/images/agriculture et nutrition/2018/examen stractegique.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study21.title",
          dateKey: "etudes.study21.date",
          pdfLink:
            "/images/agriculture et nutrition/2015/diagnostic du secteur peche.pdf",
        },
      ],
      "2012": [
        {
          titleKey: "etudes.study22.title",
          dateKey: "etudes.study22.date",
          pdfLink:
            "/images/agriculture et nutrition/2012/eau potable.pdf",
        },
      ],
    },

    "Suivi et évaluation de projet": {
      "2010": [
        {
          titleKey: "etudes.study23.title",
          dateKey: "etudes.study23.date",
          pdfLink:
            "/images/ETUDE PDF/suivi/cinquantenaire.pdf",
        },
      ],
    },

    "Modélisation économique": {
      "2019": [
        {
          titleKey: "etudes.study24.title",
          dateKey: "etudes.study24.date",
          pdfLink:
            "/images/ETUDE PDF/modélisation economique/2019/modelisation.pdf",
        },
      ],
    },

    "Commerce international": {
      "2013": [
        {
          titleKey: "etudes.study25.title",
          dateKey: "etudes.study25.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2013/politique commerciale.pdf",
        },
        {
          titleKey: "etudes.study26.title",
          dateKey: "etudes.study26.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2013/projet regional.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study27.title",
          dateKey: "etudes.study27.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2014/dynamique de la dette.pdf",
        },
        {
          titleKey: "etudes.study28.title",
          dateKey: "etudes.study28.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2014/etude sur le mecanisme.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study29.title",
          dateKey: "etudes.study29.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2015/determinants.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study30.title",
          dateKey: "etudes.study30.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2016/etude des consequences.pdf",
        },
      ],
      "2017": [
        {
          titleKey: "etudes.study31.title",
          dateKey: "etudes.study31.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2017/les moteurs de la croissnaces.pdf",
        },
      ],
    },
  };

  // --- Regroupement CRDI / PEP (réutilise les mêmes études) ---
  const allEtudes = etudesByCategory;
  const regroupedEtudesByCategory: { [k: string]: { [y: string]: Etude[] } } = {
    CRDI: Object.assign({}, ...Object.values(allEtudes)),
    PEP: Object.assign({}, ...Object.values(allEtudes)),
  };

  // --- News items (aussi traduisables) ---
  const newsItems: NewsItem[] = [
    { titleKey: "news.news1.title", dateKey: "news.news1.date", link: "/activites/actualites" },
    { titleKey: "news.news2.title", dateKey: "news.news2.date", link: "/activites/actualites" },
    { titleKey: "news.news3.title", dateKey: "news.news3.date", link: "/activites/actualites" },
  ];

  // === UI states ===
  const [selectedType, setSelectedType] = useState<string>("CRDI");
  const [selectedYear, setSelectedYear] = useState<string>(t("ui.selectYear"));
  const [showEtude, setShowEtude] = useState(false);
  const [currentEtude, setCurrentEtude] = useState<Etude[]>([]);

  const yearsForSelectedType = useMemo(() => {
    const years = Object.keys(regroupedEtudesByCategory[selectedType] || {});
    years.sort((a, b) => Number(b) - Number(a));
    return years;
  }, [selectedType, regroupedEtudesByCategory]);

  const handleShowEtude = () => {
    if (!selectedYear || selectedYear === t("ui.selectYear")) {
      setCurrentEtude([]);
      setShowEtude(false);
      return;
    }
    const etudes = regroupedEtudesByCategory[selectedType]?.[selectedYear] || [];
    setCurrentEtude(etudes);
    setShowEtude(etudes.length > 0);
  };

  // mapping categories -> translation keys (helps select)
  const CATEGORY_KEY_MAP: Record<string, string> = {
    "Analyse d'impact économique": "categories.analyseImpact",
    "Institution et gouvernance": "categories.institution",
    "Transformation structurelle, croissance, développement et financement de l'économie": "categories.transformation",
    "Finance publique et convergence économique": "categories.finance",
    "Entreprenariat et modèles d'affaire inclusifs": "categories.entrepreneuriat",
    "Pauvrété, inégalité et rédistribution": "categories.pauvrete",
    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles": "categories.agriculture",
    "Suivi et évaluation de projet": "categories.suivi",
    "Modélisation économique": "categories.modelisation",
    "Commerce international": "categories.commerce",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />

      <main className="p-6 max-w-7xl mx-auto mt-16 mb-64 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* left column */}
          <div className="lg:w-2/3">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
              <h1 className="text-2xl font-bold mb-2">{t("ui.pageTitle")}</h1>
              <p className="text-sm text-muted-foreground mb-4">{t("ui.pageSubtitle")}</p>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <select
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setSelectedYear(t("ui.selectYear"));
                    setShowEtude(false);
                  }}
                  className="w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {Object.keys(regroupedEtudesByCategory).map((type) => (
                    <option key={type} value={type}>
                      {CATEGORY_KEY_MAP[type] ? t(CATEGORY_KEY_MAP[type]) : type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>{t("ui.selectYear")}</option>
                  {yearsForSelectedType.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <Button onClick={handleShowEtude} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                  {t("ui.show")}
                </Button>
              </div>
            </div>

            {/* Studies list */}
            {showEtude && (
              <section className="mt-8">
                {currentEtude.map((etu, idx) => (
                  <div key={idx} className="rounded border border-gray-200 py-3 px-4 mb-4">
                    <div className="flex items-center">
                      <h5 className="text-lg font-semibold text-orange-500 mr-2">{t(etu.dateKey)}</h5>
                      <FileText className="w-5 h-5 mr-2 text-gray-800" />
                      <h5 className="text-lg font-semibold text-gray-800">{t(etu.titleKey)}</h5>
                    </div>
                    <div className="flex items-center mt-2">
                      <Image src="/images/pdf.png" width={32} height={40} className="shadow-sm" alt="PDF" />
                      <a href={etu.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-4">
                        {t("ui.downloadPdf")}
                      </a>
                    </div>
                  </div>
                ))}

                {currentEtude.length === 0 && <div className="text-muted-foreground">{t("ui.noResults")}</div>}
              </section>
            )}
          </div>

          {/* sidebar */}
          <aside className="lg:w-1/3">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">{t("ui.newsTitle")}</h4>

              {newsItems.map((n, i) => (
                <div key={i} className="flex py-3 border-b last:border-b-0">
                  <div>
                    <h6 className="mb-2">
                      <Link href={n.link} className="text-blue-600 hover:underline">
                        {t(n.titleKey)}
                      </Link>
                    </h6>
                    <p className="text-muted-foreground text-sm">{t(n.dateKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
