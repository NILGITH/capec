"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, FileText, Calendar, Users, Camera } from "lucide-react";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { EventCarousel } from "@/components/carousel";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ReferencesPage from "./a-propos/references/page";
import { useTranslations } from "next-intl";

// ---------- Types ----------
interface Publication {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

type RawPublication = {
  id: string;
  titleKey?: string;
  excerptKey?: string;
  dateKey?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  coverImage?: string;
};

type RawNews = {
  id: string;
  titleKey?: string;
  excerptKey?: string;
  dateKey?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  image?: string;
};

interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

// Carousel events data
const carouselEvents = [
  {
    titleKey: "event1",
    dateKey: "event1Date",
    image: "/images/10esommetdesthinkstankdafrique.jpg",
    learnMoreLink: "/activites/programme#event1",
    registerLink: "/activites/programme/inscription",
  },
  {
    titleKey: "event2",
    image:
      "/images/Conference JAPAN CORNER-CAPEC-TODA CORPORATION-JICA 4 MARS2025.jpg",
    dateKey: "event2Date",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },

  {
    titleKey: "event3",
    dateKey: "event3Date",
    image: "/images/japan.jpg",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },
];

// Animation variants for staggered card animations
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Variants for image gallery
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Recent publications and news data
const recentPublications: RawPublication[] = [
  {
    id: "1",
    titleKey: "pub1.title",
    excerptKey: "pub1.excerpt",
    dateKey: "pub1.date", // si date fixe, tu peux mettre chaîne vide ou clé
    coverImage:
      "/images/presentationdesresultatsdesdeuxétudesfinanceesparlepagds.jpg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    titleKey: "pub2.title",
    excerptKey: "pub2.excerpt",
    dateKey: "pub2.date",
    coverImage:
      "/images/constructiondunindiceetsousindicesendogènesdesuividelagouvenci.jpg?text=Marché+du+Travail&height=340&width=600",
  },
];

const recentNews: RawNews[] = [
  {
    id: "1",
    titleKey: "news1.title",
    excerptKey: "news1.excerpt",
    dateKey: "news1.date",
    image: "/images/img1 (1).jpg",
  },
  {
    id: "2",
    titleKey: "news2.title",
    excerptKey: "news2.excerpt",
    dateKey: "news2.date",
    image: "/images/19.jpg",
  },
];

// PublicationCard with Framer Motion
function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={publication.coverImage || "/placeholder.svg"}
              alt={publication.title}
              width={800}
              height={450}
              placeholder="blur"
              blurDataURL="/placeholder.svg"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">
              {publication.date}
            </span>
            <h3 className="font-bold">{publication.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {publication.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// NewsCard with Framer Motion
function NewsCard({ news }: { news: News }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        {news.image && (
          <div className="aspect-video w-full overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                width={600}
                height={340}
                placeholder="blur"
                blurDataURL="/placeholder.svg"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        )}
        <CardContent className="p-6">
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">{news.date}</span>
            <h3
              className={
                news.id === "1" || news.id === "2" ? "font-bold" : undefined
              }
            >
              {news.title}
            </h3>
            {news.excerpt && (
              <p className="text-muted-foreground">{news.excerpt}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("carousel");
  const m = useTranslations("missionCarte");
  const r = useTranslations("travaux");
  const pubT = useTranslations("publications");
  const newsT = useTranslations("news");

  const localizedNews: News[] = recentNews.map((n) => ({
    id: n.id,
    title: n.title ?? (n.titleKey ? newsT(n.titleKey) : ""),
    excerpt: n.excerpt ?? (n.excerptKey ? newsT(n.excerptKey) : ""),
    date: n.date ?? (n.dateKey ? newsT(n.dateKey) : ""),
    image: n.image,
  }));

  const localizedPublications: Publication[] = recentPublications.map((p) => ({
    id: p.id,
    title: p.title ?? (p.titleKey ? pubT(p.titleKey) : ""),
    excerpt: p.excerpt ?? (p.excerptKey ? pubT(p.excerptKey) : ""),
    date: p.date ?? (p.dateKey ? pubT(p.dateKey) : ""),
    coverImage: p.coverImage,
  }));

  const localizedCarouselEvents = carouselEvents.map((e) => ({
    ...e,
    title: t(e.titleKey),
    date: t(e.dateKey),
  }));

  const missionCarte = [
    { key: "recherche", icon: FileText, image: "/images/actua2.jpg" },
    { key: "formation", icon: Users, image: "/images/Formation Agent DGI.jpg" },
    { key: "etude", icon: Calendar, image: "/images/toponymieetude.jpg" },
  ] as const;

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col min-h-screen"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <MainNav />
        {/* Carousel Section */}
        <section className="w-full">
          <EventCarousel events={localizedCarouselEvents} />
        </section>
        {/* Mission Section */}
        <motion.section
          className="w-full py-8 md:py-16 lg:py-4"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center mt-8 mb-8 justify-center space-y-4 text-center py-6 bg-muted text-foreground border border-border sm:mt-16 sm:mb-14 sm:py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-2 px-4 sm:px-0">
                <h2 className="text-2xl text-foreground tracking-tighter mb-4 sm:text-3xl md:text-4xl font-bold">
                  {t("mission")}
                </h2>
                <p className="max-w-[1090px] text-left sm:text-justify text-foreground text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("missionText")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {missionCarte.map((item) => (
                <motion.div key={item.key} variants={cardVariants}>
                  <Card className="max-w-xs mx-auto h-full bg-card border-l-4 rounded-lg flex flex-col">
                    <CardContent className="p-3 flex flex-col items-center text-center gap-2 flex-1">
                      <motion.div
                        className="p-2 rounded-full bg-orange-100"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            item.key === "formation"
                              ? "text-ci-green"
                              : "text-ci-orange"
                          }`}
                        />
                      </motion.div>

                      <h3 className="text-lg font-bold">
                        {m(`${item.key}.titre`)}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-tight mb-4">
                        {m(`${item.key}.description`)}
                      </p>

                      <motion.div
                        className="w-full flex-1 flex items-end"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image}
                          alt={m(`${item.key}.alt`)}
                          width={240}
                          height={150}
                          placeholder="blur"
                          blurDataURL="/placeholder.svg"
                          className="w-full h-full rounded-md object-cover"
                          style={{ minHeight: 0 }}
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* Recent Publications */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {r("travails")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {r("decouvrez")}
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 justify-center"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {localizedPublications.map((pub) => (
                <motion.div
                  key={pub.id}
                  variants={cardVariants}
                  className="flex justify-center"
                >
                  <PublicationCard publication={pub} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/ressources/recherches">
                <Button
                  variant="outline"
                  className="border-ci-green text-ci-green hover:bg-green-100"
                >
                  {r("voirTout")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
        {/* News Section */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {r("actu")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {r("actuText")}
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {localizedNews.map((news) => (
                <motion.div key={news.id} variants={cardVariants}>
                  <NewsCard news={news} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/activites/actualites">
                <Button
                  variant="outline"
                  className="border-ci-orange text-ci-orange hover:bg-orange-100"
                >
                  {r("vue")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
        {/* Image Gallery */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-orange-100"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
                <Camera className="h-6 w-6 text-ci-orange" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {r("image")}
              </h2>
              <div className="w-20 h-1 bg-ci-orange mx-auto my-2"></div>
              <p className="max-w-[700px] text-muted-foreground">
                {r("capecT")}
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                [
                  {
                    src: "/images/dgcapec.jpg",
                    alt: "",
                    height: "h-48 md:h-64",
                  },
                  { src: "/images/12.jpg", alt: "", height: "h-64 md:h-80" },
                ],
                [
                  {
                    src: "/images/conf2.jpg?text=Atelier+de+Formation&height=400&width=300",
                    alt: "",
                    height: "h-64 md:h-80",
                  },
                  {
                    src: "/images/capec_image/foto.jpg?text=Réunion+d'Experts&height=300&width=400",
                    alt: "",
                    height: "h-48 md:h-64",
                  },
                ],
                [
                  {
                    src: "/images/actua2.jpg",
                    alt: "",
                    height: "h-48 md:h-64",
                  },
                  {
                    src: "/images/japanconferencecapec.jpg?text=Forum+Économique+Régional&height=600&width=600",
                    alt: "",
                    height: "h-64 md:h-80",
                  },
                ],
                [
                  {
                    src: "/images/img1 (2).jpg?text=Équipe+de+Recherche&height=400&width=300",
                    alt: "",
                    height: "h-64 md:h-80",
                  },
                  {
                    src: "/images/album6.jpg?text=Cérémonie+de+Remise+de+Prix&height=300&width=400",
                    alt: "",
                    height: "h-48 md:h-64",
                  },
                ],
              ].map((column, colIndex) => (
                <div key={colIndex} className="grid gap-4">
                  {column.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      variants={imageVariants}
                      className="overflow-hidden rounded-lg shadow-lg group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`relative ${img.height} w-full`}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          placeholder="blur"
                          blurDataURL="/placeholder.svg"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/medias/phototheque">
                <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                  {r("vueTof")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
