import { notFound } from "next/navigation";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";
import { ChevronRight, Eye } from "lucide-react";
import { useState } from "react";
import { PdfViewerButton } from "./PdfViewerButton";
import { Button } from "@/components/ui/button";

// Simule la même liste que dans page.tsx (à factoriser plus tard)
const newsList = [
  {
    id: "24",
    title: "Projet KAIZEN en Côte d’Ivoire",
    excerpt: "",
    date: "",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Projet KAIZEN en Côte d’Ivoire</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        La Côte d’Ivoire bénéficie d’un appui technique de l’Agence Japonaise de Coopération Internationale de (JICA) dans le cadre de la mise en œuvre du Projet de Promotion des Petite et Moyennes Entreprises ou Projet KAIZEN. Ce projet sera mis en œuvre de juillet 2025 à août 2028 et vise à renforcer la qualité, la productivité et la compétitivité des chaînes de valeur agricoles et agroalimentaires.
      </li>
      <li>
        Le KAIZEN, terme japonais signifiant « amélioration continue », est une philosophie de gestion qui, à travers des outils pratiques comme la méthode 5S, permet de réduire les gaspillages, améliorer l’organisation et accroître la performance des entreprises.
      </a>
      <li>
        Dans le cadre de la mise en œuvre de ce projet, une formation de consultants ivoiriens à la démarche 5S/KAIZEN se tient du 15 au 26 septembre 2025 à Abidjan et se compose de séances théoriques et d’une phase pratique en entreprise. La CAPEC, structure partenaire, accueillera un consultant chargé d’appliquer la méthode KAIZEN au sein du CIRES du 23 au 25 septembre 2025.
      </li>
      <li>
        Ce projet constitue un levier stratégique pour diffuser la culture de l’amélioration continue, développer les compétences locales et accroître la compétitivité des entreprises ivoiriennes.
      </li>
    </ol>
    `,
  },
  {
    id: "23",
    title:
      "Trois nouveaux Docteurs en Sciences Économiques formés au sein de la CAPEC",
    excerpt: "",
    date: "",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Trois nouveaux Docteurs en Sciences Économiques formés au sein de la CAPEC</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        La Cellule d’Analyse de Politiques Économiques du CIRES Économiques du CIRES (CAPEC) est fière de mettre à l’honneur trois de ses Doctorants, qui viennent de soutenir avec succès leur thèse de Doctorat en Sciences Economiques, marquant ainsi une étape importante dans leur parcours académique et professionnel.
      </li>
    </ol>
    <ol style='margin-left:1em;'>
      <span style='color:#FF8000;font-weight:bold;'>
        YEO Kolotioloma Innocent Hamed
      </span>
      <br/>
      <li>
        Il rejoint la CAPEC en novembre 2017 dans le cadre du projet GEMMES (GEneral Monetary and Multisectoral Macrodynamics for the Ecological Shift).-Côte d’Ivoire – une initiative issue du mémorandum stratégique signé entre le Ministère du Plan et du Développement et l’Agence Française de Développement (AFD). 
        Dans le cadre de ce projet, il a contribué en tant que Doctorant et assistant de recherche à l’élaboration d’un modèle macroéconomique structurel de demande pour éclairer les politiques publiques.
      </li>
      <li>
        Encadré par le Professeur ESSO Loesse Jacques, Directeur de Cabinet du Ministre du Commerce et de l’Industrie et ancien Directeur Adjoint de la CAPEC, YEO Kolotioloma Innocent Hamed a soutenu le 23 juillet 2025, à l’Université Alassane Ouattara de Bouaké, sa thèse intitulée « Essais sur l’économie informelle ». Il a analysé dans sa thèse l’effet de l’informalité sur l’emploi permanent et les stratégies de formalisation.
      </li>
      <li>
        Il aboutit aux conclusions suivantes : 
        <ul style="list-style-type: disc; padding-left: 20px; gap: 10px">
          <li>(i) l’informalité réduit l’emploi permanent via le chiffre d’affaires des entreprises ;</li>
          <li>(ii)la consommation publique est un levier budgétaire pour limiter l’économie informelle ;</li>
          <li>(iii) l’innovation peut jouer un rôle important dans la réduction de la taille de l’economie informelle.</li>
        </ul>
      </li>
    </ol>
    
    <ol style='margin-left:1em;'>
      <span style='color:#FF8000;font-weight:bold;'>KESSE Tano Koutoua Devez</span>
      <br/>
      <li>
        Il intègre la CAPEC en novembre 2017 en qualité d’assistant de recherche et doctorant, à l’occasion de la mise en œuvre du projet GEMMES (General Monetary and Multisectoral Macrodynamics for the Ecological Shift) – Côte d’Ivoire. KESSE Tano Koutoua Devez s’est illustré par sa contribution déterminante à la construction d’un modèle macrostructurel appliqué à l’économie ivoirienne, en collaboration avec l’Agence Française de Développement (AFD).
      </li>
      <li> 
        Il a brillamment soutenu sa thèse de Doctorat à l’Université Alassane Ouattara de Bouaké, portant sur l’analyse des effets des chocs de prix des matières premières sur les finances publiques ivoiriennes et sur les stratégies de mitigation permettant d’en réduire l’impact.
      <li/> 
      <li>
        Son travail a été réalisé sous la direction scientifique du Professeur ESSO Loesse Jacques, ancien Directeur Adjoint de la CAPEC et actuel Directeur de Cabinet du Ministre du Commerce et de l’Industrie, qui a su l’accompagner dans ce parcours d’excellence.
      </li> 
      <li>
        Ses recherches portant sur la modélisation macroéconomique, la macroéconomie internationale et l’économétrie appliquée, traduisent une volonté affirmée de mettre la science économique au service de l’action publique, en particulier dans un contexte marqué par la vulnérabilité aux chocs exogènes. 
      </li>
    </ol>

    <ol style='margin-left:1em;'>
      <span style='color:#FF8000;font-weight:bold;'>GABEHI Gobey Serge</span>
      <br/>
      <li>
        Il fait son entrée à la CAPEC en novembre 2020 en tant qu’assistant de recherche et Doctorant. Il a contribué à de nombreuses études stratégiques pour des partenaires tels que la Banque mondiale, l’USAID, le PNUD et la BAD.
      </li>
      <li>
        Le 28 juillet 2025, il soutient à l’Université Félix Houphouët-Boigny sa thèse intitulée « Trois essais sur les leviers du développement inclusif en Côte d’Ivoire ». 
        Cette thèse, rédigée sous l’encadrement du Professeur Assi J.C. KIMOU, Directeur Adjoint de la CAPEC, a permis d’identifier les trois piliers suivants pour aboutir à un développement inclusif :
        <ul style="list-style-type: disc; padding-left: 20px; gap: 10px">
          <li>
            Accès aux services essentiels (électricité, internet) pour réduire la vulnérabilité post-COVID ;
          </li>
          <li>
            Protection sociale pour atténuer les inégalités salariales et soutenir les travailleurs non rémunérés ;
          </li>
          <li>
            Transition énergétique domestique pour améliorer la santé infantile et réduire la mortalité, avec un effet marqué dans les ménages électrifiés.
          </li>
        </ul>
      </li>
      <li>
        Ces parcours illustrent l’excellence académique et l’engagement de la CAPEC dans la formation de la relève et la production de connaissances à partir de données probantes au service du développement de la Côte d’Ivoire.
      </li>
      <br/>
      <li>
        Félicitations à nos trois nouveaux Docteurs pour ces travaux qui renforcent l’expertise nationale en matière de politiques publiques, de modélisation économique et de stratégies inclusives.
      </li>  
    </ol>
    `,
  },
  {
    id: "22",
    title:
      "Le Dr Prof. Alban AHOURÉ élu Membre Honoraire de l’Académie Royale Européenne des Docteurs (RAED)",
    excerpt: "",
    date: "Le 17 janvier 2024",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Le Dr Prof. Alban AHOURÉ élu Membre Honoraire de l’Académie Royale Européenne des Docteurs (RAED)</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Le 17 janvier 2024, le Dr Prof. Alban AHOURÉ a été élu <b>Membre Honoraire</b> de la prestigieuse <b>Académie Royale Européenne des Docteurs (RAED)</b> par son Conseil d’Administration. 
        Il devient ainsi le <b>premier membre d’Afrique subsaharienne</b> à intégrer cette Académie, et le <b>deuxième Africain</b>, après un Marocain.
      </li>
      <li>
        Fondée il y a plus de 100 ans et basée à Barcelone, en Espagne, la RAED est une institution renommée qui œuvre depuis 1914 pour la défense du titre de &laquo; Docteur &raquo; et pour la promotion de l’harmonie et de la coopération entre ses membres, parmi lesquels figurent <b>19 lauréats du Prix Nobel</b> et de nombreux scientifiques de renom dans divers domaines <a rel="stylesheet" href="https://raed.academy/en/" target="_blank" style="color:#FF8000;font-weight:bold;">(RAED)</a>.
      </a>
      <li>
        La <b>leçon inaugurale</b> du Dr Prof. Ahouré, à l’occasion de sa nomination, a eu lieu le <b>jeudi 11 avril à Barcelone</b>, sur le thème :
        <b>&laquo; Capital humain et qualité des institutions : catalyseurs de l'accélération de la transformation structurelle des pays d'Afrique subsaharienne &raquo;.</b>
      </li>
      <li>
        L’événement a été <b>diffusé en direct sur YouTube à 16h30 GMT</b>. Pour plus d’informations, consultez le lien suivant : <a rel="stylesheet" href="https://raed.academy/eventos/el-dr-alban-ahoure-ingresa-como-academico-de-honor-de-la-raed/" target="_blank" style="color:#FF8000;font-weight:bold;">RAED – Dr Alban Ahouré</a>.
      </li>
    </ol>
    `,
  },
  {
    id: "21",
    title:
      "Visite du Professeur Esther Duflo, Prix Nobel d’Économie 2019, à la CAPEC",
    excerpt: "",
    date: "Le 16 janvier 2024",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Visite du Professeur Esther Duflo, Prix Nobel d’Économie 2019, à la CAPEC</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Le mardi 16 janvier 2024, la CAPEC a eu l’honneur d’accueillir le Professeur Esther Duflo, lauréate du Prix Nobel d’Économie 2019. 
        Cette visite a offert l’opportunité de présenter les travaux de la CAPEC, en particulier ses études quasi-expérimentales et expérimentales (RCT), et d’aborder les perspectives de collaboration avec le J-PAL (Jameel Poverty Action Lab).
        Il s’agissait de la deuxième visite du Professeur Esther Duflo à la CAPEC, sa première venue ayant eu lieu le 19 juillet 2023.
      </li>
    </ol>
    
    `,
  },
  {
    id: "20",
    title: "Séminaire de rentrée 2024 : Cap sur de nouveaux objectifs !",
    excerpt: "",
    date: "Le 11 au 13 janvier 2024",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Séminaire de rentrée 2024 : Cap sur de nouveaux objectifs !</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Du jeudi 11 au samedi 13 janvier 2024, la CAPEC a ouvert son séminaire de rentrée à Mondoukou/Bassam. 
        Trois jours intenses rythmés par des échanges enrichissants, des réflexions stratégiques et des moments de convivialité ont permis de célébrer les réussites de 2023 et de poser avec enthousiasme les ambitions pour 2024. 
        Un véritable tremplin pour démarrer l’année avec énergie et détermination !
      </li>
    </ol>
    `,
  },
  {
    id: "14",
    title:
      "Réunion de validation du projet de vision 2050 par les expert des etats membres de la CEDAO, du 10 au 12 Septembre 2021, Accra/Ghana",
    excerpt: "",
    date: "du 10 au 12 Septembre 2021",
    image:
      "/images/TOUTES LES ACTUALITES/REUNION DE VALIDATION DU PROJET DE VISION.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>La CAPEC contribue à la lutte contre la cherté de la vie.</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        La CAPEC, sur invitation du Secrétariat Général de la Présidence de Côte d’Ivoire, prend une part active dans la lutte contre la cherté de la vie, depuis juillet 2021, à travers la conduite de l’étude sur « l’Evolution récente du coût de la vie en Côte d’Ivoire », dont l’objectif a été d’apprécier l’ampleur du phénomène de vie chère/coût de la vie dans le vécu et ressenti par la population ivoirienne, d’identifier les biens, produits et services de grande consommation dont les prix ont augmenté, d’analyser le mécanisme de formation des prix ainsi que la structure des prix des produits répertoriés. Les recommandations ont permis de renforcer les mesures en cours en vue de réduire la cherté de la vie en Côte d’Ivoire.Sur sollicitation du PNUD, la CAPEC a mené de décembre 2022 à juin 2023, une « étude d’impacts de la crise Russo-ukrainienne sur l’économie ivoirienne ». Les résultats et les recommandations de cette étude ont servi de base d’élaboration de différentes notes de politiques et à enrichir des programmes et des projets des agences du Système des Nations Unies en Côte d’Ivoire.
      </li>
    </ol>
    <br/>
    <span style='color:#FF8000;font-weight:bold;'>La CAPEC, experte en analyse prospective</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        En mars 2020, la CAPEC a été sélectionnée par le Bureau sous-régional pour l’Afrique de l’Ouest de la Commission Économique Africaine afin d’accompagner la CEDEAO dans l’élaboration de sa Vision Prospective CEDEAO 2050. La CAPEC a reçu les félicitations du Conseil des Ministres du Plan et de l’Intégration de l’espace CEDEAO lors de sa session du 09 novembre 2021. Le document de Vision 2050 a été adopté par les chefs d’Etat de la CEDEAO à Accra en décembre 2021. A partir du scénario de référence « Le flambeau de l’Afrique », l’énoncé ci-après constitue le socle sur lequel repose la Vision 2050 de la CEDEAO : « Une Communauté de peuples pleinement intégrée dans une région paisible, prospère avec des institutions fortes et respectueuse des libertés fondamentales et œuvrant pour un développement inclusif et durable ».
      </li>
      <li>
        Pour le compte du PNUD Madagascar, la CAPEC a en 2021, conduit l’étude sur « La Vision Prospective 2030-2040-2063 de Madagascar ». A partir d’une étude diagnostique approfondie des traits caractéristiques de cet Etat, de l’examen des aspirations des populations et des acteurs clés, de l'analyse structurelle du système malgasy et de l'identification des futurs possibles et souhaitables pour la prospérité de ce pays, la vision prospective de Madagascar a été formulée comme suit : « Madagascar, un pôle économique régional, doté d’institutions fortes et stables, fondé sur une société à fort capital humain, sur une gestion optimale des ressources naturelles et sur la résilience climatique, pour un épanouissement harmonieux et durable des peuples. »
      </li>
      <li>
        La Commission de l’UEMOA, a porté son choix sur le Groupement CAPEC-CUAPTD (Chaire UNESCO Anticipations-Prospective et Territoires Durables) pour l’élaboration de la Vision 2040 de l’UEMOA.  Le projet de vision adopté par les commissaires s’énonce comme suit : « L’UEMOA, un espace durablement paisible et prospère, doté d’institutions fortes, catalyseur de l’intégration en Afrique de l’Ouest, ouvert sur l’Afrique, avec une position stratégique consolidée dans le monde »
      </li>
    </ol>`,
  },
  {
    id: "9",
    title:
      "Conférence internationale de cloture, Abidjan du projet de recherche sur l'impacts des politiques publiques liées à la pandemie de la Covid-19 sur les entreprises, les femmes et les jeunes: cas du Burkina  Faso, Cameroun, Cote d'Ivoire et du Sénégal'",
    excerpt: "",
    date: "jeudi 23 Mars 2023",
    image: "/images/TOUTES LES ACTUALITES/Conferenceinternationale.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Le rôle de la CAPEC dans la lutte contre la Covid-19</span><br/><ol style='margin-left:1em;'><li>En vue d’éclairer les politiques publiques en matière de lutte contre la Covid-19 en Côte d’Ivoire, la CAPEC a conduit, sur sollicitation de Monsieur le Ministre de l’Economie et des Finances, une <a href='#'>étude sur « l’Impact potentiel de la Covid-19 sur l’économie ivoirienne »</a>, en mars 2020. Les résultats et recommandations ont contribué à la conception du plan de riposte économique, social et humanitaire, annoncé par le Premier Ministre de la Côte d’Ivoire à cette période, Feu Monsieur Amadou Gon COULIBALY.</li><li>Six (06) mois après la mise en œuvre de ce plan de riposte, le Ministère de l’Economie et des Finances a recouru à la CAPEC pour effectuer une étude « d’Evaluation de l’impact économique et social des mesures prises face à la pandémie de la Covid-19 en Côte d’Ivoire ». Les simulations réalisées ont montré que les mesures prises par l’Etat ont permis d’atténuer les effets négatifs de la crise sanitaire sur l’économie.</li><li>La BAD en décembre 2020, a porté son choix sur la CAPEC pour la conduite des « Etudes de simulations d’impacts de la Covid-19 et de mesures de politiques économiques alternatives sur les économies camerounaise et gabonaise ». Un modèle d’équilibre général calculable (MEGC) dynamique a été élaboré pour chaque pays et a permis d’évaluer l’impact de politiques alternatives en faveur de la résilience de l’économie gabonaise et d’évaluer l’effet des politiques alternatives pour une croissance inclusive au Cameroun.</li><li>D’août 2020 à février 2023, la CAPEC à la tête d’une équipe de quatre centres de recherche d’Afrique Subsaharienne, a conduit un projet de recherche portant sur le thème « Impacts des politiques publiques liées à la pandémie de la Covid-19 sur les entreprises, les femmes et les jeunes : cas du Burkina-Faso, du Cameroun, de la Côte d’Ivoire et du Sénégal », financé par le Centre de Recherches pour le Développement International (CRDI) du Canada. Les résultats ont été présentés lors de la conférence internationale de clôture à Abidjan en mars 2023.Sur sollicitation du PNUD, la CAPEC a mené de décembre 2022 à juin 2023, une <b>étude d’impacts de la crise Russo-ukrainienne sur l’économie ivoirienne</b>. Les résultats et les recommandations de cette étude ont servi de base d’élaboration de différentes notes de politiques et à enrichir des programmes et des projets des agences du Système des Nations Unies en Côte d’Ivoire.</li></ol><br/><span style='color:#FF8000;font-weight:bold;'>La CAPEC, experte en analyse prospective</span><br/><ol style='margin-left:1em;'><li>En mars 2020, la CAPEC a été sélectionnée par le Bureau sous-régional pour l’Afrique de l’Ouest de la Commission Économique Africaine afin d’accompagner la CEDEAO dans l’élaboration de sa Vision Prospective CEDEAO 2050. La CAPEC a reçu les félicitations du Conseil des Ministres du Plan et de l’Intégration de l’espace CEDEAO lors de sa session du 09 novembre 2021. Le document de Vision 2050 a été adopté par les chefs d’Etat de la CEDEAO à Accra en décembre 2021. A partir du scénario de référence « Le flambeau de l’Afrique », l’énoncé ci-après constitue le socle sur lequel repose la Vision 2050 de la CEDEAO : « Une Communauté de peuples pleinement intégrée dans une région paisible, prospère avec des institutions fortes et respectueuse des libertés fondamentales et œuvrant pour un développement inclusif et durable ».</li><li>Pour le compte du PNUD Madagascar, la CAPEC a en 2021, conduit l’étude sur « La Vision Prospective 2030-2040-2063 de Madagascar ». A partir d’une étude diagnostique approfondie des traits caractéristiques de cet Etat, de l’examen des aspirations des populations et des acteurs clés, de l'analyse structurelle du système malgasy et de l'identification des futurs possibles et souhaitables pour la prospérité de ce pays, la vision prospective de Madagascar a été formulée comme suit : « Madagascar, un pôle économique régional, doté d’institutions fortes et stables, fondé sur une société à fort capital humain, sur une gestion optimale des ressources naturelles et sur la résilience climatique, pour un épanouissement harmonieux et durable des peuples. »</li><li>La Commission de l’UEMOA, a porté son choix sur le Groupement CAPEC-CUAPTD (Chaire UNESCO Anticipations-Prospective et Territoires Durables) pour l’élaboration de la Vision 2040 de l’UEMOA.  Le projet de vision adopté par les commissaires s’énonce comme suit : « L’UEMOA, un espace durablement paisible et prospère, doté d’institutions fortes, catalyseur de l’intégration en Afrique de l’Ouest, ouvert sur l’Afrique, avec une position stratégique consolidée dans le monde ».Respect de la distanciation sociale. Les résultats d’estimation montrent que le programme a le potentiel d’inculquer une culture entrepreneuriale aux jeunes vulnérables. En effet, il augmente la propension à l’entrepreneuriat de près de 30%.</li></ol>`,
  },
  {
    id: "15",
    title:
      "Reunion du Comité indépendant de lecture et 4ème réunion du Comité de pilotage de l'Etude relative a l'Elaboration de la vision 2040 de l'UEMOA, 10 au 16 septembre 2023 –Ouagadougou/Burkina Faso",
    excerpt: "",
    date: "10 au 16 septembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ReunionComite.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>La CAPEC contribue à la lutte contre la cherté de la vie.</span><br/><ol style='margin-left:1em;'><li>La CAPEC, sur invitation du Secrétariat Général de la Présidence de Côte d’Ivoire, prend une part active dans la lutte contre la cherté de la vie, depuis juillet 2021, à travers la conduite de l’étude sur « l’Evolution récente du coût de la vie en Côte d’Ivoire », dont l’objectif a été d’apprécier l’ampleur du phénomène de vie chère/coût de la vie dans le vécu et ressenti par la population ivoirienne, d’identifier les biens, produits et services de grande consommation dont les prix ont augmenté, d’analyser le mécanisme de formation des prix ainsi que la structure des prix des produits répertoriés. Les recommandations ont permis de renforcer les mesures en cours en vue de réduire la cherté de la vie en Côte d’Ivoire.Sur sollicitation du PNUD, la CAPEC a mené de décembre 2022 à juin 2023, une « étude d’impacts de la crise Russo-ukrainienne sur l’économie ivoirienne ». Les résultats et les recommandations de cette étude ont servi de base d’élaboration de différentes notes de politiques et à enrichir des programmes et des projets des agences du Système des Nations Unies en Côte d’Ivoire.</li></ol><br/><span style='color:#FF8000;font-weight:bold;'>La CAPEC, experte en analyse prospective</span><br/><ol style='margin-left:1em;'><li>En mars 2020, la CAPEC a été sélectionnée par le Bureau sous-régional pour l’Afrique de l’Ouest de la Commission Économique Africaine afin d’accompagner la CEDEAO dans l’élaboration de sa Vision Prospective CEDEAO 2050. La CAPEC a reçu les félicitations du Conseil des Ministres du Plan et de l’Intégration de l’espace CEDEAO lors de sa session du 09 novembre 2021. Le document de Vision 2050 a été adopté par les chefs d’Etat de la CEDEAO à Accra en décembre 2021. A partir du scénario de référence « Le flambeau de l’Afrique », l’énoncé ci-après constitue le socle sur lequel repose la Vision 2050 de la CEDEAO : « Une Communauté de peuples pleinement intégrée dans une région paisible, prospère avec des institutions fortes et respectueuse des libertés fondamentales et œuvrant pour un développement inclusif et durable ».</li><li>Pour le compte du PNUD Madagascar, la CAPEC a en 2021, conduit l’étude sur « La Vision Prospective 2030-2040-2063 de Madagascar ». A partir d’une étude diagnostique approfondie des traits caractéristiques de cet Etat, de l’examen des aspirations des populations et des acteurs clés, de l'analyse structurelle du système malgasy et de l'identification des futurs possibles et souhaitables pour la prospérité de ce pays, la vision prospective de Madagascar a été formulée comme suit : « Madagascar, un pôle économique régional, doté d’institutions fortes et stables, fondé sur une société à fort capital humain, sur une gestion optimale des ressources naturelles et sur la résilience climatique, pour un épanouissement harmonieux et durable des peuples. »</li><li>La Commission de l’UEMOA, a porté son choix sur le Groupement CAPEC-CUAPTD (Chaire UNESCO Anticipations-Prospective et Territoires Durables) pour l’élaboration de la Vision 2040 de l’UEMOA.  Le projet de vision adopté par les commissaires s’énonce comme suit : « L’UEMOA, un espace durablement paisible et prospère, doté d’institutions fortes, catalyseur de l’intégration en Afrique de l’Ouest, ouvert sur l’Afrique, avec une position stratégique consolidée dans le monde »</li></ol>`,
  },
  {
    id: "5",
    title:
      "4ème Edition des Conférences internationales  sur les Etudes Japonaises 09 fev 23 ",
    excerpt: "",
    date: "09  fev 23",
    image: "/images/TOUTES LES ACTUALITES/conference.jpg",
  },
  {
    id: "6",
    title:
      "9ème édition Africa Think Tanks… ACBF 08 au 10 Novembre 2023, Lusaka/ZAMBIE.",
    excerpt: "",
    date: " 08 au 10 Novembre 2023",
    image: "/images/TOUTES LES ACTUALITES/ACBF.jpeg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Continuité de la collaboration CAPEC-ACBF</span><br/><p>Créée dans le cadre d’un 1er accord de don signé en 1993 entre l’ACBF et l’Etat de Côte d’Ivoire représenté par l’Université Félix Houphouët Boigny, la CAPEC a maintenu une collaboration forte avec l’institution. Le Directeur de la CAPEC a pris part au 9ème sommet des Think Tank d’Afrique organisé par l’ACBF, du 08 au 10 novembre 2023 à Lusaka en ZAMBIE. Il était membre du panel sur « Utilisation de données probantes pour soutenir la mise en œuvre de la ZLECAf.</p>`,
  },
  {
    id: "7",
    title:
      "Cérémonie d'ouverture officiel du JAPAN CORNER de l'UFHB - 1er Juin 2023",
    excerpt: "",
    date: "Publié le 1er Juin 2023",
    image: "/images/TOUTES LES ACTUALITES/Ceremonie.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>La CAPEC et la Coopération Ivoiro-japonaise</span><br/><ol style='margin-left:1em;'><li>La 4ème édition des conférences sur les études japonaises en Afrique de l'Ouest francophone ayant pour thème : « Croissance économique, inclusion sociale et protection de l'Environnement en Afrique : leçons de l'histoire du développement au Japon », a eu lieu le 09 février 2023, à l’Université FHB de Cocody. Financée par la Japan Foundation, cette conférence a réuni des chercheurs du Bénin, du Burkina Faso, de la Côte d’Ivoire, de la Mauritanie, du Niger, du Sénégal, du Togo et du Japon.</li><li>La CAPEC a préparé un projet et a obtenu du Gouvernement Japonais, le financement de la création d’un Centre dit « Japan Corner de l’UFHB », 1er en Afrique de l’Ouest Francophone. Ce centre a été inauguré le 1er juin 2023, par Monsieur le Ministre de l’Enseignement Supérieur et de la Recherche Scientifique (représenté par son Directeur de Cabinet) et par Son Excellence Monsieur IKKATAI Katsuya, Ambassadeur du Japon en Côte d’Ivoire.Les impacts des politiques publiques liées à la pandémie de la Covid-19 sur les entreprises, les femmes et les jeunes :</b> cas du Burkina-Faso, du Cameroun, de la Côte d’Ivoire et du Sénégal » (Août 2020 – Mars 2023) ; « L’inclusion économique des jeunes et des femmes par l’entrepreneuriat inclusif : cas de la Côte d’Ivoire, du Burkina Faso et du Kenya » (Septembre 2017-Octobre 2019) ;</li></ol> <br/><p><b>Trois études sur le genre</b><br/> « Préparation d’un rapport thématique sur la mise en œuvre de l’ODD 5 » (ONU FEMMES, 2022-2023) ; « Evaluation des opportunités pour les femmes dans les opérations de paix des Nations Unies en Côte d’Ivoire » (ONU FEMMES, 2021-2023) ; « Elaboration du profil genre régional de l’Afrique centrale et des profils nationaux du Tchad, du Congo, du Gabon et de la Guinée équatoriale » (BAD, 2021-2023).</p><p><b>Compétitivité et performance du secteur privé</b><br/>« Étude sur les défis de la compétitivité de l’économie ivoirienne » (ONCE, 2019) ; « Étude de la compétitivité du sucre ivoirien » (SUCAF-SUCRIVOIRE, 2018) ; « Déterminants de la performance des entreprises en Afrique francophone à partir des cas de la Côte d’Ivoire, du Sénégal et du Cameroun » (CRDI, 2013 - 2015).</p><p><b>Secteur privé et inclusion économique</b><br/> « Accès aux marchés publics des petites et moyennes entreprises installées dans les collectivités » (Ministère Budget et du Portefeuille de l’État, 2021). « Inclusion économique des jeunes et des femmes par l’entreprenariat inclusif : cas de la Côte d’Ivoire, du Burkina Faso et du Kenya » (CRDI, 2017 - 2019) ;</p><p><b>L’impact des chocs exogènes et des politiques publiques sur le secteur privé</b><br/> « Impacts des politiques publiques liées à la pandémie de la Covid-19 sur les entreprises, les femmes et les jeunes : cas du Burkina-Faso, du Cameroun, de la Côte d’Ivoire et du Sénégal » (CRDI, 2020 - 2023).</p><p>Des recommandations concrètes ont été formulées à l’issue des échanges, en vue d’améliorer le financement et la structuration des écosystèmes de données en Afrique, condition essentielle pour orienter efficacement les politiques publiques et renforcer les capacités des acteurs locaux.</p>`,
  },
  {
    id: "8",
    title:
      "Conférence de cloture du Projet de Recherche PEP sur l'impact socio-economique des jeunes vulnérables en Cote d'Ivoire, Abidjan, 21 Oct 2021",
    excerpt: "",
    date: "Publié le 21 Oct 2021",
    image: "/images/conferencedecloture.jpeg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>2023-Année de la Jeunesse- La CAPEC : un instrument d’orientation des politiques publiques en faveur de l’insertion socioprofessionnelle des jeunes</span><br/><ol style='margin-left:1em;'><li>La CAPEC a conduit un projet de recherche portant sur le thème « Étude d’impact de l’insertion socio-économique des jeunes vulnérables en Côte d’Ivoire » financé par le Partnership for Economic Policy (PEP) et le Centre de Recherche pour le Développement International (CRDI) du Canada. Cette étude s'est fondée sur le contexte post-conflit de la Côte d'Ivoire pour évaluer l'impact de la formation à la citoyenneté sur l’inclusion sociale des jeunes vulnérables. A partir d’un essai contrôlé randomisé (RCT), il est montré un impact positif de l'intervention sur la réduction de la criminalité, de la toxicomanie, de la consommation d'alcool et des attributs violents, d'une part, et des effets significatifs et positifs sur l'altruisme, la réciprocité positive, la préférence pour le risque et la satisfaction de la vie, d'autre part. Cependant, le programme a un effet positif et significatif sur l'impatience, l'insatisfaction de vie et l'impulsivité chez les femmes, montrant ainsi un certain biais de genre. Les conclusions de cette évaluation ont orienté le gouvernement ivoirien dans sa décision de passage à échelle des centres de service civique lors du conseil des ministres du 07 juillet 2021.</li><li>La CAPEC a bénéficié d’un financement du Centre de Recherches pour le Développement International (CRDI) du Canada ainsi que du Partnership for Economic Policy (PEP) pour la mise en œuvre d’un projet de recherche sur l’analyse des politiques publiques liées à la Covid-19 sur les personnes et entreprises vulnérables dans quatre (4) pays d’Afrique : Burkina-Faso, Cameroun, Côte d’Ivoire et Sénégal. Ce projet comprenait un volet d’étude expérimentale portant sur « l’évaluation des mesures de mitigation des effets de la COVID-19 sur les jeunes vulnérables ». Il s’est agi d’offrir une intervention (politique publique) à ces jeunes, sous forme de protection sociale déclinée en trois modules (paquet de mitigation) : un transfert monétaire, une campagne d’information sur la Covid-19 et une éducation entrepreneuriale, dans un cadre d’essai contrôlé randomisé (RCT). Le paquet de mitigation a un impact significatif sur les croyances et inquiétude à l’égard de la covid-19. Le programme a un effet positif et significatif sur la propension à s’engager dans le respect de la distanciation sociale. Les résultats d’estimation montrent que le programme a le potentiel d’inculquer une culture entrepreneuriale aux jeunes vulnérables. En effet, il augmente la propension à l’entrepreneuriat de près de 30%.</li></ol>`,
  },
  {
    id: "11",
    title:
      "Cérémonie de lancement du Projet de recherche sur «Impact des programmes socio-éducatifs communautaires d’encadrement de la petite enfance sur l’autonomisation des femmes dans les zones défavorisées sur Burkina Faso et de la Côte d’Ivoire » Abidjan 22 juillet 2021",
    excerpt: "",
    date: " 22 juillet 2021",
    image: "/images/converted_img6.png",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Évaluation d’impact microéconomique</span><br/><p>La CAPEC a développé une expertise en matière de conduite d’évaluation d’impact.</p><p>Les études dans lesquelles la méthode expérimentale (RCT) « Évaluation des mesures de mitigation des effets de la COVID-19 sur les jeunes vulnérables en Côte d'Ivoire » (Centre de Recherches pour le Développement International (CRDI) du Canada/ Partnership for Economic Policy (PEP), 2020-2023) ; « Étude d’impact de l’insertion socio-économique des jeunes vulnérables en Côte d’Ivoire » (Partnership for Economic Policy (PEP)/ Centre de Recherches pour le Développement International (CRDI) du Canada, Août 2019 – Février 2021).</p><p>Des projets de recherche fondés sur la méthode quasi-expérimentale : « Impact des programmes socio-éducatifs communautaires d’encadrement de la petite enfance sur l’autonomisation de la femme des zones défavorisées du Burkina Faso et de la Côte d’Ivoire » (CRDI, 2021 - 2023) ;</p>`,
  },
  {
    id: "12",
    title: "panel de haut niveau Lors de la celebration des 30 ans de la CAPEC",
    excerpt: "",
    date: "",
    image: "/images/converted_img7.png",
  },
  {
    id: "13",
    title:
      "Restitution des 03 études sur «La problématique du changement du taux de l’impôt BIC » , « La rationalisation du code des investissements ».Abidjan, 02 Février 2023",
    excerpt: "",
    date: "02 Février 2023",
    image: "/images/TOUTES LES ACTUALITES/RESTITUTION BUDGET.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Politique fiscale, genre et secteur privé</span><br/><span style='color:#FF8000;font-weight:bold;'>Politique fiscale</span><br/><p>La mobilisation des recettes fiscales et l’élargissement de l’assiette fiscale sont au cœur de la politique fiscale du gouvernement ivoirien. Ainsi, le Ministère du Budget et du Portefeuille de l’Etat a sollicité la CAPEC pour la réalisation de sept (07 études), entre 2019 et 2022, portant sur : « La problématique du changement du taux de l’impôt BIC » (2022) ; « La problématique de réduction du taux normal de la TVA » (2022) ; « La rationalisation du code des investissements » (2022) ; « La prévisibilité de la politique fiscale en Côte d’Ivoire » (2020) ; « L’évaluation de l'impact des régimes dérogatoires fiscaux et douaniers » (2020) ; « L’impact de la mise en œuvre des mesures d’une politique fiscale rénovée en Côte d’Ivoire » (2020) ; « L’impact du code des investissements 2018 » (2020). La CAPEC a conduit également en 2022, une étude pour le compte de l’Autorité de Radioprotection, de Sureté et Sécurité Nucléaires (ARSN) qui porte sur l’institution d’une parafiscalité adaptée au financement de l’ARSN.</p><span style='color:#FF8000;font-weight:bold;'> <br/>Genre</span><br/><p>Trois projets de recherche récents financés par le CRDI du Canada portent sur le genre : « L’impact des programmes socio-éducatifs communautaires d’encadrement de la petite enfance sur l’autonomisation de la femme des zones défavorisées du Burkina Faso et de Côte d’Ivoire » (Janvier 2020 – juin 2023).Les impacts des politiques publiques liées à la pandémie de la Covid-19 sur les entreprises, les femmes et les jeunes : cas du Burkina-Faso, du Cameroun, de la Côte d’Ivoire et du Sénégal » (Août 2020 – Mars 2023) ; « L’inclusion économique des jeunes et des femmes par l’entrepreneuriat inclusif : cas de la Côte d’Ivoire, du Burkina Faso et du Kenya » (Septembre 2017-Octobre 2019) ;</p><span style='color:#FF8000;font-weight:bold;'>Trois études sur le genre</span><br/><p>« Préparation d’un rapport thématique sur la mise en œuvre de l’ODD 5 » (ONU FEMMES, 2022-2023) ; « Evaluation des opportunités pour les femmes dans les opérations de paix des Nations Unies en Côte d’Ivoire » (ONU FEMMES, 2021-2023) ; « Elaboration du profil genre régional de l’Afrique centrale et des profils nationaux du Tchad, du Congo, du Gabon et de la Guinée équatoriale » (BAD, 2021-2023).</p><span style='color:#FF8000;font-weight:bold;'>Compétitivité et performance du secteur privé</span><br/><p>« Étude sur les défis de la compétitivité de l’économie ivoirienne » (ONCE, 2019) ; « Étude de la compétitivité du sucre ivoirien » (SUCAF-SUCRIVOIRE, 2018) ; « Déterminants de la performance des entreprises en Afrique francophone à partir des cas de la Côte d’Ivoire, du Sénégal et du Cameroun » (CRDI, 2013 - 2015).</p><span style='color:#FF8000;font-weight:bold;'>Secteur privé et inclusion économique</span><br/><p>« Accès aux marchés publics des petites et moyennes entreprises installées dans les collectivités » (Ministère Budget et du Portefeuille de l’État, 2021). « Inclusion économique des jeunes et des femmes par l’entreprenariat inclusif : cas de la Côte d’Ivoire, du Burkina Faso et du Kenya » (CRDI, 2017 - 2019) ;</p><span style='color:#FF8000;font-weight:bold;'>L’impact des chocs exogènes et des politiques publiques sur le secteur privé</span><br/><p>« Impacts des politiques publiques liées à la pandémie de la Covid-19 sur les entreprises, les femmes et les jeunes : cas du Burkina-Faso, du Cameroun, de la Côte d’Ivoire et du Sénégal » (CRDI, 2020 - 2023).</p>`,
  },
  {
    id: "16",
    title:
      "Le Forum EPA, organisé en partenariat avec l’ACED, s’est tenu à Abidjan les 6 et 7 novembre 2024. Cet événement majeur a réuni des acteurs clés du développement issus de divers horizons pour réfléchir ensemble aux voies d’un développement inclusif en Afrique francophone.",
    excerpt: "",
    date: "6 et 7 novembre 2024",
    image: "/images/photo/converted_img_c.png",
    mot: `<span style='color:#FF8000;font-weight:bold;'>📍 Forum EPA – En partenariat avec l’ACED</span><br/><p>Le Forum EPA, organisé en partenariat avec l’ACED, s’est tenu à Abidjan les 6 et 7 novembre 2024. Cet événement majeur a réuni des acteurs clés du développement issus de divers horizons pour réfléchir ensemble aux voies d’un développement inclusif en Afrique francophone.</p><p>La première journée a débuté par une session informelle, conçue pour instaurer un climat de confiance propice à des échanges ouverts et constructifs. Cette entrée en matière a été suivie par une série de discussions approfondies sur les écosystèmes nationaux de production et d’utilisation de données probantes dans les pays de la région.</p><p>Un temps fort de cette journée a été le lancement officiel de la Communauté de Pratiques régionales, une initiative fédérant plusieurs pays africains autour du partage d’expériences, de savoir-faire et de bonnes pratiques en matière de politiques publiques fondées sur les données.</p><p>La journée s’est clôturée par un « marché des solutions », espace dynamique d’échanges où ont été présentées des initiatives innovantes, notamment dans la lutte contre la désinformation, un enjeu majeur pour la gouvernance et la participation citoyenne.</p><p>La seconde journée du forum a mis l’accent sur le rôle central des données probantes pour un développement durable et équitable. Les participants ont abordé plusieurs thématiques structurantes, telles que le financement de la recherche africaine, la valorisation des connaissances locales, ou encore les défis liés aux transitions politiques sur le continent.</p><p>Des recommandations concrètes ont été formulées à l’issue des échanges, en vue d’améliorer le financement et la structuration des écosystèmes de données en Afrique, condition essentielle pour orienter efficacement les politiques publiques et renforcer les capacités des acteurs locaux.</p><br/><ul><li>Un inventaire des innovations agricoles adoptées à travers le pays ;</li><br/><li>Une analyse de leur diffusion et de leur adoption réelle par les agriculteurs ;</li><br/><li>Une évaluation des politiques publiques qui soutiennent leur développement.</li></ul>`,
  },
  {
    id: "17",
    title:
      "l’Université Félix Houphouët-Boigny de Cocody a accueilli la Conférence Internationale Japan Corner - JICA - CAPEC sur le thème : « Faire progresser l’industrialisation et améliorer la productivité du travail : une voie pour le développement de l’économie ivoirienne ».",
    excerpt: "",
    date: "Le 22 février 2024",
    image: "/images/japan.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Conférence Internationale Japan Corner - JICA - CAPEC</span><br/><p>Le 22 février 2024, l’Université Félix Houphouët-Boigny de Cocody a accueilli la Conférence Internationale Japan Corner - JICA - CAPEC sur le thème : « Faire progresser l’industrialisation et améliorer la productivité du travail : une voie pour le développement de l’économie ivoirienne ».</p><p>La cérémonie d’ouverture a réuni des personnalités clés, dont Mme KABA Nialé, Ministre de l’Économie, le Représentant résident de la JICA, l’Ambassadeur du Japon et le Prof. MITANI Naoki, qui a présenté le modèle japonais de développement des ressources humaines.</p><p>Il a retracé trois phases historiques ayant conduit au succès économique du Japon, malgré ses ressources naturelles limitées :</p><ol style='margin-left:1em;'><li>1. Éducation et modernisation (ère Edo-Meiji).</li><li>2. Formation d’une main-d’œuvre qualifiée (ère Taisho-Showa).</li><li>3. Réformes éducatives et formation continue (après-guerre).</li></ol><p>Ces stratégies japonaises – accès universel à l’éducation, formation en entreprise et évaluation équitable des compétences – offrent des enseignements précieux pour renforcer la productivité et la motivation des travailleurs en Côte d’Ivoire.</p><p>Mme KABA Ministre de l’Économie a souligné la pertinence de ce modèle pour accompagner la transformation socio-économique ivoirienne.</p>`,
  },
  {
    id: "18",
    title:
      "Le Professeur Alban AHOURÉ, Directeur de la CAPEC, a été nominé à la 6ᵉ édition du Who's Who in Côte d'Ivoire, un événement annuel honorant l'excellence ivoirienne dans divers secteurs.",
    excerpt: "",
    date: "le 3 décembre 2024 ",
    image: "/images/photo/converted_img_j.png",
    mot: `<span style='color:#FF8000;font-weight:bold;'>• Le Professeur Alban AHOURÉ nominé au Who's Who in Côte d'Ivoire 2024</span><br/><p>Le Professeur Alban AHOURÉ, Directeur de la CAPEC, a été nominé à la 6ᵉ édition du Who's Who in Côte d'Ivoire, un événement annuel honorant l'excellence ivoirienne dans divers secteurs. Cette distinction, qui met en lumière les talents les plus remarquables du pays, a vu la sélection de 146 personnalités, ivoiriens résidant en Côte d'Ivoire ou à l'étranger. Le Prof. AHOURÉ a une présence constante depuis la première édition en 2019. La CAPEC et le Japan Corner de l'UFHB se réjouissent de cette reconnaissance. La cérémonie de présentation a eu lieu le 3 décembre 2024 au CRRAE-UMOA, à Abidjan.</p>`,
  },
  {
    id: "19",
    title:
      "Lancement du projet SPIA en Côte d’Ivoire : une nouvelle dynamique pour l’agriculture ivoirienne le 15 mai 2025",
    excerpt: "",
    date: "Le 15 mai 2025",
    image: "/images/Atelier.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>• Lancement du projet SPIA en Côte d’Ivoire : une nouvelle dynamique pour l’agriculture ivoirienne</span><br/>
          <p>Dans le cadre de son programme de recherche, le Standing Panel on Impact Assessment (SPIA), en collaboration avec l’Université Félix Houphouët-Boigny à travers la CAPEC et l’Université de Bordeaux, a lancé en Côte d’Ivoire un projet pilote ambitieux visant à développer des approches intégrées d’évaluation des innovations agricoles. Ce projet s’inscrit dans un contexte de transformation du secteur agricole, marqué par un fort besoin d’innovations efficaces, d’évaluations rigoureuses et de valorisation des résultats scientifiques.</p>
          <p>L’objectif principal du projet est de recenser les innovations agricoles liées au réseau CGIAR, d’analyser leur adoption par les agriculteurs, et d’étudier les politiques publiques favorisant leur diffusion. À terme, il s’agit de produire des données fiables et utiles pour éclairer les décisions en matière de développement agricole et renforcer la contribution de la recherche à l’élaboration de politiques publiques plus efficaces.</p>
          <p>La première phase du projet consiste à identifier les innovations existantes, cartographier les zones concernées et analyser leur niveau d’adoption. Le projet s’articule autour de trois axes :</p>
          <ul style="list-style-type: disc; padding-left: 20px;">
            <li>Un inventaire des innovations agricoles adoptées à travers le pays ;</li>
            <li>Une analyse de leur diffusion et de leur adoption réelle par les agriculteurs ;</li>
            <li>Une évaluation des politiques publiques qui soutiennent leur développement.</li>
          </ul>
          <p>Le lancement officiel du projet a eu lieu <b>le 15 mai 2025 à Abidjan</b>, lors d’un atelier organisé à l’hôtel Silver Moon. Cet événement a rassemblé chercheurs, décideurs publics, acteurs du secteur agricole et partenaires techniques. Il visait à présenter le projet, mobiliser les parties prenantes et favoriser leur engagement actif.</p>
          <p>Dans son allocution d’ouverture, Mme Kouadio Sylvie Zoh, représentante du Directeur général de la Planification, des Statistiques et des Projets du MEMINADER, a salué l’approche participative du projet et insisté sur l’importance de l’implication des acteurs locaux pour une orientation efficace des investissements publics et privés. Elle a souligné que cette initiative ouvre la voie à une agriculture ivoirienne plus résiliente, inclusive et durable, fondée sur la science, l’innovation et la concertation.</p>
          <p>Le Professeur Ahoure Alban, Directeur de la CAPEC, a clôturé l’atelier en remerciant les participants pour leur engagement. Il a rappelé que ce projet incarne une démarche collective, ancrée dans les réalités locales mais inspirée par les meilleures pratiques internationales. Il a mis l’accent sur le rôle déterminant de la recherche pour éclairer les politiques publiques et améliorer le bien-être des populations rurales.</p>`,
  },
];

export async function generateStaticParams() {
  return newsList.map((news) => ({
    id: news.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = newsList.find((n) => n.id === id);
  if (!news) return notFound();

  const currentIndex = newsList.findIndex((n) => n.id === id);
  const nextIndex = (currentIndex + 1) % newsList.length;
  const nextId = newsList[nextIndex].id;
  const isLast = currentIndex === newsList.length - 1;

  // Assurez-vous d'avoir ce fichier dans votre projet.

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-8 sm:py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Actualité
          </h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1 flex flex-col">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/90 px-2 py-3 rounded-b-lg shadow text-center">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {news.title}
                </h2>
                <div className="flex items-center justify-center text-muted-foreground text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground flex flex-col justify-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div
                className="text-base sm:text-lg text-gray-800 text-justify space-y-4 [&>p]:mb-4 [&>ol]:mb-4 [&>ol>li]:mb-2"
                dangerouslySetInnerHTML={{
                  __html:
                    news.mot ||
                    "Aucun mot associé pour cette actualité pour le moment.",
                }}
              />
            </div>
            <div className="mt-6 flex justify-between items-center">
              {isLast ? (
                <a
                  href="/activites/actualites"
                  className="inline-flex items-center gap-1 text-ci-orange font-semibold hover:underline text-base"
                >
                  Retour
                  <ChevronRight className="h-5 w-5" />
                </a>
              ) : (
                <a
                  href={`/activites/actualites/infos/${nextId}`}
                  className="inline-flex items-center gap-1 text-ci-orange font-semibold hover:underline text-base"
                >
                  Voir l’actualité suivante
                  <ChevronRight className="h-5 w-5" />
                </a>
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
