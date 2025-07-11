"use client"

import { useState } from "react"
import { Eye, Expand, Shrink } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function RapportActivitePage() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  return (
    <>
      <MainNav />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container px-4 py-12 md:px-6 md:py-16 flex-grow">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Rapports d'Activité</h1>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
              Explorez les rapports d'activités de la CAPEC de 2007 à 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {annualReports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{report.title}</h3>
                <p className="text-gray-500 mb-4">{report.year}</p>
                <Dialog onOpenChange={() => setIsFullScreen(false)}>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center px-4 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition-colors">
                      <Eye className="h-4 w-4 mr-2" /> Consulter
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    className={cn(
                      "transition-all duration-300",
                      isFullScreen ? "w-screen h-screen max-w-full" : "max-w-4xl h-[80vh]"
                    )}
                  >
                    <DialogTitle className="sr-only">{report.title}</DialogTitle>
                    <div className="absolute top-4 right-12 z-10">
                      <button
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                      >
                        {isFullScreen ? <Shrink className="h-5 w-5" /> : <Expand className="h-5 w-5" />}
                      </button>
                    </div>
                    <iframe
                      src={`${report.pdfUrl}#toolbar=0`}
                      className="w-full h-full rounded-md"
                      title={report.title}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

const annualReports = [
  { id: "report2024", title: "Rapports d'Activité 2024", year: "2024", pdfUrl: "/images/rapport activite/rapport 2024.pdf" },
  { id: "report2022", title: "Rapports d'Activité 2022", year: "2022", pdfUrl: "/images/rapport activite/rapport 2022.pdf" },
  { id: "report2021", title: "Rapports d'Activité 2021", year: "2021", pdfUrl: "/images/rapport activite/rapport 2021.pdf" },
  { id: "report2020", title: "Rapports d'Activité 2020", year: "2020", pdfUrl: "/images/rapport activite/rapport 2020.pdf" },
  { id: "report2019", title: "Rapports d'Activité 2019", year: "2019", pdfUrl: "/images/rapport activite/rapport 2019.pdf" },
  { id: "report2018", title: "Rapports d'Activité 2018", year: "2018", pdfUrl: "/images/rapport activite/rapport 2018.pdf" },
  { id: "report2017", title: "Rapports d'Activité 2017", year: "2017", pdfUrl: "/images/rapport activite/rapport 2017.pdf" },
  { id: "report2016", title: "Rapports d'Activité 2016", year: "2016", pdfUrl: "/images/rapport activite/rapport 2016.pdf" },
  { id: "report2015", title: "Rapports d'Activité 2015", year: "2015", pdfUrl: "/images/rapport activite/rapport 2015.pdf" },
  { id: "report2014", title: "Rapports d'Activité 2014", year: "2014", pdfUrl: "/images/rapport activite/rapport 2014.pdf" },
  { id: "report2013", title: "Rapports d'Activité 2013", year: "2013", pdfUrl: "/images/rapport activite/rapport 2013.pdf" },
  { id: "report2012", title: "Rapports d'Activité 2012", year: "2012", pdfUrl: "/images/rapport activite/rapport 2012.pdf" },
  { id: "report2011", title: "Rapports d'Activité 2011", year: "2011", pdfUrl: "/images/rapport activite/rapport 2011.pdf" },
  { id: "report2010", title: "Rapports d'Activité 2010", year: "2010", pdfUrl: "/images/rapport activite/rapport 2010.pdf" },
  { id: "report2009", title: "Rapports d'Activité 2009", year: "2009", pdfUrl: "/images/rapport activite/rapport 2009.pdf" },
  { id: "report2008", title: "Rapports d'Activité 2008", year: "2008", pdfUrl: "/images/rapport activite/rapport 2008.pdf" },
  { id: "report2007", title: "Rapports d'Activité 2007", year: "2007", pdfUrl: "/images/rapport activite/rapport 2007.pdf" },
]