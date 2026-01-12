"use client"

import Image from "next/image"
import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"

type Institution = {
  id: string
  logo?: string
  // Optional fallbacks (used only if a translation key is missing)
  name?: string
  type?: string
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
  const t = useTranslations()

  const has = (t as unknown as { has?: (k: string) => boolean }).has
  const nameKey = `references.items.${reference.id}.name`
  const typeKey = `references.items.${reference.id}.type`

  const name = has && !has(nameKey) ? reference.name : t(nameKey)
  const type = has && !has(typeKey) ? reference.type : t(typeKey)

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={reference.logo || "/placeholder.svg"}
          alt={name || "Institution"}
          fill
          className="object-contain"
        />
      </div>
      {name && <h3 className="font-medium text-sm">{name}</h3>}
      {type && <p className="text-xs text-muted-foreground">{type}</p>}
    </div>
  )
}

/* ===================== DONNÉES ===================== */

// Institutions Internationales
const internationalInstitutions: Institution[] = [
  { id: "ii1", logo: "/images/partenaires/bankmondiale.jpg" },
  { id: "ii2", logo: "/images/partenaires/BAD.jpg" },
  { id: "ii3", logo: "/images/partenaires/jica.webp" },
  { id: "ii4", logo: "/images/partenaires/JAPANFUNDATION.webp" },
  { id: "ii5", logo: "/images/partenaires/afdrouge.png" },
  { id: "ii6", logo: "/images/partenaires/IDRC.jpg" },
  { id: "ii7", logo: "/images/partenaires/PNUD.jpg" },
  { id: "ii8", logo: "/images/partenaires/FAO.webp" },
  { id: "ii9", logo: "/images/partenaires/pam.png" },
  { id: "ii10", logo: "/images/partenaires/UNICEF.png" },
  { id: "ii11", logo: "/images/partenaires/UN-Women.png" },
]

// Institutions Régionales
const regionalInstitutions: Institution[] = [
  { id: "ir1", logo: "/images/partenaires/CEDEAO.webp" },
  { id: "ir2", logo: "/images/partenaires/UEMOA.jpg" },
]

// Institutions Nationales Publiques
const nationalPublicInstitutions: Institution[] = [
  { id: "np1", logo: "/images/partenaires/MEC.jpg" },
  { id: "np2", logo: "/images/partenaires/MFBCI.jpg" },
  { id: "np3", logo: "/images/partenaires/DGI.jpg" },
  { id: "np4", logo: "/images/partenaire_de_la_CAPEC/LOGO BNETD.jpg" },
  { id: "np5", logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg" },
]

// Secteur Privé
const privateSectorInstitutions: Institution[] = [
  { id: "ps1", logo: "/images/partenaires/CGECI.jpg" },
  { id: "ps2", logo: "/images/partenaires/UGECI.png" },
]

// Société Civile
const civilSocietyInstitutions: Institution[] = [
  { id: "cs1", logo: "/images/partenaires/CSCI.png" },
]
