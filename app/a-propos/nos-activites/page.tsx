"use client"
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  Calendar,
  BookOpen,
  Globe,
  BarChart,
} from "lucide-react";
import { MainNav } from "@/components/main-nav";

export default function NosActivitesPage() {
  // Data for activity cards
  const activities = [
    {
      icon: <FileText className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Projet de recherche",
      description:
        "Lien entre extremiste violent et activités illicites dans la région du folon ",
      imageSrc:
        "/images/Nos_activités/LIEN_ENTRE_EXTREMISME_VIOLENT_ET_ACTIVITES_ILLICITES_DANS_LA_REGION_DU_FOLON.jpeg",
      alt: "Recherche économique",
    },
    {
      icon: <Users className="h-6 w-6 text-ci-green" />,
      bgColor: "bg-green-100",
      title: "Formation",
      description:
        " Séminaire de formation des agents de la DGI",
      imageSrc: "/images/Nos_activités/Formation_Agent_DGI.jpg",
      alt: "Formation académique",
    },
    {
      icon: <Calendar className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Etude",
      description:
        "l'Elaboration  de l'etude de la SMRT",
      imageSrc: "/images/Nos_activités/Elaboration_de_la_SRMT.jpeg",
      alt: "Conseil stratégique",
    },
    {
      icon: <Globe className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Conférences",
      description:
        "Conference international JAPAN CORNER-JICA-CAPEC 2024 ",
      imageSrc:
        "/images/japanconferencecapec.jpg",
      alt: "Conférences économiques",
    },
  ];

  // Data for calendar events
  const calendarEvents = [
    {
      title: "Conférence JAPAN CORNER- JICA -CAPEC 2024",
      date: "4 Mars 2024",
      description:
        "Faire progresser l'industrialisation et améliorer la productivité du travail:une voie pour le développement de l'économie ivoirienne  ",
    },
    {
      title: "Formation des agents de la DGI",
      date: "Mars 2025",
      description:
        "Formation avancée sur les techniques économétriques.",
    },
  
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <MainNav />

      {/* Hero Section */}
      <section className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="text-center mb-8 mt-0 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-4xl text-gray-900">
            Nos Activités
          </h1>
          <div className="w-24 h-1 bg-ci-orange mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:text-xl">
            Découvrez les principales activités de la CAPEC, de la recherche à la
            formation en passant par le conseil et la diffusion des connaissances.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid gap-8 mt-18 space-x-4sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <div
                  className={`p-3 rounded-full ${activity.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Agenda des Activités
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
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
                      <h3 className="font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="text-ci-orange font-medium text-sm">
                        {event.date}
                      </span>
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