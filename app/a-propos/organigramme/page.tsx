"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MainNav } from "@/components/main-nav";
import { useTranslations } from "next-intl";

export default function OrganigrammePage() {
  const t = useTranslations(); // utilise common.json (namespace racine)

  // listes traduisibles (ajoute ces clés dans common.json)
  const committeeMembers = [
    t("organigramme.committee.members.0"),
    t("organigramme.committee.members.1"),
    t("organigramme.committee.members.2"),
    t("organigramme.committee.members.3"),
    t("organigramme.committee.members.4"),
    t("organigramme.committee.members.5"),
    t("organigramme.committee.members.6"),
    t("organigramme.committee.members.7"),
    t("organigramme.committee.members.8"),
  ];

  const leadership = [
    t("organigramme.leadership.0"),
    t("organigramme.leadership.1"),
    t("organigramme.leadership.2"),
    t("organigramme.leadership.3"),
  ];

  const researchers = [
    t("organigramme.researchers.0"),
    t("organigramme.researchers.1"),
    t("organigramme.researchers.2"),
    t("organigramme.researchers.3"),
    t("organigramme.researchers.4"),
    t("organigramme.researchers.5"),
    t("organigramme.researchers.6"),
  ];

  const supportStaff = [
    t("organigramme.support.0"),
    t("organigramme.support.1"),
    t("organigramme.support.2"),
    t("organigramme.support.3"),
    t("organigramme.support.4"),
    t("organigramme.support.5"),
    t("organigramme.support.6"),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
            {t("organigramme.title")}
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            {t("organigramme.subtitle")}
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("organigramme.visualTitle")}
            </h2>

            {/* Organigramme visuel */}
            <div className="relative w-full h-[300px] md:h-[600px] mb-8 block">
              <Image
                src="/images/organigramme_CAPEC.png"
                alt={t("organigramme.orgImageAlt")}
                fill
                className="object-contain"
                priority={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">
                {t("organigramme.committee.title")}
              </h3>
              <ul className="space-y-2 text-sm">
                {committeeMembers.map((member, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">
                {t("organigramme.leadership.title")}
              </h3>
              <ul className="space-y-2 text-sm">
                {leadership.map((name, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">
                {t("organigramme.researchers.title")}
              </h3>
              <ul className="space-y-2 text-sm">
                {researchers.map((r, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">
                {t("organigramme.support.title")}
              </h3>
              <ul className="space-y-2 text-sm">
                {supportStaff.map((s, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}



        {/* <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-orange">Direction</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Amadou Diallo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. YEO Nahoua</p>
                    <p className="text-sm text-muted-foreground">Directeur de Cabinet du Ministère du Plan</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Marie Koné"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. ADOPO Fiacre</p>
                    <p className="text-sm text-muted-foreground"> Directeur des Politiques et Synthèses Budgétaires (DGBF)</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Marie Koné"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr DIARRA Ibrahim</p>
                    <p className="text-sm text-muted-foreground">Directeur du CIRES</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-green">Administration</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=AB&height=50&width=50"
                      alt="Aïcha Bamba"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr ABOUA Gustave</p>
                    <p className="text-sm text-muted-foreground">
                      Conseiller Economique, Social, Environnemental et Culturel
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=SK&height=50&width=50"
                      alt="Souleymane Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Prof. BAMBA N’Galadjo</p>
                    <p className="text-sm text-muted-foreground"> 
                    Conseiller Ministère de l’Economie et des Finances (MEF)
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=SK&height=50&width=50"
                      alt="Souleymane Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. NIANGO Guy</p>
                    <p className="text-sm text-muted-foreground"> 
                    Secrétaire du BNETD Représentant le Dg du BNETD
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-orange">Communication</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=KA&height=50&width=50"
                      alt="Kofi Addo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Honorable DIABAGATE MAmah</p>
                    <p className="text-sm text-muted-foreground">
                    Commission des Affaires Economiques et Financières de l'Assemblée Nationale
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=FT&height=50&width=50"
                      alt="Fatou Traoré"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. TRA BI EMMANUEL</p>
                    <p className="text-sm text-muted-foreground">
                    Membre de la Commission des Affaires Economiques et Financières (Assemblée Nationale);
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=FT&height=50&width=50"
                      alt="Fatou Traoré"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Prof. BALLO ZIE</p>
                    <p className="text-sm text-muted-foreground">
                    Président de l'UFHB de Cocody
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div> */}