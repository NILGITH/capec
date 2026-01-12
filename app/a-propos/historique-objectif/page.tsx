"use client"

import Image from "next/image"
import { Footer } from "@/components/footer"
import { Calendar, Award, BookOpen } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { useTranslations } from "next-intl"

export default function HistoriqueObjectifPage() {
  const t = useTranslations("historiqueObjectif")

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-12 mt-12">
          {/* HISTORIQUE */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 rounded-full bg-orange-100">
                <BookOpen className="h-6 w-6 text-ci-orange" />
              </div>
              <h2 className="text-2xl font-bold">{t("history.sectionTitle")}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-ci-orange shadow-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    {t("history.intro")}
                  </p>
                </div>

                <h3 className="font-bold text-xl text-ci-orange mt-8 mb-4">
                  {t("history.timelineTitle")}
                </h3>

                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-1 bg-ci-orange"></div>

                  {["phase1", "phase2", "phase3", "phase4"].map((phase, i) => (
                    <div key={phase} className="relative flex items-start mb-8">
                      <div className="flex flex-col items-center w-12">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ci-orange text-white font-bold shadow-md z-10">
                          {i + 1}
                        </div>
                      </div>

                      <div className="ml-6 flex-1 bg-card p-5 rounded-lg shadow-md border transition-transform hover:scale-105">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-ci-orange mr-2" />
                          <span className="font-bold text-ci-orange">
                            {t(`history.${phase}.period`)}
                          </span>
                        </div>
                        <h4 className="font-bold mb-2">
                          {t(`history.${phase}.title`)}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(`history.${phase}.description`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE + AUJOURD'HUI */}
              <div className="space-y-6">
                <div className="sticky top-14">
                  <div className="relative rounded-lg overflow-hidden shadow-xl mb-6">
                    <Image
                      src="/images/estherubo.jpg"
                      alt={t("history.imageAlt")}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-base font-medium">
                          {t("history.imageCaption")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-8 rounded-lg border-l-4 border-ci-green shadow-sm">
                    <h4 className="font-bold text-xl mb-3 text-ci-green">
                      {t("today.title")}
                    </h4>

                    <p className="text-base text-muted-foreground">
                      {t("today.description")}
                    </p>

                    {["point1", "point2"].map((p) => (
                      <div key={p} className="mt-4 flex items-center">
                        <Award className="h-6 w-6 text-ci-green mr-2" />
                        <p className="text-base font-medium">
                          {t(`today.${p}`)}
                        </p>
                      </div>
                    ))}

                    <p className="text-base mt-8 text-muted-foreground">
                      {t("today.conclusion")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OBJECTIFS */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 rounded-full bg-orange-100">
                <Award className="h-6 w-6 text-ci-orange" />
              </div>
              <h2 className="text-2xl font-bold">{t("objectives.title")}</h2>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    {t("objectives.generalTitle")}
                  </h3>
                  <p>{t("objectives.generalText")}</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">
                    {t("objectives.specificTitle")}
                  </h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>{t("objectives.list.1")}</li>
                    <li>{t("objectives.list.2")}</li>
                    <li>{t("objectives.list.3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
