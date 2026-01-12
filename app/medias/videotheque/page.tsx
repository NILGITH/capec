"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

interface Video {
  id: string;
  title?: string; // fallback FR
  date?: string;  // fallback FR
  url: string;
  thumbnail: string;
  views?: string;
}

const videos: Video[] = [
  {
    id: "vid1",
    title:
      "Cérémonie de lancement du projet CRDI portant sur l'analyse de l'effet de l'employabilité des jeunes sur la violence urbaine",
    date: "16 Décembre 2020",
    url: "https://www.youtube.com/watch?v=OMc1kgqh2Nk",
    thumbnail: "/images/img1 jt03.png",
    views: "2 vues",
  },
  {
    id: "vid2",
    title: "Économie : une Côte d'Ivoire émergente en 2020 – réflexion de la CAPEC",
    date: "03 Juin 2020",
    url: "https://www.youtube.com/watch?v=E4316mXIOy0",
    thumbnail: "/images/seminaire.png",
    views: "2 vues",
  },
  {
    id: "vid3",
    title: "Séminaire de réflexion CIRES – 07 juin 2012 (Partie 1)",
    date: "03 Juin 2020",
    url: "https://www.youtube.com/watch?v=EwpsCwRo3-I",
    thumbnail: "/images/cires.png",
    views: "2 vues",
  },
];

export default function VideothequePage() {
  const t = useTranslations("videotheque");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const getField = (video: Video, field: "title" | "date") => {
    const key = `data.${video.id}.${field}`;
    const value = t(key);
    if (!value || value.includes("videotheque.")) {
      return video[field] ?? "";
    }
    return value;
  };

  return (
    <>
      <MainNav />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground md:text-xl max-w-[800px] mb-10">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-52">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div
                className="relative aspect-video cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {!imageError[video.id] ? (
                  <Image
                    src={video.thumbnail}
                    alt={getField(video, "title")}
                    fill
                    className="object-cover"
                    onError={() =>
                      setImageError((prev) => ({ ...prev, [video.id]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Play className="h-12 w-12 text-gray-400" />
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full bg-orange-500/80 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3
                  className="font-bold line-clamp-1 cursor-pointer hover:text-blue-600"
                  onClick={() => setSelectedVideo(video)}
                >
                  {getField(video, "title")}
                </h3>
                <p className="text-xs text-gray-500">
                  {getField(video, "date")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal vidéo */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-background rounded-lg w-full max-w-4xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 p-2 z-10"
                aria-label={t("close")}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="aspect-video">
                <iframe
                  src={selectedVideo.url.replace("watch?v=", "embed/")}
                  title={getField(selectedVideo, "title")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">
                  {getField(selectedVideo, "title")}
                </h3>
                <p className="text-sm text-gray-600">
                  {getField(selectedVideo, "date")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
