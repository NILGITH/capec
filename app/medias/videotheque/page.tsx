"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";

interface Video {
  id: string;
  title: string;
  date: string;
  url: string;
  thumbnail: string;
  views: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Cérémonie de lancement du projet CRDI portant sur '' Analyse de l'effet de l'employabilité des jeunes sur la violence urbaine en période post-conflit en Côte d'Ivoire''",
    date: "16 Déc, 2020",
    url: "https://www.youtube.com/watch?v=OMc1kgqh2Nk",
    thumbnail: "/images/img1 jt03.png",
    views: "2 Vues",
  },
  {
    id: "2",
    title: "Economie: une Côte d'Ivoire émergente en 2020! la CAPEC en 2020 mène une réflexion</a><br>",
    date: "03 Juin, 2020",
    url: "https://www.youtube.com/watch?v=E4316mXIOy0",
    thumbnail: "/images/seminaire.png",
    views: "2 Vues",
  },
  {
    id: "3",
    title: "SEMINAIRE DE REFLEXION CIRES 07JUIN 2012 (Part 1)",
    date: "03 Juin, 2020",
    url: "https://www.youtube.com/watch?v=EwpsCwRo3-I",
    thumbnail: "/images/cires.png",
    views: "2 Vues",
  },
];

export default function VideoList() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const openModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
  <>
  <MainNav/>
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6 mt-8">Vidéothèques</h1>
      <p className="text-muted-foreground md:text-xl max-w-[800px] mb-10">Découvrez notre vidéo de conférence de la CAPEC.</p>
    <div className="grid grid-cols-1 md unwittingly, md:grid-cols-2 lg:grid-cols-3 mb-52 gap-6">
  {videos.map((video) => (
    <Card
      key={video.id}
      className="overflow-hidden hover:shadow-md transition-shadow"
    >
      <div
        className="relative aspect-video cursor-pointer group"
        onClick={() => openModal(video)}
      >
        {!imageError[video.id] ? (
          <Image
            src={video.thumbnail}
            alt={`Miniature: ${video.title}`}
            fill
            className="object-cover"
            onError={() => setImageError((prev) => ({ ...prev, [video.id]: true }))}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Play className="h-12 w-12 text-gray-400" />
          </div>
        )}
        {/* Modification : suppression de opacity-0 et group-hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-16 h-16 rounded-full bg-orange-500/80 flex items-center justify-center">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3
          className="font-bold line-clamp-1 cursor-pointer hover:text-blue-600"
          onClick={() => openModal(video)}
        >
          {video.title}
        </h3>
        <p className="text-xs text-gray-500">{video.date}</p>
        <span className="hidden">{video.views}</span>
      </CardContent>
    </Card>
  ))}
</div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.url.includes("youtube.com")
                  ? selectedVideo.url.replace("watch?v=", "embed/")
                  : selectedVideo.url}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{selectedVideo.title}</h3>
              <p className="text-sm text-gray-600">{selectedVideo.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
  </>
  );
}