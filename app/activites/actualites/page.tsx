import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainNav } from "@/components/main-nav";
import { title } from "process";
import { sortNewsByDate } from "@/lib/utils";

export default function NewsPage() {
  // Triez la liste des actualités
  const sortedNewsList = sortNewsByDate(newsList);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Actualités
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Restez informés des derniers événements, annonces et activités de la
            CAPEC.
          </p>
        </div>

        {/* Featured News */}
        <div className="mt-10">
          {/* <Card className="overflow-hidden border-l-4 border-l-ci-orange">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src="/images/12.jpg?text=Conférence+Internationale+CAPEC&height=500&width=800"
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-12">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{featuredNews.title}</h2>
                  <p className="text-muted-foreground text-justify">{featuredNews.excerpt}</p>
                  
                </div>
              </CardContent>
            </div>
          </Card> */}
        </div>

        {/* News List */}
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedNewsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function NewsCard({
  news,
}: {
  news: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image?: string;
  };
}) {
  return (
    <Card className="overflow-hidden mb-20">
      {news.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            width={600}
            height={340}
            className={`object-cover w-full h-full${
              news.image === "/images/converted_img7.png" ? " object-top" : ""
            }`}
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{news.date}</span>
          </div>
          {news.id === "1" || news.id === "5" || news.id === "12" ? (
            <span className="font-bold text-black block w-fit">
              {news.title}
            </span>
          ) : (
            <Link
              href={`/activites/actualites/infos/${news.id}`}
              className="font-bold text-black hover:underline block w-fit"
            >
              {news.title}
            </Link>
          )}
          <p className="text-sm text-muted-foreground line-clamp-3 text-justify">
            {news.excerpt}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data with updated image placeholders
// const newsList = {
//   id: "1",
//   title: "30e anniversaire de la CAPEC",
//   excerpt:
//     "Les 8 et 9 octobre 2024, la CAPEC a célébrée ses 30 ans d'existence à Abidjan. L'événement, placé sous le haut patronage du Vice-Président de la République, Tiémoko Meyliet Koné, a été l'occasion de faire le bilan des contributions de la CAPEC à la transformation structurelle de la Côte d'Ivoire et à l'intégration sous-régionale entre 1993 et 2023.",
//   date: "Publié le 8 et 9 octobre 2024",
// }

const newsList = [
  {
    id: "30",
    title:
      "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC",
    excerpt: "",
    date: "21 septembre 2020",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "29",
    title:
      "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
    excerpt: "",
    date: "1 au 5 avril 2019",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "28",
    title:
      "Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre",
    excerpt: "",
    date: "12 juillet 2017",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "27",
    title: "Planification, Programmation, Budgétisation et Suivi-Evaluation",
    excerpt: "",
    date: "30 juin 2016",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "26",
    title:
      "ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation",
    excerpt: "",
    date: "6 mai 2016",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "25",
    title:
      "Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement",
    excerpt: "",
    date: "26 juin 2015",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "24",
    title: "Projet KAIZEN en Côte d’Ivoire",
    excerpt: "",
    date: "",
    image: "/images/photo/Projet_KAIZEN.jpg",
  },
  {
    id: "23",
    title:
      "Trois nouveaux Docteurs en Sciences Économiques formés au sein de la Cellule d’Analyse de Politiques Économiques du CIRES",
    excerpt: "",
    date: "",
    image: "/images/Capec_logo_image.jpg",
  },
  {
    id: "22",
    title:
      "Le Dr Prof. Alban AHOURÉ élu Membre Honoraire de l’Académie Royale Européenne des Docteurs (RAED)",
    excerpt: "",
    date: "Le 17 janvier 2024 ",
    image: "/images/photo/ingreso-RAED-Dr-Alban-Ahoure-21.jpg",
  },
  {
    id: "21",
    title:
      "Visite du Professeur Esther Duflo, Prix Nobel d’Économie 2019, à la CAPEC",
    excerpt: "",
    date: "Le 16 janvier 2024 ",
    image: "/images/photo/VISITE_D_esther_DUFLO.jpg",
  },
  {
    id: "20",
    title: "Séminaire de rentrée 2024 : Cap sur de nouveaux objectifs !",
    excerpt: "",
    date: "Le 11 au 13 janvier 2024",
    image: "/images/photo/seminaire_rentree_2024.jpg",
  },
  {
    id: "19",
    title:
      "Lancement du projet SPIA en Côte d’Ivoire : une nouvelle dynamique pour l’agriculture ivoirienne le 15 mai 2025",
    excerpt: "",
    date: "Le 15 mai 2025 ",
    image: "/images/Atelier.jpg",
  },

  {
    id: "18",
    title:
      "Le Professeur Alban AHOURÉ, Directeur de la CAPEC, a été nominé à la 6ᵉ édition du Who's Who in Côte d'Ivoire, un événement annuel honorant l'excellence ivoirienne dans divers secteurs.",
    excerpt: "",
    date: "le 3 décembre 2024 ",
    image: "/images/photo/converted_img_j.png",
  },

  {
    id: "16",
    title:
      "Le Forum EPA, organisé en partenariat avec l’ACED, s’est tenu à Abidjan les 6 et 7 novembre 2024. Cet événement majeur a réuni des acteurs clés du développement issus de divers horizons pour réfléchir ensemble aux voies d’un développement inclusif en Afrique francophone.",
    excerpt: "",
    date: "6 et 7 novembre 2024",
    image: "/images/photo/converted_img_c.png",
  },
  {
    id: "12",
    title: "panel de haut niveau Lors de la celebration des 30 ans de la CAPEC",
    excerpt: "",
    date: "8 octobre 2024",
    image: "/images/converted_img7.png",
  },
  {
    id: "17",
    title:
      "l’Université Félix Houphouët-Boigny de Cocody a accueilli la Conférence Internationale Japan Corner - JICA - CAPEC sur le thème : « Faire progresser l’industrialisation et améliorer la productivité du travail : une voie pour le développement de l’économie ivoirienne ».",
    excerpt: "",
    date: "Le 22 février 2024",
    image: "/images/japan.jpg",
  },
  {
    id: "1",
    title: "30e anniversaire de la CAPEC",
    excerpt: "",
    date: "Publié le 8 et 9 octobre 2024",
    image:
      "/images/12.jpg?text=Conférence+Internationale+CAPEC&height=500&width=800",
  },
  {
    id: "6",
    title:
      "9ème édition Africa Think Tanks… ACBF 08 au 10 Novembre 2023, Lusaka/ZAMBIE.",
    excerpt: "",
    date: " 08 au 10 Novembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ACBF.jpeg",
  },
  {
    id: "15",
    title:
      "Reunion du Comité indépendant de lecture et 4ème réunion du Comité de pilotage de l'Etude relative a l'Elaboration de la vision 2040 de l'UEMOA, 10 au 16 septembre 2023 –Ouagadougou/Burkina Faso",
    excerpt: "",
    date: "10 au 16 septembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ReunionComite.jpg",
  },
  {
    id: "7",
    title:
      "Cérémonie d'ouverture officiel du JAPAN CORNER de l'UFHB - 1er Juin 2023",
    excerpt: "",
    date: "Publié le 1er Juin 2023",
    image: "/images/TOUTES LES ACTUALITES/Ceremonie.jpg",
  },
  {
    id: "9",
    title:
      "Conférence internationale de cloture, Abidjan du projet de recherche sur l'impacts des politiques publiques liées à la pandemie de la Covid-19 sur les entreprises, les femmes et les jeunes: cas du Burkina  Faso, Cameroun, Cote d'Ivoire et du Sénégal'",
    excerpt: "",
    date: "jeudi 23 Mars 2023",
    image: "/images/TOUTES LES ACTUALITES/Conferenceinternationale.jpg",
  },
  {
    id: "5",
    title:
      "4ème Edition des Conférences internationales  sur les Etudes Japonaises 09 fev 23 ",
    excerpt: "",
    date: "09 Février 2023",
    image: "/images/TOUTES LES ACTUALITES/conference.jpg",
  },
  {
    id: "13",
    title:
      "Restitution des 03 études sur «La problématique du changement du taux de l’impôt BIC » , « La rationalisation du code des investissements ».Abidjan, 02 Février 2023",
    excerpt: "",
    date: "02 Février 2023",
    image: "/images/TOUTES LES ACTUALITES/RESTITUTION BUDGET.jpg",
  },
  {
    id: "8",
    title:
      "Conférence de cloture du Projet de Recherche PEP sur l'impact socio-economique des jeunes vulnérables en Cote d'Ivoire, Abidjan, 21 Oct 2021",
    excerpt: "",
    date: "Publié le 21 Octobre 2021",
    image: "/images/conferencedecloture.jpeg",
  },
  {
    id: "14",
    title:
      "Réunion de validation du projet de vision 2050 par les expert des etats membres de la CEDAO, du 10 au 12 Septembre 2021, Accra/Ghana",
    excerpt: "",
    date: "du 10 au 12 Septembre 2021",
    image:
      "/images/TOUTES LES ACTUALITES/REUNION DE VALIDATION DU PROJET DE VISION.jpg",
  },
  {
    id: "11",
    title:
      "Cérémonie de lancement du Projet de recherche sur «Impact des programmes socio-éducatifs communautaires d’encadrement de la petite enfance sur l’autonomisation des femmes dans les zones défavorisées sur Burkina Faso et de la Côte d’Ivoire » Abidjan 22 juillet 2021",
    excerpt: "",
    date: " 22 juillet 2021",
    image: "/images/converted_img6.png",
  },
];
