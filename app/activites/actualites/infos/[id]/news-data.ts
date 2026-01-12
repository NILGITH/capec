// Shared news source for the list and detail pages.
// Note: This file intentionally contains HTML strings used with dangerouslySetInnerHTML.

import { sortNewsByDate } from "@/lib/utils";

export type NewsItemSource = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  mot?: string;
};

// Simule la même liste que dans page.tsx (à factoriser plus tard)
export const newsList: NewsItemSource[] = [
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
];

// Triez les actualités une seule fois pour les utiliser partout
export const sortedNewsList = sortNewsByDate(newsList);
