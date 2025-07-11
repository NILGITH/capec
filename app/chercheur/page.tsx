import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MailIcon, Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaFacebook as FacebookIcon, FaTwitter as TwitterIcon, FaLinkedin as LinkedInIcon, FaGoogle as GoogleIcon } from 'react-icons/fa';
import { MainNav } from "@/components/main-nav"

export default function ChercheurPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Chercheurs</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez l'équipe de chercheurs de la CAPEC, leurs domaines d'expertise et leurs publications.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="senior" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="associes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ajoutez ici les chercheurs associés si nécessaire */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ResearcherCard({ researcher }: { researcher: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white rounded-lg border border-gray-200 group">
      {/* Photo en haut */}
      <div className="relative w-full h-64">
        <Image
          src={researcher.photo || "/placeholder.svg"}
          alt={researcher.name}
          fill
          className="object-contain inset-0"
        />
      </div>

      {/* Bloc inférieur avec effet au survol */}
      <div className="p-4 group-hover:bg-ci-orange/10 transition-colors duration-200">
        {/* Nom - Changement de couleur au survol */}
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-ci-orange transition-colors">
          {researcher.name}
        </h3>
        
        {/* Profession */}
        <p className="text-gray-600 text-sm mt-1 group-hover:text-ci-orange transition-colors">
          {researcher.title}
        </p>
        
        {/* trait de séparation */}
        <div className="w-full h-px bg-gray-200 my-3"></div>
  
        {/* Tags expertise */}
        {researcher.expertise && researcher.expertise.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {researcher.expertise.map((exp: string, index: number) => (
              <span 
                key={`${researcher.id}-tag-${index}`} 
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 group-hover:bg-ci-orange/20 group-hover:text-ci-orange transition-colors"
              >
                {exp}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

// Sample data
const seniorResearchers = [
  {
    id: "1",
    name: "Prof AHOURE ALBAN ALPHONSE EMMANUEL",
    title: "Directeur de la CAPEC",
    photo: "/images/chercheurs/profahourealbanalphonseemmanueldirecteurdelacapec.jpg?t&height=200&width=1200&object-cover",
    expertise: ["Économie", "Gestion", "Politiques publiques"]
  },
  {
    id: "2",
    name: "Prof KIMOU Assi Jose Carlos",
    title: "Directeur Adjoint de la CAPEC",
    photo: "/images/chercheurs/directeuradjointdelacapec.jpg",
    expertise: ["Macroéconomie", "Développement", "Analyse économique"]
  },
  {
    id: "3",
    name: "Dr KRAMO Germain",
    title: "Chercheur- Responsable de la Gestion administrative",
    photo: "/images/chercheurs/chercheurresponsabledelagestionadministrative.jpg?text=Dr.+Jean+Touré&height=100&width=300",
    expertise: ["Administration", "Gestion", "Organisation"]
  },
  {
    id: "4",
    name: "Dr BECHO-N’DRI Isabelle   ",
    title: "Chercheuse à la Cellule d’Analyse de politique economique du CIRES (CAPEC)",
    photo: "/images/chercheurs/Dr BECHO .jpg?text=Dr.+Jean+Touré&height=100&width=300",
    expertise: ["Microéconomie", "Analyse des données", "méthodologie"]
  },
  {
    id: "5",
    name: "Prof BEKE Tite E.",
    title: "Economiste de l’Environnement et Chercheur Senior à la CAPEC.",
    photo: "/images/chercheurs/converted_img1.png",
    expertise: ["Economie"]
  },
  {
    id: "6",
    name: "Dr TRAORE Nohoua",
    title: "Economiste Chercheur à la Cellule d'Analyse de Politiques Économiques  du  Cires (CAPEC). ",
    photo: "/images/chercheurs/converted_img5.png",
    expertise: ["Economie"]
  },
  {
    id: "7",
    name: "Dr ASSOUM Féissal",
    title: "Chercheur et Economiste du développement à la  (CAPEC)",
    photo: "/images/chercheurs/converted_img3.png",
    expertise: ["Economie",]
  },
  {
    id: "8",
    name: "Dr KOUADIO Boniface",
    title: "Chercheur à la Cellule d’Analyse de politique economique du CIRES (CAPEC)",
    photo: "/images/chercheurs/converted_img4.png",
    expertise: ["Microéconomie", "Analyse des données", "méthodologie"]
  },
  {
    id: "9",
    name: "Dr KACOU Yves Thierry Kacou",
    title: "Chercheur junior macroéconomiste à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC)",
    photo: "/images/chercheurs/Dr KACOU.png?text=Dr.+Jean+Touré&",
    expertise: ["Macroéconomie",]
  },
 
  {
    id: "11",
    name: "Dr TOURÉ Talnan Aboulaye",
    title: "Chercheur junior macroéconomiste à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC)",
    photo: "/images/chercheurs/PHOTO TOURE.jpg",
    expertise: ["l’économie monétaire, bancaire et financière","la politique fiscale"]
  },
  

]

const allResearchers = [...seniorResearchers]