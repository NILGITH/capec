"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

interface Etude {
  titleKey: string;
  dateKey: string;
  pdfLink: string;
}

export default function EtudePage() {
  const t = useTranslations("etudesPage");

  // --- données traduisables: titleKey / dateKey ---
  const etudesByCategory: Record<string, Record<string, Etude[]>> = {
    "analyseImpact": {
      "2020": [
        {
          titleKey: "etudes.study_crime.title",
          dateKey: "etudes.study_crime.date",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2020/crime self.pdf",
        },
      ],
      "2018": [
        {
          titleKey: "etudes.study_investissements.title",
          dateKey: "etudes.study_investissements.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2018/etude impact des investissements.pdf",
        },
      ],
      "2017": [
        {
          titleKey: "etudes.study_sida.title",
          dateKey: "etudes.study_sida.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2017/impact sanitaire.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study_radios.title",
          dateKey: "etudes.study_radios.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2016/etude impact des radios.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study_banqueafrique.title",
          dateKey: "etudes.study_banqueafrique.date",
          pdfLink:
            "/images/ETUDE PDF/Analyse d'impact/2015/etude impact.pdf",
        },
      ],
    },

    "institutionGouvernance": {
      "2017": [
        {
          titleKey: "etudes.study_gov_2017.title",
          dateKey: "etudes.study_gov_2017.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2017/rapport.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study_emergence.title",
          dateKey: "etudes.study_emergence.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2016/EMERGENCE.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study_indicateurs.title",
          dateKey: "etudes.study_indicateurs.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2015/INDICATEUR.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study_gouvernance_2014.title",
          dateKey: "etudes.study_gouvernance_2014.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2014/GOUVERNANCE.pdf",
        },
      ],
      "2013": [
        {
          titleKey: "etudes.study_strategie2013.title",
          dateKey: "etudes.study_strategie2013.date",
          pdfLink:
            "/images/ETUDE PDF/Institution et gouvernance/2013/STRACTEGIE AMELIORATION.pdf",
        },
      ],
    },

    "transformation": {
      "2017": [
        {
          titleKey: "etudes.study_sndpp.title",
          dateKey: "etudes.study_sndpp.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2017/stractegie nationale.pdf",
        },
      ],
      "2015": [
        {
          titleKey: "etudes.study_profilPays.title",
          dateKey: "etudes.study_profilPays.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2015/profil pays.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study_emergenceHD.title",
          dateKey: "etudes.study_emergenceHD.date",
          pdfLink:
            "/images/ETUDE PDF/Transformation structurelle/2014/emergence et developpemnt.pdf",
        },
      ],
    },

    // ... tu peux ajouter les autres catégories de la même façon ...
    "finance": {
      "2017": [
        {
          titleKey: "etudes.study_snds.title",
          dateKey: "etudes.study_snds.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2017/elaboration.pdf",
        },
      ],
      "2016": [
        {
          titleKey: "etudes.study_revue_depenses.title",
          dateKey: "etudes.study_revue_depenses.date",
          pdfLink:
            "/images/ETUDE PDF/finance publique/2016/revue des depenses.pdf",
        },
      ],
    },

    "commerce": {
      "2013": [
        {
          titleKey: "etudes.study_politique_commerciale.title",
          dateKey: "etudes.study_politique_commerciale.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2013/politique commerciale.pdf",
        },
        {
          titleKey: "etudes.study_tobacco.title",
          dateKey: "etudes.study_tobacco.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2013/projet regional.pdf",
        },
      ],
      "2014": [
        {
          titleKey: "etudes.study_financement_ceo.title",
          dateKey: "etudes.study_financement_ceo.date",
          pdfLink:
            "/images/ETUDE PDF/commerce international/2014/dynamique de la dette.pdf",
        },
      ],
    },
  };

  // mapping pour afficher le libellé traduisable des catégories dans le select
  const CATEGORY_LABEL_KEY: Record<string, string> = {
    analyseImpact: "ui.categories.analyseImpact",
    institutionGouvernance: "ui.categories.institution",
    transformation: "ui.categories.transformation",
    finance: "ui.categories.finance",
    commerce: "ui.categories.commerce",
  };

  // états UI
  const categoryKeys = Object.keys(etudesByCategory);
  const [selectedType, setSelectedType] = useState<string>(categoryKeys[0]);
  const [selectedYear, setSelectedYear] = useState<string>(t("ui.selectYear"));
  const [showEtude, setShowEtude] = useState<boolean>(false);
  const [currentEtude, setCurrentEtude] = useState<Etude[]>([]);

  const yearsForSelectedType = useMemo(() => {
    const years = Object.keys(etudesByCategory[selectedType] || {});
    years.sort((a, b) => Number(b) - Number(a));
    return years;
  }, [selectedType]);

  const handleShowEtude = () => {
    if (!selectedYear || selectedYear === t("ui.selectYear")) {
      setShowEtude(false);
      setCurrentEtude([]);
      return;
    }
    const etudes = etudesByCategory[selectedType]?.[selectedYear] || [];
    setCurrentEtude(etudes);
    setShowEtude(etudes.length > 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-card text-card-foreground rounded-lg p-6 shadow-sm">
              <section className="mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">{t("ui.pageTitle")}</h1>
                <p className="text-sm text-muted-foreground mb-4">{t("ui.pageSubtitle")}</p>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select
                        value={selectedType}
                        onChange={(e) => {
                          setSelectedType(e.target.value);
                          setSelectedYear(t("ui.selectYear"));
                          setShowEtude(false);
                        }}
                        className="w-full sm:w-96 border border-gray-300 rounded-md text-gray-600 p-2"
                      >
                        {Object.keys(etudesByCategory).map((key) => (
                          <option key={key} value={key}>
                            {CATEGORY_LABEL_KEY[key] ? t(CATEGORY_LABEL_KEY[key]) : key}
                          </option>
                        ))}
                      </select>

                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full sm:w-64 border border-gray-300 rounded-md text-gray-600 p-2"
                      >
                        <option>{t("ui.selectYear")}</option>
                        {yearsForSelectedType.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>

                      <Button onClick={handleShowEtude} className="bg-orange-500 text-white px-6 py-2 rounded-lg">
                        {t("ui.show")}
                        <Search className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {showEtude && (
                  <section className="mt-8">
                    {currentEtude.length === 0 && <div className="text-muted-foreground">{t("ui.noResults")}</div>}
                    {currentEtude.map((etu, idx) => (
                      <div key={idx} className="rounded border border-gray-200 py-3 px-4 mb-4">
                        <div className="flex items-center">
                          <h5 className="text-lg font-semibold text-orange-500 mr-2">{t(etu.dateKey)}</h5>
                          <FileText className="w-5 h-5 mr-2 text-gray-800" />
                          <h5 className="text-lg font-semibold text-gray-800">{t(etu.titleKey)}</h5>
                        </div>
                        <div className="flex items-center mt-2">
                          <Image src="/images/pdf.png" width={30} height={30} alt="pdf" />
                          <a href={etu.pdfLink} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline ml-4">
                            {t("ui.downloadPdf")}
                          </a>
                        </div>
                      </div>
                    ))}
                  </section>
                )}
              </section>
            </div>

            <aside className="lg:w-1/3">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4">{t("ui.recentNews")}</h4>

                <div className="space-y-4">
                  <div>
                    <Link href="/activites/actualites" className="text-blue-600 hover:underline font-semibold block">
                      {t("news.news1.title")}
                    </Link>
                    <p className="text-sm text-muted-foreground">{t("news.news1.date")}</p>
                  </div>

                  <div>
                    <Link href="/activites/actualites" className="text-blue-600 hover:underline font-semibold block">
                      {t("news.news2.title")}
                    </Link>
                    <p className="text-sm text-muted-foreground">{t("news.news2.date")}</p>
                  </div>

                  <div>
                    <Link href="/activites/actualites" className="text-blue-600 hover:underline font-semibold block">
                      {t("news.news3.title")}
                    </Link>
                    <p className="text-sm text-muted-foreground">{t("news.news3.date")}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
