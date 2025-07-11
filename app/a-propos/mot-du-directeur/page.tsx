import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"

export default function MotDuDirecteurPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav/>
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mot du Directeur</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/dg.jpg"
                  alt="Dr. Amadou Diallo - Directeur de la CAPEC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Prof. AHOURE Alban A.E.</h3>
                <p className="text-ci-orange">Directeur de la CAPEC</p>
              
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-xl font-medium text-foreground">Chers visiteurs,</p>
            <p className="text-justify">
             C’est avec un immense plaisir que je vous souhaite la bienvenue sur le site officiel de la Cellule d’Analyse de Politiques Économiques du CIRES, (CAPEC). Cet espace numérique se veut une vitrine dynamique de notre institution, un lieu de partage, d’informations et de dialogue au service de la recherche économique appliquée et de l’aide à la décision publique.
            </p>
            <p className="text-justify">
              Depuis sa création en 1993, la CAPEC s’est positionnée comme un acteur majeur de l’analyse des politiques économiques en Côte d’Ivoire et en Afrique. Notre mission est de produire des analyses rigoureuses, basées sur des données probantes et fiables, pour éclairer les choix stratégiques des décideurs publics, des acteurs du secteur privé et de la société civile, des partenaires au développement et de l’ensemble des parties prenantes engagées dans le développement économique et social. Elle s’est positionnée comme un pont entre le monde académique et tous les acteurs du développement. 
            </p>
            <p className="text-justify">
             Ainsi, notre site internet, rénové pour l’adapter à vos besoins, est désormais le canal à privilégier pour vous tenir informés au quotidien sur nos réalisations. À travers ce site, nous vous invitons à découvrir nos travaux de recherche, nos publications, nos projets en cours, nos outils d’analyse, ainsi que nos activités de formation et de diffusion des connaissances. Je vous invite donc à visiter régulièrement notre site web afin de disposer des informations actualisées sur nos activités.
            </p>
            <p className="text-justify">
              Nous croyons fermement que la connaissance partagée est un levier puissant de transformation. C’est pourquoi la CAPEC s’engage à rester accessible, ouverte et à l’écoute des besoins de la société.
            </p>
            <p className="text-justify">
             Bonne navigation à toutes et à tous,
             et merci de votre intérêt pour notre travail.

            </p>
            <p>
             Professeur Alban AHOURE
            </p>
         
            <div className="pt-4 font-bold text-black text-lg">
             
              <p>Directeur de la CAPEC</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

