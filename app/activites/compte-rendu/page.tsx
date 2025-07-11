import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar, MapPin, Users, Download, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";

export default function CompteRenduActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 mb-10 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Comptes Rendus d'Activités
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Retrouvez les comptes rendus des activités organisés par la CAPEC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {conferences.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

     
      </div>
      <Footer />
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {/* <div className="relative aspect-video">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div> */}
      <div className="p-6 flex-grow">
        <div className="flex items-center text-sm text-ci-orange mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
     
        <div className="flex items-center justify-end">
         <Link
          className={cn(
            buttonVariants(),
            "mt-4 inline-flex items-center gap-2",
            "group relative w-full justify-center rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
          )}
          href={`/activites/compte-rendu/${event.id}`} // Utiliser une route dynamique
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
          <span>Voir détails</span>
        </Link>
        </div>
      </div>
    </Card>
  );
}

// Sample data
const conferences = [
  {
    id: "conf1",
    title: "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC", 
    date: "21 septembre 2020",
  },
  {
    id: "conf2",
    title: "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
    date: "1 au 5 avril 2019",
  },
  {
    id: "conf3",
    title: "Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre",
    date: "12 juillet 2017",
  },
  {
    id: "conf4",
    title: "Planification, Programmation, Budgétisation et Suivi-Evaluation",
    date: "30 juin 2016",
  },
   {
    id: "conf5",
    title: "ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation",
    date: "6 mai 2016",
  },
   {
    id: "conf6",
    title: "Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement",
    date: "26 juin 2015",
  },
];