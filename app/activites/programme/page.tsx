"use client";

import { Download } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { useTranslations } from "next-intl";

interface Program {
  id: string;
  year: string;
  pdfUrl: string;
  titleFallback: string;
}

const annualPrograms: Program[] = [
  { id: "program2024", year: "2024", pdfUrl: "/images/programme activités/activite 2024.pdf", titleFallback: "Programmes d'Activités 2024" },
  { id: "program2023", year: "2023", pdfUrl: "/images/programme activités/activite 2023.pdf", titleFallback: "Programmes d'Activités 2023" },
  { id: "program2022", year: "2022", pdfUrl: "/images/programme activités/activite 2022.pdf", titleFallback: "Programmes d'Activités 2022" },
  { id: "program2021", year: "2021", pdfUrl: "/images/programme activités/activite2021.pdf", titleFallback: "Programmes d'Activités 2021" },
  { id: "program2020", year: "2020", pdfUrl: "/images/programme activités/activite2020.pdf", titleFallback: "Programmes d'Activités 2020" },
  { id: "program2019", year: "2019", pdfUrl: "/images/programme activités/activite2019.pdf", titleFallback: "Programmes d'Activités 2019" },
  { id: "program2018", year: "2018", pdfUrl: "/images/programme activités/activite2018.pdf", titleFallback: "Programmes d'Activités 2018" },
  { id: "program2017", year: "2017", pdfUrl: "/images/programme activités/activite 2017.pdf", titleFallback: "Programmes d'Activités 2017" },
  { id: "program2016", year: "2016", pdfUrl: "/images/programme activités/activité 2016.pdf", titleFallback: "Programmes d'Activités 2016" },
  { id: "program2015", year: "2015", pdfUrl: "/images/programme activités/activité2015.pdf", titleFallback: "Programmes d'Activités 2015" },
  { id: "program2014", year: "2014", pdfUrl: "/images/programme activités/activite2014.pdf", titleFallback: "Programmes d'Activités 2014" },
  { id: "program2012", year: "2012", pdfUrl: "/images/programme activités/activite2012.pdf", titleFallback: "Programmes d'Activités 2012" },
  { id: "program2011", year: "2011", pdfUrl: "/images/programme activités/activite2011.pdf", titleFallback: "Programmes d'Activités 2011" },
  { id: "program2009", year: "2009", pdfUrl: "/images/programme activités/activite2009.pdf", titleFallback: "Programmes d'Activités 2009" },
  { id: "program2008", year: "2008", pdfUrl: "/images/programme activités/activite2008.pdf", titleFallback: "Programmes d'Activités 2008" }
];

export default function ProgrammeActivitesPage() {
  const t = useTranslations("programmes");

  const getTitle = (program: Program) => {
    const key = `data.${program.id}.title`;
    const translated = t(key);
    if (!translated || translated.includes("programmes.")) {
      return program.titleFallback;
    }
    return translated;
  };

  return (
    <>
      <MainNav />

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container px-4 py-12 md:px-6 md:py-20 flex-grow">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
              {t("title")}
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto italic">
              {t("description")}
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-300 h-full"></div>

            {annualPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-card p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {getTitle(program)}
                    </h3>
                    <p className="text-gray-500 mb-3">{program.year}</p>
                    <a
                      href={program.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t("download")}
                    </a>
                  </div>
                </div>

                <div className="w-1/2 flex justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
