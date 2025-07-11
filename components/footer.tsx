"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Linkedin, Youtube, MapPin, Phone, Smartphone, Mail, Twitter, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

// Types pour les partenaires 
interface Partner {
  name: string;
  logo: string;
  url: string;
}

// Données des partenaires
const partners: Partner[] = [
  { name: "BNETD", logo: "/images/logobnet.jpg", url: "https://www.bnetd.ci" },
  { name: "Université Félix Houphouët-Boigny", logo: "/images/logouni.jpg", url: "https://www.univ-fhb.edu.ci" },
  { name: "CIRES", logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg", url: "https://www.cires.info" },
  { name: "ACBF", logo: "/images/partenaire_de_la_CAPEC/acbflogo.jpg", url: "https://www.acbf-pact.org" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const pathname = usePathname();

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      setEmail("");
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-[#114232] text-white pt-0 pb-0">
      {/* PARTENAIRES : défilement horizontal en haut dans un fond blanc, uniquement sur la page d'accueil */}
      {pathname === "/" && (
        <div className="bg-white w-full">
          <section className="w-full py-6">
            <h3 className="text-xl font-bold text-center text-[#114232] mb-6 font-policy-brief">Nos principaux partenaires</h3>
            <div className="overflow-x-hidden">
              <div className="flex gap-12 min-w-[600px] justify-center items-center animate-scroll-partners">
                {/* Logos partenaires */}
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/bankmondiale.jpg" alt="Banque Mondiale" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/BAD.jpg" alt="BAD" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/afdrouge.png" alt="AFD" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/IDRC.jpg" alt="IDRC/CRDI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/PNUD.jpg" alt="PNUD" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/UGECI.png" alt="UGECI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/CSCI.png" alt="CSCI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/MEC.jpg" alt="MEC" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/MFBCI.jpg" alt="MFBCI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/MCLU.png" alt="MCLU" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/DOUANE.jpg" alt="DOUANE" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/CGECI.jpg" alt="CGECI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/DGI.jpg" alt="DGI" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/MMPE.jpg" alt="MMPE" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/MFFE.jpg" alt="MFFE" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/UEMOA.jpg" alt="UEMOA" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/CEDEAO.webp" alt="CEDEAO" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/CEA.png" alt="CEA" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/republiqueducongo.webp" alt="République du Congo" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/BCR-logo-1024x543.png" alt="BCR" width={100} height={60} className="object-contain mb-2" />
                </div>
               
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/UN-Women.png" alt="UN Women" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/UNICEF.png" alt="UNICEF" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/pam.png" alt="PAM" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/FAO.webp" alt="FAO" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/JAPANFUNDATION.webp" alt="Japan Foundation" width={100} height={60} className="object-contain mb-2" />
                </div>
                <div className="flex flex-col items-center px-6 py-4 min-w-[180px]">
                  <Image src="/images/partenaires/jica.webp" alt="JICA" width={100} height={60} className="object-contain mb-2" />
                </div>
              </div>
            </div>
          </section>
          {/* Animation CSS pour le défilement horizontal */}
          <style jsx global>{`
            @keyframes scroll-partners {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-partners {
              display: flex;
              animation: scroll-partners 30s linear infinite;
              will-change: transform;
            }
          `}</style>
        </div>
      )}

      <div className="container mt-8 mx-auto px-4 md:px-8">
        {/* Grille principale : Contacts / Découvrez / Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 items-start">
          {/* Colonne 1 : Contacts + logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 mt-6">
              <Image
                src="/images/logocapec.png"
                alt="Logo de la CAPEC"
                width={120}
                height={100}
                className="mx-auto md:mx-0 border bg-white rounded-xl mb-2"
              />
            </div>
           
            <div className="text-base text-gray-100 mb-4 text-center md:text-left">
            Bd Latrille, CIRES, Près du Lycée Classique d'Abidjan 08 BP 1295 Abidjan 08 Abidjan-Cote d'Ivoire
            </div>
            <a href="https://maps.app.goo.gl/2iQ82grwVVgQTdyW7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ci-orange font-semibold mb-2 hover:underline">
              <MapPin className="h-5 w-5" />
              Localisation Google map
            </a>
            <ul className="text-base text-gray-100 flex flex-col gap-2 w-full">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (225) 27 22 44 41 24/
              </li>
             
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@capec.ci" className="hover:text-ci-orange transition-colors">info@capec-ci.org</a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Découvrez (sous-menus) */}
          <div className="self-center mt-12 w-full">
            <h3 className="text-lg font-bold uppercase mb-2 font-policy-brief">NOS SOUS MENUS</h3>
            <div className="w-10 h-1 bg-ci-orange mb-4" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-base">
              {/* Sous-menus dynamiques */}
              <div className="flex flex-col gap-2">
                <Link href="/a-propos/historique-objectif" className="hover:text-ci-orange transition-colors">Historique et Objectifs</Link>
                <Link href="/a-propos/organigramme" className="hover:text-ci-orange transition-colors">Organigramme</Link>
                <Link href="/a-propos/nos-activites" className="hover:text-ci-orange transition-colors">Nos Activités</Link>
                <Link href="/a-propos/capec-en-chiffres" className="hover:text-ci-orange transition-colors">La CAPEC en Chiffres</Link>
                <Link href="/a-propos/references" className="hover:text-ci-orange transition-colors">Quelques Références</Link>
                <Link href="/ressources/recherches" className="hover:text-ci-orange transition-colors">Projets de recherches</Link>
                <Link href="/ressources/etudes" className="hover:text-ci-orange transition-colors">Etudes</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/activites/programme" className="hover:text-ci-orange transition-colors">Programmes d'activités</Link>
                <Link href="/activites/rapport" className="hover:text-ci-orange transition-colors">Rapports d'activités</Link>
                <Link href="/activites/compte-rendu" className="hover:text-ci-orange transition-colors">CR d'actualités</Link>
                <Link href="/activites/interview" className="hover:text-ci-orange transition-colors">Interview - Question</Link>
                <Link href="/activites/actualites" className="hover:text-ci-orange transition-colors">Actualités</Link>
                <Link href="/medias/phototheque" className="hover:text-ci-orange transition-colors">Photothèques</Link>
                <Link href="/medias/videotheque" className="hover:text-ci-orange transition-colors">Vidéothèques</Link>
               
              </div>
            </div>
          </div>

          {/* Colonne 3 : Newsletter */}
          <div className="self-center w-full">
            <h3 className="text-lg font-bold uppercase mb-2 font-policy-brief">NEWSLETTER</h3>
            <div className="w-10 h-1 bg-ci-orange mb-4" />
            <p className="text-base text-gray-100 mb-4">Abonnez-vous à notre newsletter pour obtenir des nouvelles importantes dans le domaine de la recherche et des politiques publiques :</p>
            <form onSubmit={handleSubmit} className="flex border border-gray-400 rounded overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="Entrez votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-black w-full focus:outline-none text-base"
                required
                aria-label="Adresse email pour l'infolettre"
              />
              <button
                type="submit"
                className="bg-ci-orange text-white px-4 py-2 font-bold hover:bg-orange-600 transition-colors duration-300"
                disabled={formStatus !== "idle"}
              >
                &gt;
              </button>
            </form>
            <p className={`text-sm mt-2 min-h-[20px] ${
              formStatus === "success"
                ? "text-green-400"
                : formStatus === "error"
                ? "text-red-400"
                : "text-gray-300"
            }`}>
              {formStatus === "success"
                ? "Inscription réussie !"
                : formStatus === "error"
                ? "Erreur lors de l'inscription. Réessayez."
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* BANDEAU BAS : Réseaux sociaux + copyright */}
      <div className="bg-[#114232] border-t border-gray-800 py-4 mt-0">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Réseaux sociaux */}
          <div className="flex gap-4 mb-2 md:mb-0">
            <Link href="https://www.facebook.com/capec.officiel/friends_likes/" target="_blank" aria-label="Facebook">
              <Facebook className="h-8 w-8 rounded-xl bg-white p-[4px] text-ci-orange shadow hover:scale-110 hover:bg-ci-orange hover:text-white transition-all duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/" aria-label="LinkedIn">
              <Linkedin className="h-8 w-8 rounded-xl bg-white p-[4px] text-ci-orange shadow hover:scale-110 hover:bg-ci-orange hover:text-white transition-all duration-300" />
            </Link>
            <Link href="https://www.youtube.com/@capeccotedivoire8917" aria-label="YouTube">
              <Youtube className="h-8 w-8 rounded-xl bg-white p-[4px] text-ci-orange shadow hover:scale-110 hover:bg-ci-orange hover:text-white transition-all duration-300" />
            </Link>
            <Link href="https://x.com/info_capec/header_photo" aria-label="twitter">
              <Twitter className="h-8 w-8 rounded-xl bg-white p-[4px] text-ci-orange shadow hover:bg-ci-orange hover:text-white transition-all duration-300" />
            </Link>
         
          </div>
          {/* Copyright */}
          <div className="text-sm text-gray-100 text-center">
            <span>© {year} CAPEC - CIRES. Tous droits réservés.</span>
            <span className="mx-2">|</span>
            <Link href={"https://www.aitech-ci.com/"} target="_blank" className="font-bold text-gray-300 underline hover:text-ci-orange transition-colors duration-300">By AITECH-CI</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}