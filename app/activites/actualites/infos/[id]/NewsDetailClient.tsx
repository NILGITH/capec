"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PdfViewerButton } from "./PdfViewerButton";

type NewsProps = {
  id: string;
  title: string;
  date: string;
  image?: string;
  mot?: string;
};

function translateOrFallback(
  t: ReturnType<typeof useTranslations>,
  key: string,
  fallback: string
) {
  const has = (t as unknown as { has?: (k: string) => boolean }).has;
  if (has && !has(key)) return fallback;
  try {
    return t(key);
  } catch {
    return fallback;
  }
}

function translateRawOrFallback(
  t: ReturnType<typeof useTranslations>,
  key: string,
  fallback: string
) {
  const has = (t as unknown as { has?: (k: string) => boolean }).has;
  if (has && !has(key)) return fallback;

  const maybeRaw = (t as unknown as { raw?: (k: string) => string }).raw;
  try {
    return maybeRaw ? maybeRaw(key) : t(key);
  } catch {
    return fallback;
  }
}

export function NewsDetailClient({
  id,
  news,
  nextId,
  isLast,
}: {
  id: string;
  news: NewsProps;
  nextId: string;
  isLast: boolean;
}) {
  const s = useTranslations("newsDetails");
  const n = useTranslations("newsItems");

  const titleKey = `news${id}.title`;
  const dateKey = `news${id}.date`;
  const motKey = `news${id}.mot`;

  const title = translateOrFallback(n, titleKey, news.title);
  const date = translateOrFallback(n, dateKey, news.date);
  const motHtml = translateRawOrFallback(
    n,
    motKey,
    news.mot ?? s("noContent")
  );

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-8 sm:py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {s("pageTitle")}
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1 flex flex-col">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-background/90 px-2 py-3 rounded-b-lg shadow text-center">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {title}
                </h2>
                <div className="flex items-center justify-center text-muted-foreground text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-muted-foreground flex flex-col justify-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div
                className="text-base sm:text-lg text-gray-800 text-justify space-y-4 [&>p]:mb-4 [&>ol]:mb-4 [&>ol>li]:mb-2"
                dangerouslySetInnerHTML={{
                  __html: motHtml,
                }}
              />
            </div>

            <div className="mt-6 flex justify-between items-center">
              {isLast ? (
                <Link
                  href="/activites/actualites"
                  className="inline-flex items-center gap-1 text-ci-orange font-semibold hover:underline text-base"
                >
                  {s("back")}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ) : (
                <Link
                  href={`/activites/actualites/infos/${nextId}`}
                  className="inline-flex items-center gap-1 text-ci-orange font-semibold hover:underline text-base"
                >
                  {s("nextNews")}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              )}

              {id === "19" && <PdfViewerButton />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
