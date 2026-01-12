"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { sortNewsByDate } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

type NewsSource = {
  id: string;
  // option 1: texte en dur
  title?: string;
  excerpt?: string;
  date?: string;
  // option 2: clés i18n
  titleKey?: string;
  excerptKey?: string;
  dateKey?: string;
  image?: string;
};

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
};

export default function NewsPage({}: {}) {
  // namespaces:
  const s = useTranslations("newsPage"); // titre / desc / boutons
  const n = useTranslations("newsItems"); // items individuels

  // --- SOURCE: Liste complète de toutes les actualités avec clés i18n
  const newsList: NewsSource[] = [
    { id: "1", titleKey: "news1.title", excerptKey: "news1.excerpt", dateKey: "news1.date", image: "/images/12.jpg?text=Conférence+Internationale+CAPEC&height=500&width=800" },
    { id: "12", titleKey: "news12.title", excerptKey: "news12.excerpt", dateKey: "news12.date", image: "/images/converted_img7.png" },
    { id: "17", titleKey: "news17.title", excerptKey: "news17.excerpt", dateKey: "news17.date", image: "/images/japan.jpg" },
    { id: "19", titleKey: "news19.title", excerptKey: "news19.excerpt", dateKey: "news19.date", image: "/images/Atelier.jpg" },
    { id: "21", titleKey: "news21.title", excerptKey: "news21.excerpt", dateKey: "news21.date", image: "/images/photo/VISITE_D_esther_DUFLO.jpg" },
    { id: "30", titleKey: "news30.title", excerptKey: "news30.excerpt", dateKey: "news30.date", image: "/images/Capec_logo_image.jpg" },
    { id: "29", titleKey: "news29.title", excerptKey: "news29.excerpt", dateKey: "news29.date", image: "/images/Capec_logo_image.jpg" },
    { id: "28", titleKey: "news28.title", excerptKey: "news28.excerpt", dateKey: "news28.date", image: "/images/Capec_logo_image.jpg" },
    { id: "27", titleKey: "news27.title", excerptKey: "news27.excerpt", dateKey: "news27.date", image: "/images/Capec_logo_image.jpg" },
    { id: "26", titleKey: "news26.title", excerptKey: "news26.excerpt", dateKey: "news26.date", image: "/images/Capec_logo_image.jpg" },
    { id: "25", titleKey: "news25.title", excerptKey: "news25.excerpt", dateKey: "news25.date", image: "/images/Capec_logo_image.jpg" },
    { id: "24", titleKey: "news24.title", excerptKey: "news24.excerpt", dateKey: "news24.date", image: "/images/photo/Projet_KAIZEN.jpg" },
    { id: "23", titleKey: "news23.title", excerptKey: "news23.excerpt", dateKey: "news23.date", image: "/images/Capec_logo_image.jpg" },
    { id: "22", titleKey: "news22.title", excerptKey: "news22.excerpt", dateKey: "news22.date", image: "/images/photo/ingreso-RAED-Dr-Alban-Ahoure-21.jpg" },
    { id: "20", titleKey: "news20.title", excerptKey: "news20.excerpt", dateKey: "news20.date", image: "/images/photo/seminaire_rentree_2024.jpg" },
    { id: "18", titleKey: "news18.title", excerptKey: "news18.excerpt", dateKey: "news18.date", image: "/images/photo/converted_img_j.png" },
    { id: "16", titleKey: "news16.title", excerptKey: "news16.excerpt", dateKey: "news16.date", image: "/images/photo/converted_img_c.png" },
    { id: "6", titleKey: "news6.title", excerptKey: "news6.excerpt", dateKey: "news6.date", image: "/images/TOUTES LES ACTUALITES/ACBF.jpeg" },
    { id: "15", titleKey: "news15.title", excerptKey: "news15.excerpt", dateKey: "news15.date", image: "/images/TOUTES LES ACTUALITES/ReunionComite.jpg" },
    { id: "7", titleKey: "news7.title", excerptKey: "news7.excerpt", dateKey: "news7.date", image: "/images/TOUTES LES ACTUALITES/Ceremonie.jpg" },
    { id: "9", titleKey: "news9.title", excerptKey: "news9.excerpt", dateKey: "news9.date", image: "/images/TOUTES LES ACTUALITES/Conferenceinternationale.jpg" },
    { id: "5", titleKey: "news5.title", excerptKey: "news5.excerpt", dateKey: "news5.date", image: "/images/TOUTES LES ACTUALITES/conference.jpg" },
    { id: "13", titleKey: "news13.title", excerptKey: "news13.excerpt", dateKey: "news13.date", image: "/images/TOUTES LES ACTUALITES/RESTITUTION BUDGET.jpg" },
    { id: "8", titleKey: "news8.title", excerptKey: "news8.excerpt", dateKey: "news8.date", image: "/images/conferencedecloture.jpeg" },
    { id: "14", titleKey: "news14.title", excerptKey: "news14.excerpt", dateKey: "news14.date", image: "/images/TOUTES LES ACTUALITES/REUNION DE VALIDATION DU PROJET DE VISION.jpg" },
    { id: "11", titleKey: "news11.title", excerptKey: "news11.excerpt", dateKey: "news11.date", image: "/images/converted_img6.png" },
  ];

  // --- localize: transforme titleKey => texte via next-intl
  const localizedNews: NewsItem[] = useMemo(
    () =>
      newsList.map((item) => ({
        id: item.id,
        title: item.titleKey ? n(item.titleKey) : item.title ?? "",
        excerpt: item.excerptKey ? n(item.excerptKey) : item.excerpt ?? "",
        date: item.dateKey ? n(item.dateKey) : item.date ?? "",
        image: item.image,
      })),
    [newsList, n]
  );

  // --- tri (utilise ta fonction utilitaire)
  const sortedNewsList = useMemo(() => sortNewsByDate(localizedNews), [localizedNews]);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {s("title")}
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            {s("description")}
          </p>
        </div>

        {/* News List */}
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedNewsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Card className="overflow-hidden mb-20">
      {news.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            width={600}
            height={340}
            className={`object-cover w-full h-full${news.image === "/images/converted_img7.png" ? " object-top" : ""}`}
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{news.date}</span>
          </div>

          {/* Logique pour certaines news qui n'ouvrent pas de page */}
          {news.id === "1" || news.id === "5" || news.id === "12" ? (
            <span className="font-bold text-foreground block w-fit">
              {news.title}
            </span>
          ) : (
            <Link href={`/activites/actualites/infos/${news.id}`} className="font-bold text-foreground hover:underline block w-fit">
              {news.title}
            </Link>
          )}

          <p className="text-sm text-muted-foreground line-clamp-3 text-justify">
            {news.excerpt}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}