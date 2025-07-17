"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function PhotothequePage() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  interface Photo {
    id: string
    title: string
    date: string
    description: string
    src: string
  }

  const openLightbox = (image: Photo, index: number): void => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length
    setSelectedImage(allPhotos[newIndex])
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % allPhotos.length
    setSelectedImage(allPhotos[newIndex])
    setCurrentIndex(newIndex)
  }

  const allPhotos = [...conferencesPhotos, ...seminairesPhotos, ...formationsPhotos, ...equipesPhotos,...panelPhotos]

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Photothèque</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les moments forts des activités de la CAPEC à travers notre galerie de photos.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8 mb-32">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="all">Toutes les photos</TabsTrigger>
            <TabsTrigger value="conferences">Conférences</TabsTrigger>
            <TabsTrigger value="seminaires">Séminaires</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
            <TabsTrigger value="equipes">Équipes</TabsTrigger>
            <TabsTrigger value="panel">Panels</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, index)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="conferences" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conferencesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, conferencesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="seminaires" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {seminairesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, seminairesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="formations" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {formationsPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, formationsPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="equipes" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {equipesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, equipesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="panel" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {panelPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, panelPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
              <h3 className="font-bold">{selectedImage.title}</h3>
              <p className="text-sm text-white/80">{selectedImage.date}</p>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}

// Sample data
const conferencesPhotos = [
 

  {
    id: "conf3",
    title: "3 ETUDES D'EVALUATION D'IMPACT DES MESURES FISCALES",
    date: "",
    description: "",
    src: "/images/restitutionbudget1.jpg?text=Forum+Économique+Régional&height=600&width=600",
  },
  {
    id: "conf4",
    title: "LA CONFERENCE JAPAN CORNER-JICA-TODA CORPORATION-CAPEC 2025 ",
    date: "22 février 2024",
    description: "",
    src: "/images/japanconferencecapec.jpg?text=Forum+Économique+Régional&height=600&width=600",
  },
  {
    id: "conf5",
    title: "Prof. Alban AHOURE nominé au Who's who in Cote d'Ivoire 2024",
    date: "",
    description: "",
    src: "/images/photo/converted_img_j.png",
    
  },
]

const seminairesPhotos = [

 
  {
    id: "sem4",
    title: "FORUM EPA EN PARTENARIAT AVEC L'ACED du 6 au 7 Novembre 2024",
    date: "6 au 7 Novembre 2024",
    description: "",
    src: "/images/photo/converted_img_c.png",
 
  },
 
]

const formationsPhotos = [
 
  {
    id: "form1",
    title: "Remise des trophées 30 ans de la CAPEC - Awards de la politique économique",
    date: "09 octobre 2024",
    description: "",
    src: "/images/28.jpg?text=Atelier+Évaluation+Politiques&height=600&width=600",
  },
  {
    id: "form2",
    title: "VISITE D'UNE DELEGATION DE SOPHIA UNIVERSITY DE TOKYO CONDUITE PAR LE PROF. ERI YAMAZAKI",
    date: "",
    description: "",
    src: "/images/tokyo.jpeg",
  },
  {
    id: "form3",
    title: "Le seminaire de rentrée de la CAPEC, du jeudi 11 au samedi 13 Janvier 2024 à Mondoukou Bassam",
    date: "11 au samedi 13 Janvier 2024",
    description: "",
    src: "/images/capec_image/reunion.jpg?text=Atelier+Évaluation+Politiques&height=600&width=600",
  },
  {
    id: "form4",
    title: "ATELIER DE LANCEMENT DU PROJET SPIA CÔTE D’IVOIRE",
    date: "",
    description: "",
    src: "/images/Atelier.jpg",

  },
  {
    id: "form5",
    title: "Stand d’exposition de la CAPEC lors de la célébration du 30 -ème anniversaire de la CAPEC et du 10e sommet des Think tanks",
    date: "",
    description: "",
    src: "/images/photo/converted_img_k.png",

  },
  
  
]

const equipesPhotos = [
 
  {
    id: "eq2",
    title: "Directeur de la CAPEC PROF;AHOURE Alban pendant la conférence JAPAN CORNER-JICA-TODA CORPORATION-CAPEC 2025",
    date: "",
    description: "",
    src: "/images/dgcapec.jpg?text=Équipe+Recherche+Développement&height=600&width=600",
  },
 
 
  {
    id: "eq3",
    title: "Visite d'Esther DUFLO,prix Nobel de l'Economie 2019",
    date: "",
    description: "",
    src: "/images/estherubo.jpg?text=Équipe+Recherche+Développement&height=600&width=600",
  },
 
 
]


const panelPhotos = [

  {
    id: "pan2",
    title: "Panel de haut niveau",
    date: "",
    description: "",
    src: "/images/photo/panel de haut niveau.png",
  },
 
 
  {
    id: "pan3",
    title: "Panel de haut niveau",
    date: "",
    description: "",
    src: "/images/photo/converted_img_g.png",
  },
  
  {
    id: "pan4",
    title: "Panel de haut niveau",
    date: "",
    description: "",
    src: "/images/photo/panel de haut niveau (4).png",
  },

  {
    id: "pan5",
    title: "Panel de haut niveau",
    date: "",
    description: "",
    src: "/images/photo/panel de haut niveau (2).png",
  },

 
]
