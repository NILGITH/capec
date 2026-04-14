import { notFound } from "next/navigation";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";
import { ChevronRight, Eye } from "lucide-react";
import { useState } from "react";
import { PdfViewerButton } from "./PdfViewerButton";
import { Button } from "@/components/ui/button";
import { sortNewsByDate } from "@/lib/utils";

// Simule la même liste que dans page.tsx (à factoriser plus tard)
const newsList = [
  {
    id: "36",
    title: "3e CONFERENCE INTERNATIONALE Japan Corner – CAPEC – JICA",
    excerpt: "",
    date: "05 mars 2026",
    image: "/images/Actualites/Symposium_Post-TICAD_9_05_Mars_2026.jpeg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
   3e CONFERENCE INTERNATIONALE Japan Corner – CAPEC – JICA – Fondation TODAbidjan / JICA Chair 2026
  </span>
  <br/><br/>
Le jeudi 05 mars 2026, six mois après la 9e Conférence internationale de Tokyo sur le Développement de l’Afrique (TICAD 9) tenue du 20 au 22 août 2025 à Yokohama, le Japan Corner de l’Université Félix Houphouët-Boigny et la Cellule d’Analyse de Politiques Economiques du CIRES (CAPEC), 
avec l’appui de l’Ambassade du Japon en Côte d’Ivoire, ont organisé un symposium Post-TICAD9, à l’ENSEA de Cocody. Cette rencontre scientifique avait pour thème :  « 𝐂𝐨-𝐜𝐫𝐞́𝐞𝐫 𝐥𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐥𝐚 𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 𝐚̀ 𝐥’𝐡𝐨𝐫𝐢𝐳𝐨𝐧 𝟐𝟎𝟑𝟎 : 𝐩𝐚𝐫𝐭𝐞𝐧𝐚𝐫𝐢𝐚𝐭𝐬 𝐉𝐚𝐩𝐨𝐧–𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 𝐩𝐨𝐬𝐭-𝐓𝐈𝐂𝐀𝐃 𝟗 𝐩𝐨𝐮𝐫 𝐮𝐧 𝐝𝐞́𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐦𝐞𝐧𝐭 𝐯𝐞𝐫𝐭, 𝐧𝐮𝐦𝐞́𝐫𝐢𝐪𝐮𝐞 𝐞𝐭 𝐢𝐧𝐜𝐥𝐮𝐬𝐢𝐟 ».

<br /><br />
Ce symposium qui a mobilisé 12 panélistes du Japon, de la France et de la Côte d’Ivoire, et d’institutions comme la BAD et le PNUD et près de 200 participants, était placé sous 𝐥𝐚 𝐏𝐑𝐄𝐒𝐈𝐃𝐄𝐍𝐂𝐄 𝐞𝐭 𝐥𝐚 𝐩𝐫𝐞́𝐬𝐞𝐧𝐜𝐞 𝐞𝐟𝐟𝐞𝐜𝐭𝐢𝐯𝐞 𝐝𝐮 𝐃𝐨𝐜𝐭𝐞𝐮𝐫 𝐄𝐮𝐠𝐞̀𝐧𝐞 𝐀𝐊𝐀 𝐀𝐎𝐔𝐄𝐋𝐄, 𝐏𝐫𝐞́𝐬𝐢𝐝𝐞𝐧𝐭 𝐝𝐮 𝐂𝐨𝐧𝐬𝐞𝐢𝐥 𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐪𝐮𝐞, 𝐒𝐨𝐜𝐢𝐚𝐥, 𝐄𝐧𝐯𝐢𝐫𝐨𝐧𝐧𝐞𝐦𝐞𝐧𝐭𝐚𝐥 𝐞𝐭 𝐂𝐮𝐥𝐭𝐮𝐫𝐞𝐥 (𝐂𝐄𝐒𝐄𝐂)  et sous 𝐥𝐞 𝐏𝐀𝐑𝐑𝐀𝐈𝐍𝐀𝐆𝐄 𝐝𝐮 𝐃𝐨𝐜𝐭𝐞𝐮𝐫 𝐒𝐨𝐮𝐥𝐞𝐲𝐦𝐚𝐧
  <br/>

  `,
  },
  {
    id: "35",
    title: "📢 𝐒𝐘𝐌𝐏𝐎𝐒𝐈𝐔𝐌 𝐏𝐎𝐒𝐓-𝐓𝐈𝐂𝐀𝐃 𝟗",
    excerpt: "",
    date: "13 fevrier 2026",
    image:
      "/images/Actualites/3e_Edition_des_conference_JICA_CHAIR_2026_13_Fevrier_2026.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
   📢 𝐒𝐘𝐌𝐏𝐎𝐒𝐈𝐔𝐌 𝐏𝐎𝐒𝐓-𝐓𝐈𝐂𝐀𝐃 𝟗
  </span>
  <br/><br/>
Le Japan Corner de l’Université Félix Houphouët-Boigny, 
la Cellule d’Analyse de Politiques Économiques du CIRES (CAPEC) en collaboration avec  
l’Ambassade du Japon en Côte d’Ivoire  organisent un symposium sur le thème :
<br />
« 𝐂𝐨-𝐜𝐫𝐞́𝐞𝐫 𝐥𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐥𝐚 𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 𝐚̀ 𝐥’𝐡𝐨𝐫𝐢𝐳𝐨𝐧 𝟐𝟎𝟑𝟎 : 𝐩𝐚𝐫𝐭𝐞𝐧𝐚𝐫𝐢𝐚𝐭𝐬 𝐉𝐚𝐩𝐨𝐧–𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 𝐩𝐨𝐬𝐭-𝐓𝐈𝐂𝐀𝐃 𝟗 𝐩𝐨𝐮𝐫 𝐮𝐧 𝐝𝐞́𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐦𝐞𝐧𝐭 𝐯𝐞𝐫𝐭, 𝐧𝐮𝐦𝐞́𝐫𝐢𝐪𝐮𝐞 𝐞𝐭 𝐢𝐧𝐜𝐥𝐮𝐬𝐢𝐟 »


<br /><br />
📅 <b>Date</b> : Jeudi 05 Mars 2026
<br />
⏰ <b>Heure</b>: 08h00 – 14h00
<br />
📍 <b>Lieu</b> : Amphi François Yattien-Amiguet, ENSEA – Cocody
  <br/><br/>

  Un cadre d’échanges stratégiques pour renforcer la coopération Japon–Côte d’Ivoire et promouvoir une transformation durable et inclusive.
  <br/><br/>


👉 Inscription via le lien ci-dessous pour la participation en ligne (présentiel sur invitation uniquement).

  <br/><br/>
  <a    href="https://docs.google.com/forms/d/e/1FAIpQLSfQkQvuFtrLzZNmbeQ17AxJFMCVuVWTlr3sFHlg-HWV0J17sA/viewform?usp=dialog"
        target="_blank"
        style="
          color:#FF8000;
          font-weight:bold;
          text-decoration:underline;
          word-break:break-word;
          overflow-wrap:anywhere;
          display:inline-block;
          max-width:100%;
        "
      >
        S'inscrire
      </a>

  <br/>

  `,
  },
  {
    id: "34",
    title: "3e CONFERENCE INTERNATIONALE Japan Corner – CAPEC – JICA",
    excerpt: "",
    date: "13 fevrier 2026",
    image:
      "/images/Actualites/3e_Edition_des_conference_JICA_CHAIR_2026_13_Fevrier_2026.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
   3e CONFERENCE INTERNATIONALE Japan Corner – CAPEC – JICA – Fondation TODAbidjan / JICA Chair 2026
  </span>
  <br/><br/>

𝐋𝐞 𝐉𝐚𝐩𝐚𝐧 𝐂𝐨𝐫𝐧𝐞𝐫 𝐝𝐞 𝐥’𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐞́ 𝐅𝐞́𝐥𝐢𝐱 𝐇𝐨𝐮𝐩𝐡𝐨𝐮𝐞̈𝐭-𝐁𝐨𝐢𝐠𝐧𝐲, 𝐥𝐚 𝐂𝐀𝐏𝐄𝐂, 𝐥𝐚 𝐅𝐨𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐓𝐎𝐃𝐀𝐛𝐢𝐝𝐣𝐚𝐧 𝐞𝐭 𝐥𝐚 𝐉𝐈𝐂𝐀 ont organisé la 3ᵉ Conférence JICA CHAIR autour du thème :« 𝐕𝐢𝐞𝐢𝐥𝐥𝐢𝐬𝐬𝐞𝐦𝐞𝐧𝐭, 𝐦𝐚𝐥𝐚𝐝𝐢𝐞𝐬 𝐧𝐨𝐧 𝐭𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐢𝐛𝐥𝐞𝐬 𝐞𝐭 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐬𝐨𝐜𝐢𝐚𝐥𝐞 : 𝐥𝐞𝐜̧𝐨𝐧𝐬 𝐝𝐮 𝐦𝐨𝐝𝐞̀𝐥𝐞 𝐣𝐚𝐩𝐨𝐧𝐚𝐢𝐬 𝐩𝐨𝐮𝐫 𝐫𝐞𝐧𝐟𝐨𝐫𝐜𝐞𝐫 𝐥𝐚 𝐂𝐌𝐔 𝐞𝐭 𝐥𝐞 𝐝𝐢𝐯𝐢𝐝𝐞𝐧𝐝𝐞 𝐝𝐞́𝐦𝐨𝐠𝐫𝐚𝐩𝐡𝐢𝐪𝐮𝐞 𝐞𝐧 𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 ». Elle visait à tirer des leçons du modèle japonais pour renforcer la CMU et la protection sociale en Côte d’Ivoire, en cohérence avec le PND 2026-2030.
<br /><br />
📅 Vendredi 13 février 2026 | 📍 Amphithéâtre François Yattien-Amiguet, ENSEA | 08h30–13h30.

  <br/><br/>

    Dans son mot de bienvenue, 𝐥𝐞 𝐏𝐫𝐞́𝐬𝐢𝐝𝐞𝐧𝐭 𝐝𝐞 𝐥’𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐞́ 𝐅é𝐥𝐢𝐱 𝐇𝐨𝐮𝐩𝐡𝐨𝐮𝐞̈𝐭-𝐁𝐨𝐢𝐠𝐧𝐲, 𝐥𝐞 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐞𝐮𝐫 𝐁𝐀𝐋𝐋𝐎 𝐙𝐢𝐞́ a souligné le rôle central de l’Université comme pôle de production de savoir, laboratoire d’idées et espace d’innovation, mettant en avant le Japan Corner et la CAPEC comme plateformes de référence pour la recherche et la coopération internationale.
  <br/>


  `,
  },
  {
    id: "33",
    title:
      "𝟑𝐞 𝐂𝐨𝐧𝐟𝐞́𝐫𝐞𝐧𝐜𝐞 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐞 𝐉𝐀𝐏𝐀𝐍 𝐂𝐎𝐑𝐍𝐄𝐑 – 𝐂𝐀𝐏𝐄𝐂 – 𝐉𝐈𝐂𝐀 – 𝐓𝐎𝐃𝐀 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐨𝐧 (𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐞 𝐉𝐈𝐂𝐀 𝐂𝐇𝐀𝐈𝐑)",
    excerpt: "",
    date: "13 fevrier 2026",
    image:
      "/images/Actualites/3e_Edition_des_conference_JICA_CHAIR_2026_13_Fevrier_2026.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
   𝟑𝐞 𝐂𝐨𝐧𝐟𝐞́𝐫𝐞𝐧𝐜𝐞 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥𝐞 𝐉𝐀𝐏𝐀𝐍 𝐂𝐎𝐑𝐍𝐄𝐑 – 𝐂𝐀𝐏𝐄𝐂 – 𝐉𝐈𝐂𝐀 – 𝐓𝐎𝐃𝐀 𝐂𝐨𝐫𝐩𝐨𝐫𝐚𝐭𝐢𝐨𝐧 (𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐞 𝐉𝐈𝐂𝐀 𝐂𝐇𝐀𝐈𝐑)
  </span>
  <br/><br/>

📌Thème :« 𝐕𝐢𝐞𝐢𝐥𝐥𝐢𝐬𝐬𝐞𝐦𝐞𝐧𝐭, 𝐦𝐚𝐥𝐚𝐝𝐢𝐞𝐬 𝐧𝐨𝐧 𝐭𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐢𝐛𝐥𝐞𝐬 𝐞𝐭 𝐩𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐬𝐨𝐜𝐢𝐚𝐥𝐞 : 𝐞𝐧𝐬𝐞𝐢𝐠𝐧𝐞𝐦𝐞𝐧𝐭𝐬 𝐝𝐮 𝐦𝐨𝐝𝐞̀𝐥𝐞 𝐣𝐚𝐩𝐨𝐧𝐚𝐢𝐬 𝐩𝐨𝐮𝐫 𝐥𝐞 𝐫𝐞𝐧𝐟𝐨𝐫𝐜𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐂𝐌𝐔 𝐞𝐭 𝐝𝐮 𝐝𝐢𝐯𝐢𝐝𝐞𝐧𝐝𝐞 𝐝𝐞́𝐦𝐨𝐠𝐫𝐚𝐩𝐡𝐢𝐪𝐮𝐞 𝐞𝐧 𝐂𝐨̂𝐭𝐞 𝐝’𝐈𝐯𝐨𝐢𝐫𝐞 »

<br /><br />
📅 <b>Date</b> : Vendredi 13 février 2026
<br />
⏰ <b>Heure</b>: 08h30 – 13h00
<br />
📍 <b>Lieu</b> : ENSEA – Amphithéâtre François Yattien-Amiguet
  <br/><br/>

  🎎Side Event « La calligraphie au stylo-pinceau au service du corps et de l’esprit » Organisé par la Fondation TODAbidjan
  <br/><br/>


👉 Inscription via le lien ci-dessous pour la participation en ligne (présentiel sur invitation uniquement).

  <br/><br/>
  <a    href=" https://docs.google.com/forms/d/e/1FAIpQLScrFVfIAJ5V3JpOF3JOuKRfxq1jhIqRP9T36A9tEueDvYYcIg/viewform?usp=header"
        target="_blank"
        style="
          color:#FF8000;
          font-weight:bold;
          text-decoration:underline;
          word-break:break-word;
          overflow-wrap:anywhere;
          display:inline-block;
          max-width:100%;
        "
      >
        S'inscrire
      </a>

  <br/>

  `,
  },
  {
    id: "32",
    title:
      "5ᵉ Edition des Conférences internationales sur les Études japonaises",
    excerpt: "",
    date: "15 janvier 2026",
    image:
      "/images/Actualites/5e_edition_des_conferences_internationales_sur_les_etudes_japonaises.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
    5ᵉ Edition des Conférences internationales sur les Études japonaises
  </span>
  <br/><br/>
  
  <b>
    « Co-créer des solutions durables : les leçons japonaises pour l'innovation socio-économique et environnementale en Afrique »
  </b>
  <br/>

  <br/>
  Le 15 janvier 2026, l’amphithéâtre François Yattien Amiguet de l’École Nationale Supérieure de Statistique et d’Économie Appliquée (ENSEA) a accueilli la 5ᵉ Conférence internationale sur les Études japonaises, 
  organisée conjointement par le Japan Corner de l’Université Félix Houphouët-Boigny et la CAPEC, avec le soutien financier de la Japan Foundation.
  <br/><br/>

    Cette rencontre scientifique de haut niveau s’est tenue autour du thème :
  <br/>

  <br/>
  <b>
    « Co-créer des solutions durables : les leçons japonaises pour l'innovation socio-économique et environnementale en Afrique »
  </b>
  <br/><br/>

  La conférence a réuni environ 180 participants comprenant des experts internationaux, des chercheurs africains et japonais, 
  des représentants de l’administration publique, 
  ainsi que des acteurs du secteur privé et de la société civile, 
  dans un cadre d’échanges consacré aux stratégies d’innovation durable inspirées de l’expérience japonaise et adaptées aux réalités africaines.
  <br/><br/>

  Dans son mot de bienvenue, le Professeur DION Yodé Simplice, Vice-président en charge de la planification, 
  de la coopération et des relations extérieures de l’Université Félix Houphouët-Boigny, 
  a salué la pertinence du thème et réaffirmé l’engagement de l’université en faveur du dialogue scientifique international et de la coopération ivoiro-japonaise. 
  Il a également souligné l’appui constant des partenaires institutionnels, notamment la Japan Foundation et l’Ambassade du Japon en Côte d’Ivoire.
  <br/><br/>

  Prenant la parole, Son Excellence Monsieur Gomakubo Junji, Ambassadeur du Japon en Côte d’Ivoire, 
  a rappelé que cette conférence vise à renforcer l’intérêt pour les études japonaises, 
  à encourager le dialogue intellectuel entre l’Afrique et le Japon, et à favoriser l’émergence d’un réseau régional d’acteurs engagés dans ce champ de recherche. 
  Il a souligné le rôle stratégique du Japan Corner, inauguré en juin 2023 à l’UFHB, devenu un pôle de référence pour la promotion de la langue, 
  de la culture et des études japonaises en Afrique de l’Ouest.
  <br/><br/>

  Représentant le Ministère de l’Environnement, du Développement Durable et de la Transition écologique, 
  le Directeur de Cabinet Adjoint, Docteur Napari Elisée YEO a présenté cette conférence comme un espace de réflexion stratégique sur les défis du développement durable. 
  Il a insisté sur la nécessité de promouvoir des modèles de croissance inclusifs, résilients et respectueux de l’environnement, fondés sur la co-création de solutions et l’adaptation des bonnes pratiques japonaises aux contextes africains.
  <br /> <br />

  À l’issue des allocutions officielles, plusieurs communications riches et inspirantes se sont succédé, animées par d’éminents chercheurs. 
  La matinée a été consacrée aux présentations des experts japonais, à savoir S.E.M. Yukuo MURATA (ambassadeur du Japon au Mali et chercheur à Kobé University, 
  Professeure Tomoko HASHINO de Kobé University, Professeur Masamichi OGAWARA de Keio University, Professeur Yoshiaki TERUMICHI et Mme Miri ASANO de Sophia University, 
  le Docteur Takashi IROHARA de Sophia University et Monsieur Yasunori ITO de Okayama Shoka University. Dans l’après-midi, ce fut le temps de présentations de chercheurs africains que sont les Docteurs Abdoul SOGODOGO (Kurukanfuga de Bamako, Mali), 
  Mansoum N’DIAYE (CESAG, Sénégal), Mansé BAMBA (Université de Bondoukou, CI), Karna SORO (Université de San-Pedro, CI), Guy KAUL (MC, Université Alassane Ouattara, CI), Finagnon Jules ZANNOU (Université d’Abomey-Calavi, Bénin), 
  et des Professeurs Akoété Ega AGBODJI (Université de Lomé, Togo) et Maman Maman Nafiou MALAM (Université Abdou Moumouni, Niger).
  <br /><br />

  Les travaux de cette 5ᵉ édition de la Conférence internationale sur les Études japonaises ont mis en évidence un fil conducteur fort : 
  <b> 𝐥𝐞 𝐝𝐞́𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐦𝐞𝐧𝐭 𝐝𝐮𝐫𝐚𝐛𝐥𝐞 𝐧𝐞 𝐩𝐞𝐮𝐭 𝐞̂𝐭𝐫𝐞 𝐧𝐢 𝐢𝐦𝐩𝐨𝐫𝐭𝐞́ 𝐦𝐞́𝐜𝐚𝐧𝐢𝐪𝐮𝐞𝐦𝐞𝐧𝐭, 𝐧𝐢 𝐝𝐞́𝐜𝐫𝐞́𝐭𝐞́. 𝐈𝐥 𝐬𝐞 𝐜𝐨𝐧𝐬𝐭𝐫𝐮𝐢𝐭 𝐩𝐚𝐫 𝐥’𝐚𝐩𝐩𝐫𝐨𝐩𝐫𝐢𝐚𝐭𝐢𝐨𝐧, 𝐥’𝐚𝐝𝐚𝐩𝐭𝐚𝐭𝐢𝐨𝐧 𝐞𝐭 𝐥𝐚 𝐜𝐨𝐜𝐫𝐞́𝐚𝐭𝐢𝐨𝐧.</b> 
  L’expérience japonaise, à travers l’histoire, la gouvernance, l’innovation productive, l’éducation, la santé, la culture et le sport, 
  nous enseigne que <b>𝐥𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐥𝐥𝐞 𝐫𝐞𝐩𝐨𝐬𝐞 𝐚𝐯𝐚𝐧𝐭 𝐭𝐨𝐮𝐭 𝐬𝐮𝐫 𝐥𝐞 𝐜𝐚𝐩𝐢𝐭𝐚𝐥 𝐡𝐮𝐦𝐚𝐢𝐧, 𝐥𝐚 𝐝𝐢𝐬𝐜𝐢𝐩𝐥𝐢𝐧𝐞 𝐜𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐯𝐞, 𝐥𝐚 𝐪𝐮𝐚𝐥𝐢𝐭𝐞́ 𝐝𝐞𝐬 𝐢𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐢𝐨𝐧𝐬 𝐞𝐭 𝐥𝐚 𝐜𝐨𝐧𝐬𝐭𝐚𝐧𝐜𝐞 𝐝𝐚𝐧𝐬 𝐥’𝐞𝐟𝐟𝐨𝐫𝐭.</b>
  <br /><br />

  Pour l’Afrique, le message est clair. Il ne s’agit pas de copier le Japon, 
  mais de s’inspirer de sa capacité à apprendre des autres tout en restant fidèle à ses valeurs, 
  à investir durablement dans l’éducation et la formation, à promouvoir l’amélioration continue, 
  et à inscrire l’innovation dans une vision de long terme.
  <br /><br />

  `,
  },
  {
    id: "31",
    title: "CONFÉRENCE INTERNATIONALE – ÉTUDES JAPONAISES | 5ᵉ ÉDITION",
    excerpt: "",
    date: "15 janvier 2026",
    image: "/images/Actualites/5emeCONF.jpeg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>
    CONFÉRENCE INTERNATIONALE – ÉTUDES JAPONAISES | 5ᵉ ÉDITION
  </span>
  <br/><br/>

  La Conférence sur les études japonaises revient pour sa 5ᵉ édition autour d’un thème fort et actuel.
  <br/><br/>

  <b>
    « Co-créer des solutions durables : les leçons japonaises pour l'innovation socio-économique et environnementale en Afrique »
  </b>
  <br/><br/>

  <b>Pourquoi participer ?</b>
  <br/>
  Ce rendez-vous stratégique vous offre l’opportunité de :
  <br/><br/>

  <ol style='margin-left:1em;'>
    <li>
      Rencontrer des experts de hauts niveaux, chercheurs africains et japonais, ainsi que des représentants des administrations publiques, du secteur privé, des organisations internationales et de la société civile.
    </li>
    <li>
      Contribuer à une réflexion de haut niveau sur l’innovation durable inspirée de l’expérience japonaise.
    </li>
    <li>
      <b>Date :</b> Jeudi 15 janvier 2026
    </li>
    <li>
      <b>Heure :</b> 08h00 – 17h00
    </li>
    <li>
      <b>Lieu :</b> ENSEA, Amphi François YATTIEN-AMIGUET
    </li>
    <li>
      <b>Inscription :</b><br/>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSfznSy5Fic8gCiq7p6wL6b6DCZa88BuoidqBjZzmzwL-sYBzA/viewform?usp=publish-editor"
        target="_blank"
        style="
          color:#FF8000;
          font-weight:bold;
          text-decoration:underline;
          word-break:break-word;
          overflow-wrap:anywhere;
          display:inline-block;
          max-width:100%;
        "
      >
        S’inscrire via le formulaire Google
      </a>
    </li>
  </ol>

  <br/>
  <b>Ne manquez pas cette conférence incontournable à forte portée scientifique et institutionnelle.</b>
  `,
  },

  {
    id: "30",
    title:
      "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC",
    excerpt: "",
    date: "21 septembre 2020",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Soucieux d’améliorer la qualité de ses prestations dans le domaine du Marketing, le Bureau National d’Etude Technique et de Développement (BNETD), en collaboration avec la CAPEC, a offert une opportunité de renforcement des capacités à des cadres de sa Cellule Marketing et Communication. 
        Le thème retenu pour cette formation qui s’étendra sur cinq jours est : "L’élaboration d’une étude/enquête marketing". 
        La cérémonie d’ouverture de cette session s’est déroulée le lundi 21 septembre 2020, au sein du BNETD, en présence de Prof. 
        Kamgnia Bernadette, Directrice Adjointe de la CAPEC et de M. Romuald Kodjo, Chargé de la Formation du BNETD. 
        Tous les deux ont salué l’opportunité de cette formation et encouragé les auditeurs à faire preuve d’abnégation et d’assiduité.
      </li>
      <li>
        L’objectif général de la formation est de fournir aux participants des méthodes et techniques appropriées pour la réalisation d’une étude/enquête marketing. Plus spécifiquement, l’atelier consistera notamment à définir les concepts fondamentaux d’études enquête marketing, y compris les besoins en matière d'informations marketing, les questions fondamentaux de la gestion, de la planification et du développement des produits, ainsi que l'évolution récente des études de marché.
      <li>
        Selon M. KOUAKOU Koffi Valerie, Formateur Associé à la CAPEC, la méthodologie utilisée pour cette formation reposera fondamentalement sur l’approche andragogique qui privilégie l’échange entre les formateurs et les apprenants. Elle s’articulera autour de présentations théoriques, des exemples illustratifs et la réalisation d’études de cas. Au total, sept (07) modules seront dispensés. A savoir : Découvrir la démarche Marketing ; Faire le diagnostic marketing ; Appréhender la méthodologie de l’étude de marché Module ; Élaborer et implémenter le questionnaire et Transformer les résultats de l’étude en outils Marketing.
      </li>
      <li>
        <b>
          Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC
        </b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> BNETD, Abidjan
      </li>
      <li>
        <b>Participant :</b> 3 participants
      </li>
    </ol>
    `,
  },
  {
    id: "29",
    title:
      "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
    excerpt: "",
    date: "1 au 5 avril 2019",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Un atelier de méthodologie et d’écriture scientifique organisé par le Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique (CODESRIA), en collaboration avec la Cellule d’Analyse de Politiques Economique de Cires (CAPEC), s’est tenu à Abidjan, du 1er au 5 avril 2019.
      </li>
      <br />
      <li>
        Cette rencontre organisée à l’attention des membres des MRI nouvellement sélectionnés, devait leur permettre d’améliorer leurs différentes propositions, les préparer à la recherche et à l’écriture scientifique et permettre de développer la convivialité et la dynamique de réseau entre les membres du groupe.
      </li>
      <br />
      <li>
        Les participants venus de plusieurs pays d’Afrique, ont eu droit à des exposés présentés par des personnes-ressources au cours d’une série de sessions intensément participatives et interactives.
      </li>
      <br />
      <li>
        Pour rappel, le (CODESRIA) a été créé en 1973. Son siège est basé à Dakar, au Sénégal. 
        Il a pour principal mandat, la promotion de la recherche en sciences sociales dans toutes les régions de l’Afrique.
      </li>
      <br />
      <li>
        Les récipiendaires n’ont pas manqué à leur tour, de remercier la CAPEC pour cette opportunité qui leur a été offerte. 
        Ils ont salué la pertinence des thèmes, félicité les formateurs et les organisateurs quant au bon déroulement de la formation. 
        Notamment, en ce qui concerne l’adéquation des moyens logistiques et pédagogiques déployés par la CAPEC.
      </li>
      <br />
      <li>
        Ils ont par ailleurs, par la voix de leur porte-parole, noté que les résultats positifs atteints à travers cette session de renforcement de capacités contribueront à l’amélioration de la performance de leurs différents services, pour un meilleur suivi des actions de développement industriel en vue de l’Emergence de la Côte d’Ivoire à l’horizon 2020, conformément aux attentes du PND 2016-2020.
      </li>
      <br />
      <li>
        Faut-il le noter, la Direction Générale de l’Activité Industrielle (DGAI), est dirigée par M. Komenan Mougo, par ailleurs Président du Comité de Pilotage de la CAPEC.
      </li>
      <br />
      <li>
        <b>Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC</b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> Université Félix Houphouët-Boigny
      </li>
      <li>
        <b>Participant :</b> 101 participants
      </li>
    </ol>
    `,
  },
  {
    id: "28",
    title:
      "Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre",
    excerpt: "",
    date: "12 juillet 2017",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Conscient des défis que doit relever l’industrie ivoirienne dans un contexte de libéralisme économique et d’ouverture des marchés, le Ministère de l’Industrie et des Mines et plus particulièrement la Direction Générale de l’Activité Industrielle (DGAI), a décidé de renforcer les capacités de ses cadres. 
        Ce, en vue d’une meilleure prise en charge des missions qui lui sont assignées.
      </li>
      <br />
      <li>
        Dans ce cadre, elle a commandité une session de formation portant notamment sur le thème: «Analyse des filières et techniques d’élaboration et de mise en œuvre des stratégies de développement industriel», réalisée du 29 juin au 11 juillet 2017 par la Cellule d’Analyse de Politiques Economiques du CIRES (CAPEC). 
        Environ une dizaine de cadres issus de la DGAI y ont pris part.
      </li>
      <br />
      <li>
        L’objectif général de cette formation était de donner aux participants, les outils à même de leur permettre d’effectuer des analyses de filières, d’élaborer des politiques et programmes de développement des filières. 
        Plusieurs phases incluant la théorie, des exercices pratiques et des séances interactives ont permis d’aborder les modules suivants: Introduction au concept de filière- Analyse fonctionnelle et identification des flux - Analyse financière - Analyse de la commercialisation (Analyse des effets du prix de marché) - Analyse aux prix de référence.
      </li>
      <br />
      <li>
        La formation assurée principalement par Prof AHOURE Alban, Directeur de la CAPEC, Prof. KAMGNIA Bernadette, Chercheur et des formateurs associés: Drs Alex Konian, Zako Lobé et Christian Aboua, s’est déroulée pendant une dizaine de jours au Cires. 
        La coordination était assurée par Dr FE Doukouré Charles, Chercheur à la CAPEC.
      </li>
      <br />
      <li>
        La cérémonie de clôture et de remise de parchemins aux participants a été l’occasion pour le Directeur de la CAPEC de remercier les Autorités du Ministère de l’Industrie et des Mines pour leur coopération et pour l’importance accordée au renforcement des capacités en vue d’une meilleure performance des services. 
        Il a également félicité les participants pour leur assiduité et l'intérêt manifesté relativement aux thèmes.
      </li>
      <br />
      <li>
        Les récipiendaires n’ont pas manqué à leur tour, de remercier la CAPEC pour cette opportunité qui leur a été offerte. 
        Ils ont salué la pertinence des thèmes, félicité les formateurs et les organisateurs quant au bon déroulement de la formation. 
        Notamment, en ce qui concerne l’adéquation des moyens logistiques et pédagogiques déployés par la CAPEC.
      </li>
      <br />
      <li>
        Ils ont par ailleurs, par la voix de leur porte-parole, noté que les résultats positifs atteints à travers cette session de renforcement de capacités contribueront à l’amélioration de la performance de leurs différents services, pour un meilleur suivi des actions de développement industriel en vue de l’Emergence de la Côte d’Ivoire à l’horizon 2020, conformément aux attentes du PND 2016-2020.
      </li>
      <br />
      <li>
        Faut-il le noter, la Direction Générale de l’Activité Industrielle (DGAI), est dirigée par M. Komenan Mougo, par ailleurs Président du Comité de Pilotage de la CAPEC.
      </li>
      <br />
      <li>
        <b>Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC</b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> Université Félix Houphouët-Boigny
      </li>
      <li>
        <b>Participant :</b> 101 participants
      </li>
    </ol>
    `,
  },
  {
    id: "27",
    title: "Planification, Programmation, Budgétisation et Suivi-Evaluation",
    excerpt: "",
    date: "30 juin 2016",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Planification, Programmation, Budgétisation et Suivi-Evaluation</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        La CAPEC forme 30 Cadres du Ministère des Eaux et Forêts La mise en œuvre et le suivi du Plan National de Développement (PND) exigent un renforcement du capital humain des différents Ministères Techniques.
        Le Ministère des Eaux et Forêts (MINEF), l’a si bien compris, qu’il vient d’initier un atelier de renforcement des capacités. Portant sur la Planification, Programmation, Budgétisation et Suivi-évaluation, cet atelier a réuni du 27 au 29 juin 2016, à Mantchan-Hôtel (Grand-Bassam), 30 cadres issus des différentes structures centrales de ce Ministère. 
        Cette formation intervient par ailleurs, au moment où le Ministère des Eaux et Forêts entend organiser les Etats généraux de son secteur, dont les deux résultats clés attendus sont l’évaluation du Plan Directeur Forestier (PDF 1988-2015) et l’élaboration d’un plan stratégique (2016-2060).
      </li>
      <br />
      <li>
        C’est à la Cellule d’Analyse de Politiques Économiques du Cires (CAPEC) qu’est revenu l’honneur d’assurer cette formation qui visait à permettre aux bénéficiaires de s’approprier les outils modernes de la chaîne PPPBSE afin d’être assez outillés face aux défis qu’implique la réalisation de leur mission.Pour faciliter l’appropriation et l’assimilation des connaissances diffusées, les enseignements ont été dispensés en trois grands modules: la Planification Stratégique, la Programmation et la Budgétisation, le Suivi-Evaluation des projets, soutenus par des cas pratiques.
      </li>
      <br />
      <li>
        Au total, il ressort de l’évaluation intervenue à l’issue de cette session de formation, que le cadre d’organisation, l’expertise des formateurs et la participation active des auditeurs ont permis de relever le défi de l’appropriation des méthodes et outils présentés. 
        Notamment au cours des études de cas pratiques.
      </li>
      <br />
      <li>
        Notons que les cérémonies d’ouverture et de clôture de cette session de formation se sont déroulées en présence des Colonels SORO Doplé, Directeur de Cabinet du Ministre, ADINGRA Chantal, Directeur des Etudes, des Projets et de l’Évaluation (DEPE) et ME Kouamé Martial, Chef du Projet C2D/MINEF/Appui Institutionnel.
        Ces derniers n’ont pas manqué de traduire dans un premier temps, les attentes du ministère et de remercier par la suite la CAPEC pour la qualité de la formation. 
        Le Directeur p.i de la CAPEC, Prof. Alban AHOURE, a lui, réitéré l’enthousiasme et l’engagement de sa structure à accompagner le MINEF sur la voie du renforcement des capacités.
      </li>
      <br />
      <li>
        Notons également, que cette formation qui se situe dans le cadre du «Projet C2D/CORENA/MINEF appui institutionnel», a reçu l’appui de l’Agence Française de Développement (AFD).
        Les facteurs explicatifs de cette situation, ainsi que le relèvent les résultats de l’Etude, sont: le manque ou la vétusté des infrastructures, l’isolement scientifique de certaines institutions de recherche et de leurs chercheurs, le faible accès à une documentation de qualité et l’insuffisance des activités de renforcement des capacités des chercheurs. 
        «Au total, c’est à une redynamisation de la recherche scientifique en Sciences sociales qu’il faut pouvoir parvenir, conformément aux objectifs de l’émergence du pays en 2020», a souligné Prof. Ahouré.
      </li>
      <br />
      <li>
        <b>Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC</b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> Université Félix Houphouët-Boigny
      </li>
      <li>
        <b>Participant :</b> 101 participants
      </li>
    </ol>
    `,
  },
  {
    id: "26",
    title:
      "ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation",
    excerpt: "",
    date: "6 mai 2016",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Selon une étude menée récemment par la CAPEC sur l’«Evaluation de l’Environnement de la Recherche en Sciences Sociales en Côte d’Ivoire», la pratique de la recherche rencontre d’énormes difficultés dans les universités publiques ivoiriennes en général, et en particulier, dans les nouvelles universités (Univ. Lorougnon Guédé de Daloa et l’Univ. Péléforo Gon Coulibaly de Korhogo). 
        Ce diagnostic, a noté Prof. AHOURE Alban, Directeur p.i de la CAPEC et responsable de l’équipe Ivoirienne, est équivalent à l’état de la recherche scientifique présenté par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique (MESRS) en 2012. 
        "Il met en exergue la présence d’obstacles à tous les niveaux qui sont entre autres, la faiblesse du budget alloué à la recherche au regard des résultats attendus, l’instabilité du cadre juridique et institutionnel, l’insuffisance des ressources humaines et matérielles, une faible valorisation des acquis de la recherche, la fuite des cerveaux liée aux mauvaises conditions de travail et l’absence de motivation, l’inorganisation de la coopération nationale et internationale entre les structures de recherche, etc".
      </li>
      <br />
      <li>
        Les facteurs explicatifs de cette situation, ainsi que le relèvent les résultats de l’Etude, sont: le manque ou la vétusté des infrastructures, l’isolement scientifique de certaines institutions de recherche et de leurs chercheurs, le faible accès à une documentation de qualité et l’insuffisance des activités de renforcement des capacités des chercheurs. 
        «Au total, c’est à une redynamisation de la recherche scientifique en Sciences sociales qu’il faut pouvoir parvenir, conformément aux objectifs de l’émergence du pays en 2020», a souligné Prof. Ahouré.
      </li>
      <br />
      <li>
        C’est pourquoi, arguera-t-il: «Les réformes à entreprendre devront porter sur l’environnement de la recherche, les conditions de travail et les incitations des chercheurs ainsi que la gouvernance du secteur de la recherche. 
        L’ensemble des parties prenantes de la recherche (l’Etat, les institutions de recherche, les chercheurs et les utilisateurs) devraient concilier leurs efforts pour réhabiliter, construire et équiper les espaces de recherche en infrastructures de qualité en mettant l’accent sur l’accès aux données, aux Technologies de l’information et de la communication et en favorisant le réseautage. 
        Mais au-delà de l’environnement, l’Etat doit améliorer le mécanisme d’incitation en vigueur en offrant par exemple, des primes exceptionnelles aux chercheurs les plus productifs et dont les résultats concourent effectivement à une amélioration des politiques et stratégies tant au niveau du secteur public, du secteur privé que de la société civile. 
        L’accent devra être mis davantage sur le financement des activités de renforcement des capacités (séminaires, colloques, fora, débats, conférences, formations, etc.) menées dans les institutions de recherche. 
        La gouvernance du secteur doit renouer avec l’identification et la programmation des projets prioritaires de développement de la recherche scientifique. 
        Elle doit en outre favoriser le pilotage sectoriel des activités de recherche de sorte à éviter la dispersion des efforts et optimiser les opportunités de valorisation des résultats de la recherche. 
        Enfin, renforcer la coopération internationale peut créer de nouvelles opportunités pour les chercheurs et améliorer la confiance des utilisateurs de la recherche».
      </li>
      <br />
      <li>
        L’étude réalisée par la CAPEC a été financée par le Global Development Network (GDN), avec l’appui de l’Agence Française de Développement (AFD) et du Centre Suisse de Recherche Scientifique (CSRS). 
        Ce,dans le cadre de son programme «Doing Research in Social Sciences», visant à soutenir les efforts des Gouvernants dans leur quête de promotion de l’essor de la recherche scientifique. 
        Elle a été soutendue par une enquête directe conduite auprès des centres et instituts de recherche (35), des chercheurs (208) et des utilisateurs des produits de la recherche en sciences sociales (48). 
        Les résultats de cette enquête ont abouti à la construction de l’Indice «Doing Research in Social Science» (DRSS), renfermant les 6 dimensions que sont : la disponibilité et la qualité des Infrastructures Physiques, du Capital Humain, le Renforcement des capacités et les incitations diverses, la Documentation, les Technologies de l’Information et de la Communication et le Réseautage.
      </li>
      <br />
      <li>
        L’Etude a impliqué sept (7) équipes de recherche dans onze (11) pays dont la Côte d’Ivoire, au cours d’une phase pilote. Les résultats obtenus en Côte d’Ivoire, ont été vulgarisés au cours d’un séminaire de dissémination qui s’est tenu le vendredi 29 avril 2016, à la Bibliothèque de l’UFRSEG. Environ une centaine de participants issus des institutions de recherche, du secteur public, du secteur privé, de la société civile, etc.), y ont pris part, au nombre desquels les responsables de l’Université Félix Houphouët Boigny de Cocody, avec à leur tête, Prof. Bakayoko Ly Ramata, Ministre de l’Enseignement Supérieur et de la Recherche Scientifique.
      </li>
      <br />
      <li>
        Notons que les résultats de l’Etude ont été analysés sous divers angles par les Professeurs Roch YAO GNABELI, Sociologue, Directeur du LAASSE, Koli BI ZUELI, Directeur du Laboratoire des Milieux Naturels de l’IGT et Abraham GADJI, Chef de Département du Droit Public.
      </li>
      <br />
      <li>
        <b>Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC</b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> Université Félix Houphouët-Boigny
      </li>
      <li>
        <b>Participant :</b> 101 participants
      </li>
    </ol>
    `,
  },
  {
    id: "25",
    title:
      "Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement",
    excerpt: "",
    date: "26 juin 2015",
    image: "/images/Capec_logo_image.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        Plus d’une centaine de cadres et agents formés aux techniques de la chaîne PPBSE.
      </li>
      <br />
      <li>
        Ce sont en définitive, plus d’une centaine de cadres et gestionnaires de la chaîne PPBSE (Planification, Prospective, Budgétisation, Suivi et Evaluation) du Ministère d’État, Ministère du Plan et du Développement qui ont bénéficié des 14 sessions de formation offertes depuis juillet 2014, par la Banque Islamique et de Développement (BID).
      </li>
      <br />
      <li>
        La cérémonie de clôture de cette série de formation assurée par la Cellule d’Analyse des Politiques Économiques du Cires (CAPEC), s’est soldée par la remise de diplômes aux bénéficiaires des dernières formations. 
        C’était le vendredi 17 octobre 2014, dans la Salle des Séminaires du Cires, en présence de M. Kouamé Lacina, Directeur de Cabinet Adjoint, Dr. Gondo Yaké, Directeur Général du Développement des Capacités Nationales du Ministère d’Etat, Ministère du Plan et du Développement et Dr Coffie N’Guessan José, Directeur Adjoint chargé de la Recherche du Cires.
      </li>
      <br />
      <li>
        Ces formations faut-il le rappeler, avaient pour objectif général de favoriser le développement des connaissances des cadres dudit Ministère d’État sur les différentes composantes de la chaine PPBSE, notamment les outils de Planification, Prospective, Budgétisation axée sur les résultats, Suivi-Évaluation et le CDMT. 
        Elles se voulaient un cadre d’apprentissage, de compréhension et d’échanges.Ainsi, pendant plus de trois mois, les participants ont pu bénéficier de l’expertise des chercheurs de la CAPEC et des formateurs associés. 
        Qui, en vue de leur garantir la maîtrise des concepts, ont procédé par des exposés magistraux, des études de cas, des travaux de groupe, des exercices pratiques encadrés et des séances encadrées de «brainstorming».
      </li>
      <br />
      <li>
        La cérémonie de clôture a été l’occasion pour M. Kouamé Lacina, Directeur de Cabinet Adjoint, de renouveler les remerciements de Monsieur le Ministre d’Etat, Dr Albert Mabri Toikeusse, à la Banque Islamique de Développement (BID) pour ses multiples interventions au côté de la Côte d’Ivoire et particulièrement de son département ministériel dans la lutte contre la pauvreté et le développement économique et social. 
        Il a également adressé ses remerciements à la CAPEC, structure formatrice "pour la qualité des séries de formations tant générales que spécifiques qui aura permis à tous les participants d’améliorer leurs connaissances dans le sens d’une plus grande performance et pour l’utilité de leurs services respectives". 
        Ces formations, a-t-il insisté, "ont apporté des réponses aux besoins formulés par les différents services du Ministère".
      </li>
      <br />
      <li>
        M. Kouamé Lacina a en outre, adressé ses félicitations aux participants "surtout pour leur abnégation à continuer d’apprendre en vue d’être toujours utile à leur département ministériel qu’ils servent depuis toujours avec responsabilité et compétence".
      </li>
      <br />
      <li>
        Au nom du Directeur du Cires, Dr N’Guessan José, s’est quant à lui réjouit du succès de ces formations assurées par la CAPEC et de la franche collaboration qui existe entre le Ministère d’Etat, Ministère du Plan et du Développement et son institution. 
        Il n’a pas manqué de réaffirmer la détermination du Cires à contribuer à l’atteinte de l’émergence de la Côte d’Ivoire non seulement à travers les études et recherches mais aussi, par le renforcement des capacités des cadres et autres agents de l’Administration publique et privée.
      </li>
      <br />
      <li>
        Visiblement satisfaits des retombées de ces formations, c’est par la voix de leur porte-parole, que les participants ont salué à leur tour, l’expertise des formateurs et exprimé leur gratitude à la CAPEC qui n’a ménagé aucun effort pour la réussite de l’organisation de ces séances. 
        Ce, tout en souhaitant vivement que l’expérience soit renouvelée et étendue à tous les intervenants de la chaîne PPBSE.      
      </li>
      <br />
      <li>
        <b>Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC</b>
      </li>
      <br />
      <li>
        <b>Lieu :</b> Université Félix Houphouët-Boigny
      </li>
      <li>
        <b>Participant :</b> 101 participants
      </li>
    </ol>
    `,
  },
  {
    id: "24",
    title: "Projet KAIZEN en Côte d’Ivoire",
    excerpt: "",
    date: "15 au 16 septembre 2025",
    image: "/images/photo/Projet_KAIZEN.jpg",
    mot: `<span style='color:#FF8000;font-weight:bold;'>Projet KAIZEN en Côte d’Ivoire</span>
    <br/>
    <ol style='margin-left:1em;'>
      <li>
        La Côte d’Ivoire bénéficie d’un appui technique de l’Agence Japonaise de Coopération Internationale de (JICA) dans le cadre de la mise en œuvre du Projet de Promotion des Petite et Moyennes Entreprises ou Projet KAIZEN. Ce projet sera mis en œuvre de juillet 2025 à août 2028 et vise à renforcer la qualité, la productivité et la compétitivité des chaînes de valeur agricoles et agroalimentaires.
      </li>
      <li>
        Le KAIZEN, terme japonais signifiant « amélioration continue », est une philosophie de gestion qui, à travers des outils pratiques comme la méthode 5S, permet de réduire les gaspillages, améliorer l’organisation et accroître la performance des entreprises.
      </li>
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
      "Trois nouveaux Docteurs en Sciences Économiques formés au sein de la Cellule d’Analyse de Politiques Économiques du CIRES",
    excerpt: "",
    date: "Juillet 2025",
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
    date: "11 avril 2024",
    image: "/images/photo/RAED-Dr-Alban-Ahoure-20.jpg",
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
    date: "16 janvier 2024",
    image: "/images/photo/VISITE_D_esther_DUFLO.jpg",
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
    date: "11 au 13 janvier 2024",
    image: "/images/photo/seminaire_rentree_2024.jpg",
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

// Triez les actualités une seule fois pour les utiliser partout
const sortedNewsList = sortNewsByDate(newsList);

export async function generateStaticParams() {
  return sortedNewsList.map((news) => ({
    id: news.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = sortedNewsList.find((n) => n.id === id);
  if (!news) return notFound();

  const currentIndex = sortedNewsList.findIndex((n) => n.id === id);
  const nextIndex = (currentIndex + 1) % sortedNewsList.length;
  const nextId = sortedNewsList[nextIndex].id;
  const isLast = currentIndex === sortedNewsList.length - 1;

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
                  Voir l'actualité suivante
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
