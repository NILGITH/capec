"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

interface Interview {
  id: string;
  type: "video" | "audio" | "text";
}

interface Debat {
  id: string;
}

export default function InterviewPage() {
  const t = useTranslations("interviewsPage");
  const interviews = t.raw("interviews") as Interview[];
  const debats = t.raw("debats") as Debat[];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{t("title")}</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            {t("description")}
          </p>
        </div>

        <Tabs defaultValue="interviews" className="mt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interviews">{t("tabs.interviews")}</TabsTrigger>
            <TabsTrigger value="debats">{t("tabs.debats")}</TabsTrigger>
          </TabsList>

          <TabsContent value="interviews" className="mt-6 space-y-6">
            {interviews.map((item) => (
              <InterviewCard key={item.id} id={item.id} type={item.type} />
            ))}
          </TabsContent>

          <TabsContent value="debats" className="mt-6 space-y-6">
            {debats.map((item) => (
              <DebatCard key={item.id} id={item.id} />
            ))}
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t("cta.title")}</h2>
              <p className="text-muted-foreground">{t("cta.text")}</p>
            </div>
            <Link href={t("cta.link")}>
              <Button className="bg-ci-orange text-white hover:bg-orange-600">
                {t("cta.button")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ---------------- Cards ---------------- */

function InterviewCard({ id, type }: { id: string; type: string }) {
  const t = useTranslations("interviewsPage");

  return (
    <Card className="overflow-hidden max-w-[1300px] mx-auto">
      <div className="p-6 space-y-4">
        <div className="flex items-center text-sm text-ci-orange">
          <Calendar className="h-4 w-4 mr-2" />
          {t(`interviewsData.${id}.date`)}
        </div>

        <h3 className="text-xl font-bold">
          {t(`interviewsData.${id}.title`)}
        </h3>

        <div className="flex items-center text-sm">
          <User className="h-4 w-4 text-ci-green mr-2" />
          <span>
            <strong>{t("labels.speaker")} :</strong>{" "}
            {t(`interviewsData.${id}.speaker`)}
          </span>
        </div>

        <Link href={`/activites/interview/${id}`}>
          <Button className="bg-ci-green text-white hover:bg-green-700">
            {t("buttons.view")}
          </Button>
        </Link>
      </div>
    </Card>
  );
}

function DebatCard({ id }: { id: string }) {
  const t = useTranslations("interviewsPage");

  return (
    <Card>
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center text-sm text-ci-orange">
          <Calendar className="h-4 w-4 mr-2" />
          {t(`debatsData.${id}.date`)}
        </div>

        <h3 className="text-xl font-bold">
          {t(`debatsData.${id}.title`)}
        </h3>

        <div className="flex items-center text-sm">
          <User className="h-4 w-4 text-ci-green mr-2" />
          <span>
            <strong>{t("labels.participants")} :</strong>{" "}
            {t(`debatsData.${id}.participants`)}
          </span>
        </div>

        <Link href={`/activites/interview/${id}`}>
          <Button className="bg-ci-green text-white hover:bg-green-700">
            {t("buttons.view")}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
