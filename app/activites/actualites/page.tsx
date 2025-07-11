import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MainNav } from "@/components/main-nav"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav/>
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Actualités</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Restez informés des derniers événements, annonces et activités de la CAPEC.
          </p>
        </div>

        {/* Featured News */}
        <div className="mt-10">
          <Card className="overflow-hidden border-l-4 border-l-ci-orange">
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
                  {/* <Link href={`/actualites/${featuredNews.id}`}>
                    <Button className="bg-ci-orange mt-5 hover:bg-orange-600 text-white">
                      Lire l'article complet
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link> */}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* News List */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Toutes les actualités</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        {/* <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span className="sr-only">Page précédente</span>
            </Button>
            <Button variant="outline" size="sm" className="font-medium bg-ci-orange text-white border-ci-orange">
              1
            </Button>
            <Button variant="outline" size="sm" className="text-muted-foreground">
              2
            </Button>
            <Button variant="outline" size="sm" className="text-muted-foreground">
              3
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Page suivante</span>
            </Button>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

function NewsCard({ news } : { news: { id: string; title: string; excerpt: string; date: string; image?: string } }) {
  return (
    <Card className="overflow-hidden mb-20">
      {news.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            width={600}
            height={340}
            className={`object-cover w-full h-full${news.image === "/images/converted_img7.png" ? " object-top" : ""}`}
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{news.date}</span>
          </div>
          <h3 className="font-bold">{news.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 text-justify">{news.excerpt}</p>
          <div className="pt-2">
            {/* <Link href={`/actualites/${news.id}`}>
              <Button variant="link" className="p-0 h-auto">
                Lire plus
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link> */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with updated image placeholders
const featuredNews = {
  id: "1",
  title: "30e anniversaire de la CAPEC",
  excerpt:
    "Les 8 et 9 octobre 2024, la CAPEC a célébrée ses 30 ans d'existence à Abidjan. L'événement, placé sous le haut patronage du Vice-Président de la République, Tiémoko Meyliet Koné, a été l'occasion de faire le bilan des contributions de la CAPEC à la transformation structurelle de la Côte d'Ivoire et à l'intégration sous-régionale entre 1993 et 2023.",
  date: "Publié le 8 et 9 octobre 2024",
}

const newsList = [
  // {
  //   id: "2",
  //   title: "CONFERENCE DE HAUT NIVEAU",
  //   excerpt:
  //     "La Banque Africaine de Développement (BAD), avec l'appui de la Cellule d'Analyse de Politiques Economiques du CIRES organise, le mardi 10 mai de 10h00 à 12h30.",
  //   date: "Publié le 06 Mai, 2022",
  //   image: "/images/conf2.jpg?text=Partenariat+Université+Paris-Saclay&height=340&width=600",
  // },
  // {
  //   id: "3",
  //   title: "La CAPEC se félicite pour la validation de la vision prospectrice 2050 de la CEDEAO.",
  //   excerpt:
  //     "A la suite de plusieurs rencontres de validation technique puis de validation par le Conseil des Ministres de la CEDEAO (le 10 décembre 2021).",
  //   date: "Publié le 21 Déc, 2021",
  //   image: "/images/actua1.jpg?text=Rapport+Annuel+Économie&height=340&width=600",
  // },
  // {
  //   id: "4",
  //   title: "RECRUTEMENT DE DEUX CHERCHEURS JUNIORS MICROECONOMISTES ET D'UN CHERCHEUR JUNIOR MACROECONOMISTE",
  //   excerpt:
  //     "Ce recrutement visait à renforcer l'équipe de recherche de la CAPEC en intégrant de jeunes talents spécialisés en microéconomie et macroéconomie.",
  //   date: "Publié le 22 Avr, 2022",
  //   image: "/images/recrutement.png?text=Séminaire+Analyse+Données&height=340&width=600",
  // },
  {
    id: "14",
    title: "Réunion de validation du projet de vision 2050 par les expert des etats membres de la CEDAO, du 10 au 12 Septembre 2021, Accra/Ghana",
    excerpt:
      "",
    date: "du 10 au 12 Septembre 2021",
    image: "/images/TOUTES LES ACTUALITES/REUNION DE VALIDATION DU PROJET DE VISION.jpg",
  },
  {
    id: "9",
    title: "Conférence internationale de cloture, Abidjan du projet de recherche sur l'impacts des politiques publiques liées à la pandemie de la Covid-19 sur les entreprises, les femmes et les jeunes: cas du Burkina  Faso, Cameroun, Cote d'Ivoire et du Sénégal'",
    excerpt:
      "",
    date: "",
    image: "/images/TOUTES LES ACTUALITES/Conferenceinternationale.jpg",
  },
  {
    id: "15",
    title: "Reunion du Comité indépendant de lecture et 4ème réunion du Comité de pilotage de l'Etude relative a l'Elaboration de la vision 2040 de l'UEMOA, 10 au 16 septembre 2023 –Ouagadougou/Burkina Faso",
    excerpt:
      "",
    date: "10 au 16 septembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ReunionComite.jpg",
  },
  {
    id: "5",
    title: "4ème Edition des Conférences internationales  sur les Etudes Japonaises 09 fev 23 ",
    excerpt:
      "",
    date: "09  fev 23",
    image: "/images/TOUTES LES ACTUALITES/conference.jpg",
  },
  {
    id: "6",
    title: "9ème édition Africa Think Tanks… ACBF 08 au 10 Novembre 2023, Lusaka/ZAMBIE.",
    excerpt:
      "",
    date: " 08 au 10 Novembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ACBF.jpeg",
  },
  {
    id: "7",
    title: "Cérémonie d'ouverture officiel du JAPAN CORNER de l'UFHB - 1er Juin 2023",
    excerpt:
      "",
    date: "Publié le 1er Juin 2023",
    image: "/images/TOUTES LES ACTUALITES/Ceremonie.jpg",
  },
  {
    id: "8",
    title: "Conférence de cloture du Projet de Recherche PEP sur l'impact socio-economique des jeunes vulnérables en Cote d'Ivoire, Abidjan, 21 Oct 2021",
    excerpt:
      "",
    date: "Publié le 21 Oct 2021",
    image: "/images/conferencedecloture.jpeg",
  },
 
  // {
  //   id: "10",
  //   title: "INAUGURATION JAPAN CORNER",
  //   excerpt:
  //     "Ce recrutement visait à renforcer l'équipe de recherche de la CAPEC en intégrant de jeunes talents spécialisés en microéconomie et macroéconomie.",
  //   date: "Publié le 22 Avr, 2022",
  //   image: "/images/TOUTES LES ACTUALITES/INAUGURATION JAPAN CORNER.jpg",
  // },
  {
    id: "11",
    title: "Cérémonie de lancement du Projet de recherche sur «Impact des programmes socio-éducatifs communautaires d’encadrement de la petite enfance sur l’autonomisation des femmes dans les zones défavorisées sur Burkina Faso et de la Côte d’Ivoire » Abidjan 22 juillet 2021",
    excerpt:
      "",
    date: " 22 juillet 2021",
    image: "/images/converted_img6.png",
  },
  {
    id: "12",
    title: "panel de haut niveau Lors de la celebration des 30 ans de la CAPEC",
    excerpt:
      "",
    date: "",
    image: "/images/converted_img7.png",
  },
  {
    id: "13",
    title: "Restitution des 03 études sur «La problématique du changement du taux de l’impôt BIC » , « La rationalisation du code des investissements ».Abidjan, 02 Février 2023",
    excerpt:
      "",
    date: "02 Février 2023",
    image: "/images/TOUTES LES ACTUALITES/RESTITUTION BUDGET.jpg",
  },


 
  
 
  
]

