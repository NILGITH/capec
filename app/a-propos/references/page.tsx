"use client"

import Image from "next/image"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"

type Institution = {
  id: string
  name: string
  type: string
  logo?: string
}

export default function ReferencesPage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="container px-4 py-12 md:px-6 md:py-24 mb-64 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("references.title")}
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            {t("references.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="internationales" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="internationales">
              {t("references.tabs.international")}
            </TabsTrigger>
            <TabsTrigger value="regionales">
              {t("references.tabs.regional")}
            </TabsTrigger>
            <TabsTrigger value="nationales">
              {t("references.tabs.public")}
            </TabsTrigger>
            <TabsTrigger value="prive">
              {t("references.tabs.private")}
            </TabsTrigger>
            <TabsTrigger value="civile">
              {t("references.tabs.civil")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internationales" className="mt-6">
            <ReferencesGrid data={internationalInstitutions} />
          </TabsContent>

          <TabsContent value="regionales" className="mt-6">
            <ReferencesGrid data={regionalInstitutions} />
          </TabsContent>

          <TabsContent value="nationales" className="mt-6">
            <ReferencesGrid data={nationalPublicInstitutions} />
          </TabsContent>

          <TabsContent value="prive" className="mt-6">
            <ReferencesGrid data={privateSectorInstitutions} />
          </TabsContent>

          <TabsContent value="civile" className="mt-6">
            <ReferencesGrid data={civilSocietyInstitutions} />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}

function ReferencesGrid({ data }: { data: Institution[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((institution) => (
        <ReferenceCard key={institution.id} reference={institution} />
      ))}
    </div>
  )
}

function ReferenceCard({ reference }: { reference: Institution }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={reference.logo || "/placeholder.svg"}
          alt={reference.name || "Institution"}
          fill
          className="object-contain"
        />
      </div>
      {reference.name && (
        <h3 className="font-medium text-sm">{reference.name}</h3>
      )}
      {reference.type && (
        <p className="text-xs text-muted-foreground">{reference.type}</p>
      )}
    </div>
  )
}

/* ===================== DONNÉES ===================== */

// Institutions Internationales
const internationalInstitutions: Institution[] = [
  { id: "ii1", name: "Banque Mondiale", type: "Institution financière", logo: "/images/partenaires/bankmondiale.jpg" },
  { id: "ii2", name: "BAD", type: "Banque Africaine de Développement", logo: "/images/partenaires/BAD.jpg" },
  { id: "ii3", name: "JICA", type: "Coopération japonaise", logo: "/images/partenaires/jica.webp" },
  { id: "ii4", name: "Japan Foundation", type: "Fondation internationale", logo: "/images/partenaires/JAPANFUNDATION.webp" },
  { id: "ii5", name: "AFD", type: "Agence Française de Développement", logo: "/images/partenaires/afdrouge.png" },
  { id: "ii6", name: "IDRC", type: "Centre de recherche", logo: "/images/partenaires/IDRC.jpg" },
  { id: "ii7", name: "PNUD", type: "Nations Unies", logo: "/images/partenaires/PNUD.jpg" },
  { id: "ii8", name: "FAO", type: "Organisation alimentaire", logo: "/images/partenaires/FAO.webp" },
  { id: "ii9", name: "PAM", type: "Programme Alimentaire Mondial", logo: "/images/partenaires/pam.png" },
  { id: "ii10", name: "UNICEF", type: "Nations Unies", logo: "/images/partenaires/UNICEF.png" },
  { id: "ii11", name: "ONU Femmes", type: "Nations Unies", logo: "/images/partenaires/UN-Women.png" },
]

// Institutions Régionales
const regionalInstitutions: Institution[] = [
  { id: "ir1", name: "CEDEAO", type: "Organisation régionale", logo: "/images/partenaires/CEDEAO.webp" },
  { id: "ir2", name: "UEMOA", type: "Union économique", logo: "/images/partenaires/UEMOA.jpg" },
]

// Institutions Nationales Publiques
const nationalPublicInstitutions: Institution[] = [
  { id: "np1", name: "Primature", type: "Institution publique", logo: "/images/partenaires/MEC.jpg" },
  { id: "np2", name: "Ministère des Finances", type: "Institution publique", logo: "/images/partenaires/MFBCI.jpg" },
  { id: "np3", name: "DGI", type: "Administration fiscale", logo: "/images/partenaires/DGI.jpg" },
  { id: "np4", name: "BNETD", type: "Bureau d’études", logo: "/images/partenaire_de_la_CAPEC/LOGO BNETD.jpg" },
  { id: "np5", name: "CIRES", type: "Centre de recherche", logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg" },
]

// Secteur Privé
const privateSectorInstitutions: Institution[] = [
  { id: "ps1", name: "CGECI", type: "Patronat", logo: "/images/partenaires/CGECI.jpg" },
  { id: "ps2", name: "UGECI", type: "Groupement économique", logo: "/images/partenaires/UGECI.png" },
]

// Société Civile
const civilSocietyInstitutions: Institution[] = [
  { id: "cs1", name: "CSCI", type: "Organisation civile", logo: "/images/partenaires/CSCI.png" },
]
