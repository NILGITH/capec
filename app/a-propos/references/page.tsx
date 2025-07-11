"use client"

import Image from "next/image"

import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReferencesPage() {
  const allInstitutions = [
    ...internationalInstitutions,
    ...regionalInstitutions,
    ...nationalPublicInstitutions,
    ...privateSectorInstitutions,
    ...civilSocietyInstitutions,
   
  ]

  return (
    <div className="flex flex-col  min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 mb-64 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quelques Références</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos partenaires et collaborateurs qui nous font confiance pour nos expertises en analyse
            économique et en recherche appliquée.
          </p>
        </div>

        <Tabs defaultValue="internationales" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="internationales">Institutions Internationales</TabsTrigger>
            <TabsTrigger value="regionales">Institutions Régionales</TabsTrigger>
            <TabsTrigger value="nationales-public">Institutions Publiques</TabsTrigger>
            <TabsTrigger value="prive"> Secteur Privé</TabsTrigger>
            <TabsTrigger value="civile"> Société Civile</TabsTrigger>
          </TabsList>

          <TabsContent value="internationales" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {internationalInstitutions.map((institution) => (
                <ReferenceCard key={institution.id} reference={institution} />
              ))}
                      </div>
          </TabsContent>

          <TabsContent value="regionales" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {regionalInstitutions.map((institution) => (
                <ReferenceCard key={institution.id} reference={institution} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nationales-public" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nationalPublicInstitutions.map((institution) => (
                <ReferenceCard key={institution.id} reference={institution} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prive" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {privateSectorInstitutions.map((institution) => (
                <ReferenceCard key={institution.id} reference={institution} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="civile" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {civilSocietyInstitutions.map((institution) => (
                <ReferenceCard key={institution.id} reference={institution} />
              ))}
            </div>
          </TabsContent>

         
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ReferenceCard({ reference }: { reference: { id: string; name: string; type: string; logo?: string } }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image src={reference.logo || "/placeholder.svg"} alt={reference.name} fill className="object-contain" />
      </div>
      <h3 className="font-medium text-sm">{reference.name}</h3>
      <p className="text-xs text-muted-foreground">{reference.type}</p>
    </div>
  )
}

// Institutions Internationales
const internationalInstitutions = [
  {
    id: "ii1",
    name: "",
    type: "",
    logo: "/images/partenaires/bankmondiale.jpg",
  },
  {
    id: "ii2",
    name: "",
    type: "",
    logo: "/images/partenaires/BAD.jpg",
  },
  {
    id: "ii3",
    name: "",
    type: "",
    logo: "/images/partenaires/jica.webp",
  },
  {
    id: "ii4",
    name: "",
    type: "",
    logo: "/images/partenaires/JAPANFUNDATION.webp",
  },
  {
    id: "ii5",
    name: "",
    type: "",
    logo: "/images/partenaires/afdrouge.png",
  },
  {
    id: "ii6",
    name: "",
    type: "",
    logo: "/images/partenaires/IDRC.jpg",
  },
  {
    id: "ii7",
    name: "",
    type: "",
    logo: "/images/partenaire_de_la_CAPEC/acbflogo.jpg",
  },
  {
    id: "ii8",
    name: "",
    type: "",
    logo: "/images/partenaires/PNUD.jpg",
  },
  {
    id: "ii9",
    name: "",
    type: "",
    logo: "/images/partenaires/FAO.webp",
  },
  {
    id: "ii10",
    name: "",
    type: "",
    logo: "/images/partenaires/pam.png",
  },
  {
    id: "ii11",
    name: "",
    type: "",
    logo: "/images/partenaires/UNICEF.png",
  },
  {
    id: "ii12",
    name: "",
    type: "",
    logo: "/images/partenaires/UN-Women.png",
  },
  {
    id: "ii13",
    name: "",
    type: "",
    logo: "/images/partenaires/BCR.png",
  },
  {
    id: "ii14",
    name: "",
    type: "",
    logo: "/images/partenaires/CEA.png",
  },
]

// Institutions Régionales
const regionalInstitutions = [
  {
    id: "ir1",
    name: "",
    type: "",
    logo: "/images/partenaires/CEDEAO.webp",
  },
  {
    id: "ir2",
    name: "",
    type: "",
    logo: "/images/partenaires/UEMOA.jpg",
  },
]

// Institutions Nationales - Secteur Public
const nationalPublicInstitutions = [
  {
    id: "nps1",
    name: "Primature - Secrétaire générale de la présidence",
    type: "",
    logo: "/images/partenaires/MEC.jpg",
  },
  {
    id: "nps2",
    name: "Ministère en charge de la femme, famille et enfants",
    type: "",
    logo: "/images/partenaires/MEC.jpg",
  },
  {
    id: "nps3",
    name: "Ministère des finances et du budget",
    type: "",
    logo: "/images/partenaires/MFBCI.jpg",
  },
  {
    id: "nps4",
    name: "Ministère de l'Economie et commerce",
    type: "",
    logo: "/images/partenaires/MEC.jpg",
  },
  {
    id: "nps5",
    name: "Ministère des Mines, du Pétrole et de l’Énergie",
    type: "",
    logo: "/images/partenaires/MMPE.jpg",
  },
  {
    id: "nps6",
    name: "Ministère de la construction et de l'urbanisation",
    type: "",
    logo: "/images/partenaires/MEC.jpg",
  },
  {
    id: "nps7",
    name: "Direction générale des douanes",
    type: "",
    logo: "/images/partenaires/DOUANE.jpg",
  },
  {
    id: "nps8",
    name: "Direction générale des impôts",
    type: "",
    logo: "/images/partenaires/DGI.jpg",
  },
  {
    id: "ni1",
    name: "",
    type: "",
    logo: "/images/partenaire_de_la_CAPEC/LOGO BNETD.jpg",
  },
  {
    id: "ni2",
    name: "",
    type: "",
    logo: "/images/partenaire_de_la_CAPEC/LOGO UNIVERSITE.jpg",
  },
  {
    id: "ni3",
    name: "",
    type: "",
    logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg",
  },
  {
    id: "ni4",
    name: "",
    type: "",
    logo: "/images/partenaire_de_la_CAPEC/acbflogo.jpg",
  },
]

// Secteur Privé
const privateSectorInstitutions = [
  {
    id: "ps1",
    name: "",
    type: "",
    logo: "/images/partenaires/CGECI.jpg",
  },
  {
    id: "ps2",
    name: "",
    type: "",
    logo: "/images/partenaires/UGECI.png",
  },
]

// Société Civile
const civilSocietyInstitutions = [
  {
    id: "cs1",
    name: "",
    type: "",
    logo: "/images/partenaires/CSCI.png",
  },
]

// Sample data - Institutions existantes
// const nationalInstitutions = [
//   {
//     id: "ni1",
//     name: "Bureau national d'études techniques et de développement",
//     type: "",
//     logo: "/images/partenaire_de_la_CAPEC/LOGO BNETD.jpg",
//   },
//   {
//     id: "ni2",
//     name: "Université Felix Houphouet Boigny",
//     type: "",
//     logo: "/images/partenaire_de_la_CAPEC/LOGO UNIVERSITE.jpg",
//   },
//   {
//     id: "ni3",
//     name: "Centre Ivoirien Recherches Economiques",
//     type: "",
//     logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg",
//   },
//   {
//     id: "ni4",
//     name: "Fondation pour le renforcement des capacités en Afrique",
//     type: "",
//     logo: "/images/partenaire_de_la_CAPEC/acbflogo.jpg",
//   },
// ]

