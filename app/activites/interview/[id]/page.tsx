"use client";

import React from "react";
import Link from "next/link";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

interface ContentItem {
  id: string;
  titleKey: string;
  dateKey: string;
  speakerKey?: string;
  type?: "video" | "audio" | "text";
  fullContentKey?: string;
  participantsKey?: string;
}

interface Props {
  // en Client Components, params est une Promise -> on l'unwrap avec React.use()
  params: Promise<{ id: string }>;
}

/**
 * Liste des items : on garde des références à des clés de traduction (titleKey, dateKey, ...)
 * Les textes longs (fullContentKey) doivent exister dans ton fichier de messages JSON.
 */
const interviews: ContentItem[] = [
  {
    id: "int1",
    titleKey: "interviews.int1.title",
    dateKey: "interviews.int1.date",
    speakerKey: "interviews.int1.speaker",
    type: "video",
    fullContentKey: "interviews.int1.content",
  },
  {
    id: "int2",
    titleKey: "interviews.int2.title",
    dateKey: "interviews.int2.date",
    speakerKey: "interviews.int2.speaker",
    type: "audio",
    fullContentKey: "interviews.int2.content",
  },
  {
    id: "int3",
    titleKey: "interviews.int3.title",
    dateKey: "interviews.int3.date",
    speakerKey: "interviews.int3.speaker",
    type: "video",
    fullContentKey: "interviews.int3.content",
  },
  {
    id: "int4",
    titleKey: "interviews.int4.title",
    dateKey: "interviews.int4.date",
    speakerKey: "interviews.int4.speaker",
    type: "video",
    fullContentKey: "interviews.int4.content",
  },
];

const debats: ContentItem[] = [
  {
    id: "deb1",
    titleKey: "debats.deb1.title",
    dateKey: "debats.deb1.date",
    participantsKey: "debats.deb1.participants",
    fullContentKey: "debats.deb1.content",
  },
  {
    id: "deb2",
    titleKey: "debats.deb2.title",
    dateKey: "debats.deb2.date",
    participantsKey: "debats.deb2.participants",
    fullContentKey: "debats.deb2.content",
  },
];

export default function DetailsPage({ params }: Props) {
  // ✅ déballer la Promise params dans un Client Component
  const { id } = React.use(params);

  // useTranslations sans argument : on accède aux clés globales (ui, interviews..., debats...)
  const t = useTranslations();

  // trouve item (interview ou debat)
  const interview = interviews.find((i) => i.id === id);
  const debat = debats.find((d) => d.id === id);
  const contentItem = interview || debat;
  const isInterview = !!interview;

  // si pas trouvé : fallback utilisateur
  if (!contentItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main className="container mx-auto px-4 py-24">
          <h1 className="text-2xl font-bold">{t("ui.notFound")}</h1>
          <p className="mt-4 text-muted-foreground">{t("ui.noDetailedContent")}</p>
          <Link href="/" className="mt-6 inline-block text-ci-orange hover:underline">
            {t("ui.goHome")}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // récupère contenu complet (string) et split en paragraphes
  const fullText = t(contentItem.fullContentKey || "");
  const paragraphs = useMemo(
    () => (fullText ? String(fullText).split("\n\n").filter(Boolean) : [t("ui.noDetailedContent")]),
    [fullText, t]
  );

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex flex-col md:flex-row">
        {/* contenu principal */}
        <main className="container mx-auto flex-grow px-4 py-12 md:max-w-4xl md:px-6 md:py-24">
          <article className="rounded-lg bg-card text-card-foreground p-8 shadow-md">
            <h1 className="mb-8 text-center text-2xl font-bold uppercase tracking-tighter sm:text-3xl md:text-4xl">
              {t(contentItem.titleKey)}
            </h1>

            <p className="mb-6 text-left text-base text-muted-foreground">
              {t("ui.publishedOn")} {t(contentItem.dateKey)}
            </p>

            <hr className="mb-10 w-full" />

            <div className="prose max-w-none text-justify">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="mb-6">
                  {para}
                </p>
              ))}

              {isInterview && (
                <p className="mt-6 text-right text-base font-semibold">{t(contentItem.speakerKey || "")}</p>
              )}
            </div>

            <div className="mt-8 text-left text-base">
              <p>
                <strong>{t("ui.dateLabel")}:</strong> {t(contentItem.dateKey)}
              </p>
              {isInterview ? (
                <>
                  <p>
                    <strong>{t("ui.speakerLabel")}:</strong> {t(contentItem.speakerKey || "")}
                  </p>
                  <p>
                    <strong>{t("ui.typeLabel")}:</strong>{" "}
                    {contentItem.type === "video"
                      ? t("ui.typeVideo")
                      : contentItem.type === "audio"
                      ? t("ui.typeAudio")
                      : t("ui.typeText")}
                  </p>
                </>
              ) : (
                <p>
                  <strong>{t("ui.participantsLabel")}:</strong> {t(contentItem.participantsKey || "")}
                </p>
              )}
            </div>
          </article>
        </main>

        {/* barre latérale */}
        <aside className="mt-12 w-full mb-10 bg-card text-card-foreground p-4 shadow-lg md:mt-18 md:w-80 md:overflow-y-auto md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
          <h2 className="mb-4 text-xl font-semibold text-orange-500">{t("ui.otherInterviews")}</h2>
          {interviews
            .filter((int) => int.id !== (interview?.id || ""))
            .map((int) => (
              <div key={int.id} className="mb-6">
                <Link href={`/activites/interview/${int.id}`} className="text-base font-medium text-gray-800 hover:text-orange-500 uppercase">
                  {t(int.titleKey)}
                </Link>
                <p className="mt-1 text-sm text-gray-600">{t(int.dateKey)}</p>
              </div>
            ))}

          <h2 className="mb-4 mt-8 text-xl font-semibold text-orange-500">{t("ui.otherDebats")}</h2>
          {debats
            .filter((deb) => deb.id !== (debat?.id || ""))
            .map((deb) => (
              <div key={deb.id} className="mb-6">
                <Link href={`/activites/interview/${deb.id}`} className="text-base font-medium text-gray-800 hover:text-orange-500 uppercase">
                  {t(deb.titleKey)}
                </Link>
                <p className="mt-1 text-sm text-gray-600">{t(deb.dateKey)}</p>
              </div>
            ))}
        </aside>
      </div>
      <Footer />
    </div>
  );
}
