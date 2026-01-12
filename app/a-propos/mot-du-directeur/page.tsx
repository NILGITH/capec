"use client";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

export default function MotDuDirecteurPage() {
  const t = useTranslations("motDuDirecteur");

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/chercheurs/profahourealbanalphonseemmanueldirecteurdelacapec.jpg"
                  alt={t("photoAlt")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg">{t("directorName")}</h3>
                <p className="text-ci-orange">{t("directorRole")}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-xl font-medium text-foreground">{t("greeting")}</p>

            <p className="text-justify">{t("paragraph1")}</p>

            <p className="text-justify">{t("paragraph2")}</p>

            <p className="text-justify">{t("paragraph3")}</p>

            <p className="text-justify">{t("paragraph4")}</p>

            <p className="text-justify">{t("closing")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
