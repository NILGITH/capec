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

// Carousel events data
const carouselEvents = [
  {
    title: "10e SOMMET DES THINK TANKS d'Afrique",
    date: "8 au 11 Octobre 2024",
    image: "/images/10esommetdesthinkstankdafrique.jpg",
    learnMoreLink: "/activites/programme#event1",
    registerLink: "/activites/programme/inscription",
  },
  {
    title: "Conférence JAPAN CORNER-CAPEC-TODA CORPORATION-JICA",
    image: "/images/Conference JAPAN CORNER-CAPEC-TODA CORPORATION-JICA 4 MARS2025.jpg",
    date: "4 mars 2025",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },

  {
    title: "Conférence JICA-JAPAN CORNER-CAPEC",
    date: "22 Février 2024",
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
const recentPublications = [
  {
    id: "1",
    title: "Présentation des résultats des deux études financées par le PAGDS",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme.",
    date: "",
    coverImage: "/images/presentationdesresultatsdesdeuxétudesfinanceesparlepagds.jpg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    title: "Construction d'un indice et sous-indices endogènes de suivi de la gouvernance en Côte d'Ivoire",
    excerpt:
      "Une étude approfondie des dynamiques du marché du travail et des facteurs contribuant aux inégalités salariales.",
    date: "",
    coverImage: "/images/constructiondunindiceetsousindicesendogènesdesuividelagouvenci.jpg?text=Marché+du+Travail&height=340&width=600",
  },
 
];

const recentNews = [
  {
    id: "1",
    title: "Leçon inaugurale du 30ᵉ anniversaire de la CAPEC faite par M. AHOUTOU KOFFI EMMANUEL",
    excerpt:
      "La CAPEC a célébré ses 30 ans les 8 et 9 octobre 2024 à Abidjan, en présence du Ministre Directeur de Cabinet du Vice-Président, M. Emmanuel Ahoutou KOFFI, qui a prononcé une leçon inaugurale marquante. Il a salué l'impact de la CAPEC sur les politiques publiques en Côte d'Ivoire et dans l'UEMOA-CEDEAO, tout en l'invitant à innover face aux défis climatiques, technologiques et industriels. Cet anniversaire a été l'occasion de dresser le bilan de trois décennies d'expertise et de tracer des perspectives pour un développement durable inclusif.",
    date: "8 octobre 2024",
    image: "/images/img1 (1).jpg",
  },
  {
    id: "2",
    title: "Diner du 30ᵉ anniversaire de la CAPEC",
    excerpt:
      "Joyeux 30ᵉ anniversaire à la CAPEC, une institution phare au service du développement économique et social de la Côte d'Ivoire !",
    date: "9 octobre 2024",
    image: "/images/19.jpg",
  },
];

interface Publication {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

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
            <span className="text-xs text-muted-foreground">{publication.date}</span>
            <h3 className="font-bold">{publication.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{publication.excerpt}</p>
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
            <h3 className={news.id === '1' || news.id === '2' ? "font-bold" : undefined}>{news.title}</h3>
            {news.excerpt && <p className="text-muted-foreground">{news.excerpt}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

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
          <EventCarousel events={carouselEvents} />
        </section>
        {/* Mission Section */}
        <motion.section
          className="w-full py-8 md:py-16 lg:py-4"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center mt-8 mb-8 justify-center space-y-4 text-center py-6 bg-orange-200 text-white sm:mt-16 sm:mb-14 sm:py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-2 px-4 sm:px-0">
                <h2 className="text-2xl text-black tracking-tighter mb-4 sm:text-3xl md:text-4xl font-bold">
                  Notre Mission
                </h2>
                <p className="max-w-[1090px] text-left sm:text-justify  text-black  text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                La CAPEC a pour mission de fournir des analyses économiques approfondies afin d'éclairer les décisions de politique publique en Côte d'Ivoire.
                Nous œuvrons au renforcement des capacités des acteurs nationaux en matière de gestion économique, de planification stratégique et de mise en œuvre des réformes.
                Parallèlement, nous encourageons la recherche appliquée et l'innovation afin de promouvoir une croissance inclusive et durable, répondant aux défis économiques locaux.

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
              {[
                {
                  icon: FileText,
                  title: "Projet de recherche",
                  description: "Conduire des recherches de haute qualité sur les questions économiques africaines à fort impact développemental.",
                  image: "/images/actua2.jpg?text=Recherche+Économique&height=120&width=240",
                  alt: "Recherche économique",
                },
                {
                  icon: Users,
                  title: "Formation",
                  description: "Formation des agents de la DGI",
                  image: "/images/Formation Agent DGI.jpg?text=Recherche+Économique&height=120&width=240",
                  alt: "Formation académique",
                },
                {
                  icon: Calendar,
                  title: "Etude",
                  description: "Fournir des conseils stratégiques aux décideurs politiques et aux parties prenantes.",
                  image: "/images/toponymieetude.jpg?text=Recherche+Économique&height=120&width=240",
                  alt: "Conseil stratégique",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="max-w-xs mx-auto h-full bg-white border-l-4 rounded-lg flex flex-col">
                    <CardContent className="p-3 flex flex-col items-center text-center gap-2 flex-1">
                      <motion.div
                        className="p-2 rounded-full bg-orange-100"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className={`h-5 w-5 ${item.title === "Formation" ? "text-ci-green" : "text-ci-orange"}`} />
                      </motion.div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-700 leading-tight mb-4">{item.description}</p>
                      <motion.div
                        className="w-full flex-1 flex items-end"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
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
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projets de recherche Récents</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez nos dernier projets de recherches.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 justify-center"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {recentPublications.map((pub) => (
                <motion.div key={pub.id} variants={cardVariants} className="flex justify-center">
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
                <Button variant="outline" className="border-ci-green text-ci-green hover:bg-green-100">
                  Voir tous les projets de recherche
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
        {/* News Section */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Actualités</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Restez informés des derniers événements et annonces de la CAPEC.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {recentNews.map((news) => (
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
                <Button variant="outline" className="border-ci-orange text-ci-orange hover:bg-orange-100">
                  Voir toutes les actualités
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
      
        </motion.section>
        {/* Image Gallery */}
        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-orange-100"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">La CAPEC en images</h2>
              <div className="w-20 h-1 bg-ci-orange mx-auto my-2"></div>
              <p className="max-w-[700px] text-muted-foreground">
              Découvrez nos activités, nos événements et notre équipe à travers cette galerie d'images.
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
                  { src: "/images/dgcapec.jpg", alt: "", height: "h-48 md:h-64" },
                  { src: "/images/12.jpg", alt: "", height: "h-64 md:h-80" },
                ],
                [
                  { src: "/images/conf2.jpg?text=Atelier+de+Formation&height=400&width=300", alt: "", height: "h-64 md:h-80" },
                  { src: "/images/capec_image/foto.jpg?text=Réunion+d'Experts&height=300&width=400", alt: "", height: "h-48 md:h-64" },
                ],
                [
                  { src: "/images/actua2.jpg", alt: "", height: "h-48 md:h-64" },
                  { src: "/images/japanconferencecapec.jpg?text=Forum+Économique+Régional&height=600&width=600", alt: "", height: "h-64 md:h-80" },
                ],
                [
                  { src: "/images/img1 (2).jpg?text=Équipe+de+Recherche&height=400&width=300", alt: "", height: "h-64 md:h-80" },
                  { src: "/images/album6.jpg?text=Cérémonie+de+Remise+de+Prix&height=300&width=400", alt: "", height: "h-48 md:h-64" },
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
                  Voir toutes les photos
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