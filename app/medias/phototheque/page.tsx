"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { useTranslations } from "next-intl";

interface Photo {
  id: string;
  title?: string; // fallback (FR)
  date?: string; // fallback (FR)
  description?: string; // fallback (FR)
  src: string;
}

export default function PhotothequePage() {
  const t = useTranslations("phototheque");

  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: Photo, index: number): void => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    setSelectedImage(allPhotos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % allPhotos.length;
    setSelectedImage(allPhotos[newIndex]);
    setCurrentIndex(newIndex);
  };

  // helper to read translated field with fallback to Photo object
  const getPhotoField = (photo: Photo, field: "title" | "date" | "description") => {
    const key = `data.${photo.id}.${field}`;
    const value = t(key);
    // next-intl usually returns the key when missing — fallback to local value
    if (!value || typeof value !== "string" || value.includes("data.") || value.includes("phototheque.")) {
      return photo[field] ?? "";
    }
    return value;
  };

  const allPhotos: Photo[] = [
    ...conferencesPhotos,
    ...seminairesPhotos,
    ...formationsPhotos,
    ...equipesPhotos,
    ...panelPhotos,
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            {t("description")}
          </p>
        </div>

        <div className="mt-8 mb-32">
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
                    alt={getPhotoField(photo, "title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white">
                      <h3 className="font-medium text-sm">{getPhotoField(photo, "title")}</h3>
                      <p className="text-xs text-white/80">{getPhotoField(photo, "date")}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
            aria-label={t("close")}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
            aria-label={t("previous")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={getPhotoField(selectedImage, "title")}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white max-h-48 overflow-y-auto">
              <h3 className="font-bold">{getPhotoField(selectedImage, "title")}</h3>
              <p className="text-sm text-white/80">{getPhotoField(selectedImage, "date")}</p>
              <p className="mt-2">{getPhotoField(selectedImage, "description")}</p>
            </div>
          </div>

          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToNext}
            aria-label={t("next")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

// ---------------------- sample data (fallbacks in FR) ----------------------
const conferencesPhotos: Photo[] = [
  {
    id: "conf3",
    title: "3 ETUDES D'EVALUATION D'IMPACT DES MESURES FISCALES",
    date: "",
    description: "",
    src: "/images/restitutionbudget1.jpg?text=Forum+Économique+Régional&height=600&width=600",
  },
  {
    id: "conf4",
    title: "LA CONFERENCE JAPAN CORNER-JICA-TODA CORPORATION-CAPEC 2025",
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
];

const seminairesPhotos: Photo[] = [
  {
    id: "sem1",
    title: "FORUM EPA EN PARTENARIAT AVEC L'ACED du 6 au 7 Novembre 2024",
    date: "6 au 7 Novembre 2024",
    description: "",
    src: "/images/photo/converted_img_c.png",
  },
  { id: "sem2", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9039con.jpg" },
  { id: "sem3", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9044.jpg" },
  { id: "sem4", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9046.jpg" },
  { id: "sem5", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9056.jpg" },
  { id: "sem6", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9071.jpg" },
  { id: "sem7", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9082.jpg" },
  { id: "sem8", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9083.jpg" },
  { id: "sem9", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9099.jpg" },
  { id: "sem10", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9108.jpg" },
  { id: "sem11", title: "Lancement du projet SPIA en Côte d’Ivoire", date: "15 mai 2025", description: "", src: "/images/photo/IMG_9110.jpg" },
];

const formationsPhotos: Photo[] = [
  {
    id: "form1",
    title: "Remise des trophées 30 ans de la CAPEC - Awards de la politique économique",
    date: "09 octobre 2024",
    description: "",
    src: "/images/28.jpg?text=Atelier+Évaluation+Politiques&height=600&width=600",
  },
  { id: "form2", title: "VISITE D'UNE DELEGATION DE SOPHIA UNIVERSITY DE TOKYO", date: "", description: "", src: "/images/tokyo.jpeg" },
  { id: "form3", title: "Séminaire de rentrée CAPEC (11-13 Janvier 2024)", date: "11 - 13 Janvier 2024", description: "", src: "/images/capec_image/reunion.jpg?text=Atelier+Évaluation+Politiques&height=600&width=600" },
  { id: "form4", title: "ATELIER DE LANCEMENT DU PROJET SPIA CÔTE D’IVOIRE", date: "", description: "", src: "/images/Atelier.jpg" },
  { id: "form5", title: "Stand d’exposition CAPEC - 30ᵉ anniversaire & 10ᵉ sommet", date: "", description: "", src: "/images/photo/converted_img_k.png" },
];

const equipesPhotos: Photo[] = [
  {
    id: "eq2",
    title: "Directeur de la CAPEC PROF. AHOURE Alban pendant la conférence JAPAN CORNER-JICA-TODA CORPORATION-CAPEC 2025",
    date: "",
    description: "",
    src: "/images/dgcapec.jpg?text=Équipe+Recherche+Développement&height=600&width=600",
  },
  { id: "eq3", title: "Visite d'Esther DUFLO, prix Nobel d'Économie 2019", date: "", description: "", src: "/images/estherubo.jpg?text=Équipe+Recherche+Développement&height=600&width=600" },
];

const panelPhotos: Photo[] = [
  { id: "pan2", title: "Panel de haut niveau", date: "", description: "", src: "/images/photo/panel de haut niveau.png" },
  { id: "pan3", title: "Panel de haut niveau", date: "", description: "", src: "/images/photo/converted_img_g.png" },
  { id: "pan4", title: "Panel de haut niveau", date: "", description: "", src: "/images/photo/panel de haut niveau (4).png" },
  { id: "pan5", title: "Panel de haut niveau", date: "", description: "", src: "/images/photo/panel de haut niveau (2).png" },
];
