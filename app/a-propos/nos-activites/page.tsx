"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Calendar, Globe } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

export default function NosActivitesPage() {
  const t = useTranslations(); // utilise common.json (namespace racine)

  const activities = [
    {
      icon: <FileText className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: t("activities.research.title"),
      description: t("activities.research.description"),
      imageSrc:
        "/images/Nos_activités/LIEN_ENTRE_EXTREMISME_VIOLENT_ET_ACTIVITES_ILLICITES_DANS_LA_REGION_DU_FOLON.jpeg",
      alt: t("activities.research.alt"),
    },
    {
      icon: <Users className="h-6 w-6 text-ci-green" />,
      bgColor: "bg-green-100",
      title: t("activities.training.title"),
      description: t("activities.training.description"),
      imageSrc: "/images/Nos_activités/Formation_Agent_DGI.jpg",
      alt: t("activities.training.alt"),
    },
    {
      icon: <Calendar className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: t("activities.study.title"),
      description: t("activities.study.description"),
      imageSrc: "/images/Nos_activités/Elaboration_de_la_SRMT.jpeg",
      alt: t("activities.study.alt"),
    },
    {
      icon: <Globe className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: t("activities.conference.title"),
      description: t("activities.conference.description"),
      imageSrc: "/images/japanconferencecapec.jpg",
      alt: t("activities.conference.alt"),
    },
  ];

  const calendarEvents = [
    {
      title: t("calendar.event1.title"),
      date: t("calendar.event1.date"),
      description: t("calendar.event1.description"),
    },
    {
      title: t("calendar.event2.title"),
      date: t("calendar.event2.date"),
      description: t("calendar.event2.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <section className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="text-center mb-8 mt-0 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-4xl text-gray-900">
            {t("hero.title")}
          </h1>
          <div className="w-24 h-1 bg-ci-orange mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:text-xl">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <div className={`p-3 rounded-full ${activity.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                  {activity.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>

                <div className="relative w-full h-56 mt-auto">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.alt}
                    fill
                    className="rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("calendar.title")}</h2>

          <div className="bg-card text-card-foreground p-8 rounded-xl shadow-lg">
            <div className="grid gap-8 md:grid-cols-2">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-ci-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <span className="text-ci-orange font-medium text-sm">{event.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
