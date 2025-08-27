import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { MailIcon } from "lucide-react"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaFacebook as FacebookIcon, FaTwitter as TwitterIcon, FaLinkedin as LinkedInIcon, FaGoogle as GoogleIcon } from 'react-icons/fa';

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
              {/* Add associated researchers here if needed */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ResearcherCard({ researcher }: { researcher: any }) {
  // Liste des identifiants des chercheurs pour lesquels appliquer le zoom
  const idsToZoom = ["1", "2", "3", "4", "5"];
  const shouldZoom = idsToZoom.includes(researcher.id);
  
  const imageClass = shouldZoom
    ? "object-cover object-position-center transform scale-140"
    : "object-contain inset-0";

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white rounded-lg border border-gray-200 group">
      <div className="relative w-full h-64">
        <Image
          src={researcher.photo || "/placeholder.svg"}
          alt={researcher.name}
          fill
          className={imageClass}
        />
      </div>

      <div className="p-4 group-hover:bg-ci-orange/10 transition-colors duration-200">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-ci-orange transition-colors">
          {researcher.name}
        </h3>
        
        <p className="text-gray-600 text-sm mt-1 group-hover:text-ci-orange transition-colors">
          {researcher.title}
        </p>
        
        <div className="w-full h-px bg-gray-200 my-3"></div>
 
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

        <div className="mt-4 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full text-ci-orange border-ci-orange hover:bg-ci-orange hover:text-white">
                Voir la biographie
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px]">
              <DialogHeader className="hidden">
                <DialogTitle>{researcher.name}</DialogTitle>
                <DialogDescription>{researcher.title}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-3 gap-6 p-4">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                    <Image
                      src={researcher.photo || "/placeholder.svg"}
                      alt={researcher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{researcher.name}</h2>
                  <p className="text-md text-gray-600 mb-4">{researcher.title}</p>
                  
                  <div className="flex gap-4 mb-4">
                    {researcher.socials?.linkedin && (
                      <Link href={researcher.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="w-6 h-6 text-gray-600 hover:text-ci-orange transition-colors" />
                      </Link>
                    )}
                    {researcher.socials?.twitter && (
                      <Link href={researcher.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className="w-6 h-6 text-gray-600 hover:text-ci-orange transition-colors" />
                      </Link>
                    )}
                    {researcher.socials?.email && (
                      <Link href={`mailto:${researcher.socials.email}`}>
                        <MailIcon className="w-6 h-6 text-gray-600 hover:text-ci-orange transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Biographie</h3>
                  <div className="prose prose-sm max-w-none text-gray-700 max-h-[50vh] overflow-y-auto scrollbar-thin">
                    <p className="whitespace-pre-line leading-relaxed">
                      {researcher.bio}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
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
    expertise: ["Économie", "Gestion", "Politiques publiques"],
    bio: "Biographie de Prof AHOURE ALBAN ALPHONSE EMMANUEL.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
  {
    id: "2",
    name: "Prof KIMOU Assi Jose Carlos",
    title: "Directeur Adjoint de la CAPEC",
    photo: "/images/chercheurs/directeuradjointdelacapec.jpg",
    expertise: ["Macroéconomie", "Développement", "Analyse économique"],
    bio: "Biographie de Prof KIMOU Assi Jose Carlos.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
  {
    id: "3",
    name: "Dr KRAMO Kouakou Germain",
    title: "Chercheur- Responsable de la Gestion administrative",
    photo: "/images/chercheurs/chercheurresponsabledelagestionadministrative.jpg?text=Dr.+Jean+Touré&height=100&width=300",
    expertise: ["Administration", "Gestion", "Organisation"],
    bio: `KRAMO Kouakou Germain est titulaire d’un Doctorat en économie. Il est Chercheur à la Cellule d’Analyse de Politiques Economiques du CIRES (CAPEC) où il a coordonné ou contribué à la mise en œuvre de plusieurs projets et études portant sur l’économie ivoirienne et d’autres pays africains. Il totalise une dizaine d’années dans le domaine de la recherche sur les questions économiques. Dr KRAMO est le Responsable de la Gestion Administrative de la CAPEC. Maître Assistant, il est également un Enseignant-Chercheur à la Faculté des Sciences Economiques et de Gestion de l’Université Félix Houphouët-Boigny. Macroéconomiste, ses domaines d’intérêt et de recherche sont :
- Finances publiques ;
- Commerce internationale ; 
- Intégration économique ;
- Droits de propriété intellectuelle ;
- Productivité`,
  },
  {
    id: "4",
    name: "Dr BECHO-N’DRI Isabelle",
    title: "Chercheuse à la Cellule d’Analyse de politique economique du CIRES (CAPEC)",
    photo: "/images/chercheurs/Dr BECHO .jpg?text=Dr.+Jean+Touré&height=100&width=300",
    expertise: ["Microéconomie", "Analyse des données"],
    bio: "BECHO Isabelle epse N’DRI est une économiste titulaire d'un doctorat en économie de l'Université Félix Houphouët-Boigny de Cocody, ainsi que d'un diplôme de Microprogramme in Applied Development Economics de l'Université Laval. Elle est enseignante-Chercheure à l'Université Virtuelle de Côte d'Ivoire (UVCI) et chercheuse à la Cellule d’Analyse de Politique Economique du CIRES (CAPEC).Ses domaines d'expertise englobent l'évaluation d'impact des politiques publiques, l'analyse de la pauvreté, l'analyse de la vulnérabilité, l’économie politique et la gouvernance, , l'analyse de genre, , l'analyse des entreprises, l'analyse du secteur informel, la finance inclusive, la microfinance, l'économie du développement, les techniques quantitatives et qualitatives, ainsi que le traitement et l'analyse de données.Isabelle s'est distinguée par son engagement sur des projets touchant aux questions de genre, de vulnérabilité, et d'extrémisme violent. Elle a collaboré avec ONUFEMMES pour évaluer les opportunités pour les femmes dans les opérations de paix des Nations Unies en Côte d’Ivoire. Dans ce cadre, elle a conçu et coordonné des études sur l'impact des politiques de sécurité sur l'autonomisation des femmes.En partenariat avec l'USAID, elle a conduit des recherches approfondies sur les impacts des politiques publiques liées à la pandémie de la COVID-19 sur les femmes et les jeunes en Afrique de l'Ouest, et a également travaillé sur l'analyse des vulnérabilités socio-économiques dans des contextes de post-conflit, notamment en Côte d'Ivoire. Isabelle a également été consultante pour Equal Access, où elle a contribué à des projets visant à réduire l'extrémisme violent à travers l'inclusion économique et sociale des jeunes.Forte d'une expérience solide en formation et enseignement, Isabelle dispense des cours en microéconomie, analyse des données, et méthodologies de recherche à des étudiants de divers niveaux académiques, ainsi qu'à des professionnels du secteur public et privé.Isabelle est membre de plusieurs associations scientifiques, dont l'Association Internationale des Chercheurs Francophones en Microfinance (AICFM) et l'Association des Femmes Chercheures de Côte d'Ivoire (AFEMCI). Lauréate du prix d'Excellence Evaluation d’OR en 2017, elle continue d'allier rigueur scientifique et engagement pour le développement socio-économique, avec une attention particulière aux enjeux de genre et de vulnérabilité.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "isabebecho@gmail.com"
    }
  },
  {
    id: "5",
    name: "Prof BEKE Tite E.",
    title: "Economiste de l’Environnement et Chercheur Senior à la CAPEC.",
    photo: "/images/chercheurs/converted_img1.png",
    expertise: ["Economie"],
    bio: "M. BEKE Tite Ehuitché est Maître de Conférences Agrégé à l’Unité de Formation et de Recherches (UFR) des Sciences Economiques et de Gestion de l’Université FHB d’Abidjan. Il est titulaire d'un Ph.D en Economie de l’Environnement et Chercheur Senior à la CAPEC.Ses publications scientifiques et ses rapports d’étude s’inscrivent dans les thématiques relatives à l’analyse des chaînes de valeur agricoles résilientes face au changement climatique, à la sécurité alimentaire, à l’économie verte, à la transition écologique juste et aux emplois verts.Il est également membre de l’équipe opérationnelle GJAM (Green Jobs Assessment Model) et de l’équipe T21-Côte d’Ivoire.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "traore.nohoua@capec-ci.org"
    }
  },
  {
    id: "6",
    name: "Dr TRAORE Nohoua",
    title: "Economiste Chercheur à la Cellule d'Analyse de Politiques Économiques du Cires (CAPEC). ",
    photo: "/images/chercheurs/converted_img5.png",
    expertise: ["Economie"],
    bio: "Dr TRAORE Nohoua est titulaire d'un Doctorat en Économie du Développement à Université Félix Houphouët Boigny et d’un Diplôme d’Etudes Supérieures Professionnelles en Gestion des Projets. Il est actuellement Maître Assistant à l'Université Alassane Ouattara et Economiste Chercheur à la Cellule d'Analyse de Politiques Économiques  du  Cires (CAPEC).Dr Traoré a contribué à la réalisation de plusieurs projets de recherche internationaux financés par le CRDI, traitant de la performance des entreprises en Afrique Subsaharienne Francophone, l’inclusion économique des jeunes et des femmes, l’entrepreneuriat inclusif et les impacts de la Covid-19. Aussi, sa contribution aux études nationales ont trait, à l’encadrement du secteur informel, la taxation des produits du tabac, le statut de l’entreprenant, l’optimisation et exonération fiscale, la privatisation des entreprises, la compétitivité du secteur privé etc. Par ailleurs, en tant que formateur l’économiste a contribué à la formation  des cadres de l’administration fiscale d’Afrique francophone, sur les méthodes de recherche appliquées à la fiscalité, pour le compte de African Tax Administration Forum (ATAF) en 2019 à Nairobi et en 2023 à Pretoria. En plus, le chercheur capitalise plusieurs publications dans des revues internationales dont Région et Développement, Journal of Academy of Business and Economics et Journal of Applied Business and Economics. Aussi, il est Membre du comité scientifique de African Tax Research Network et  de  Sustainability, Research & Innovation Network.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "traore.nohoua@capec-ci.org"
    }
  },
  {
    id: "7",
    name: "Dr ASSOUM Féissal",
    title: "Chercheur et Economiste du développement à la (CAPEC)",
    photo: "/images/chercheurs/Dr ASSOUM Féissal.jpg",
    expertise: ["Economie"],
    bio: "Titulaire d'un doctorat en économie de l’École Nationale de Statistique et d’Économie Appliquée (ENSEA) d'Abidjan, avec une solide formation en statistiques et mathématiques, je suis économiste du développement et chercheur à la Cellule d’Analyse des Politiques Économiques du CIRES (CAPEC), où je suis également responsable de la gestion des données. Cette double expertise en économie et en statistique me permet de combiner rigueur analytique et maîtrise technique pour mener des recherches économiques appliquées. Mes travaux portent principalement sur des questions de stabilité financière, de dette publique, de transformation structurelle et d’évaluation des politiques publiques, en utilisant des méthodes économétriques avancées pour fournir des analyses robustes et orientées vers la prise de décision.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
  {
    id: "8",
    name: "Dr KOUADIO Boniface",
    title: "Chercheur à la Cellule d’Analyse de politique economique du CIRES (CAPEC)",
    photo: "/images/chercheurs/Dr KOUADIO BONI.jpg",
    expertise: ["Microéconomie", "Analyse des données", "méthodologie"],
    bio: `Dr KOUADIO est titulaire d’un doctorat en sciences économiques obtenu à l’Université Félix Houphouët-Boigny de Cocody. Enseignant-chercheur au sein de cette même université, il est également chercheur à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC).Fort d’une dizaine d’années d’expérience dans la conduite de travaux de recherche et d’études, il a réalisé de nombreuses études tant pour des institutions internationales que pour des structures locales, en tant que consultant.Au sein de la CAPEC, il a activement contribué à la mise en œuvre de plusieurs projets de recherche, dans lesquels il a successivement occupé les fonctions d’assistant de recherche puis de chercheur associé.Dr KOUADIO est membre du réseau AfricaLics (African Network for Economics of Learning, Innovation, and Competence Building Systems).Ses intérêts de recherche portent principalement sur l’économie du développement, avec un accent particulier sur les domaines suivants :
- Théorie économique (microéconomie et macroéconomie) ;
- Management de l’innovation, économie des firmes, économie de la connaissance, économie numérique ;
- Économie des transports (réformes, formulation de politiques et planification du secteur), économie circulaire ;
- Techniques quantitatives : statistiques et mathématiques appliquées, économétrie.`,
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
  {
    id: "9",
    name: "Dr KACOU Yves Thierry Kacou",
    title: "Chercheur junior macroéconomiste à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC)",
    photo: "/images/chercheurs/Dr KACOU.png?text=Dr.+Jean+Touré&",
    expertise: ["Macroéconomie"],
    bio: `Kacou Yves Thierry Kacou est titulaire d’un PhD en économie obtenu à l’Université d’Ulsan en Corée du Sud. Il est enseignant-chercheur à l’Institut National Polytechnique Houphouët-Boigny (INPHB) de Yamoussoukro et chercheur junior macroéconomiste à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC). Dans le cadre de ses missions au sein de la CAPEC, il a contribué de manière significative à la réalisation d’études portant sur la politique fiscale, la modélisation économique et l’analyse prospective. En tant que chercheur, Kacou Yves a publié, en collaboration avec d’autres chercheurs, plusieurs articles scientifiques dans des revues à comité de lecture. Ces travaux récents portent sur le développement d’un modèle d’équilibre général dynamique stochastique multisectoriel pour l’économie ivoirienne. Ils explorent également les implications macroéconomiques des retards de mise en œuvre des projets d’infrastructure, ainsi que les impacts économiques et financiers de l’adaptation aux risques climatiques pour les pays de l’UEMOA. Enfin, ses domaines d’intérêt incluent l’impact des politiques publiques, l’économétrie appliquée et la modélisation macroéconomique.`,
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
  {
    id: "11",
    name: "Dr TOURÉ Talnan Aboulaye",
    title: "Chercheur junior macroéconomiste à la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC)",
    photo: "/images/chercheurs/PHOTO TOURE.jpg",
    expertise: ["l’économie monétaire, bancaire et financière","la politique fiscale"],
    bio: "Touré Talnan Aboulaye est depuis septembre 2023, enseignant-chercheur d’économie, à l’Institut National Polytechnique Félix Houphouët-Boigny (INP-HB) de Yamoussoukro et chercheur junior macroéconomiste à la Cellule d’Analyse des Politiques Économiques du CIRES (CAPEC). Depuis, j’ai contribué à l’élaboration de plusieurs études, notamment les défis de la compétitivité de l’économie ivoirienne, l’impact de la hausse du prix de l’électricité sur l’économie ivoirienne (policy brief), la stratégie nationale de mobilisation des ressources à court et moyen termes (SNRMT), l’évaluation de l’impact socio-économique des mesures d’exonération en vue de la rationalisation de la dépense fiscale, et l’évaluation de l’impact de mesures fiscales, en particulier le changement de l’impôt sur les bénéfices industriels et commerciaux (BIC). Je suis par ailleurs, titulaire d'un PhD en économie, diplômé de l'Université de Kobe au Japon. Mon champ d’intérêt est l’économie monétaire, bancaire et financière, et la politique fiscale.",
    socials: {
      linkedin: "https://www.linkedin.com/in/yves-thierry-kacou-phd-462a69145",
      twitter: "#",
      email: "kacou.yves@cires-ci.org"
    }
  },
]

const allResearchers = [...seniorResearchers]