import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import Link from "next/link";

// Définition des types pour les props
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Données des conférences
const conferences = [
  {
    id: "conf1",
    title: "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC",
    description: "Le Bureau National d’Étude Technique et de Développement (BNETD)...",
    date: "21 septembre 2020",
    location: "BNETD, Abidjan",
    participants: "3 participants",
    publishDate: "21 septembre 2020",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `Soucieux d’améliorer la qualité de ses prestations dans le domaine du Marketing, le Bureau National d’Etude Technique et de Développement (BNETD), en collaboration avec la CAPEC, a offert une opportunité de renforcement des capacités à des cadres de sa Cellule Marketing et Communication. Le thème retenu pour cette formation qui s’étendra sur cinq jours est : ‘’L’élaboration d’une étude/enquête marketing’’. La cérémonie d’ouverture de cette session s’est déroulée le lundi 21 septembre 2020, au sein du BNETD, en présence de Prof. Kamgnia Bernadette, Directrice Adjointe de la CAPEC et de M. Romuald Kodjo, Chargé de la Formation du BNETD. Tous les deux ont salué l’opportunité de cette formation et encouragé les auditeurs à faire preuve d’abnégation et d’assiduité.

L’objectif général de la formation est de fournir aux participants des méthodes et techniques appropriées pour la réalisation d’une étude/enquête marketing. Plus spécifiquement, l’atelier consistera notamment à définir les concepts fondamentaux d’études enquête marketing, y compris les besoins en matière d'informations marketing, les questions fondamentaux de la gestion, de la planification et du développement des produits, ainsi que l'évolution récente des études de marché.

Selon M. KOUAKOU Koffi Valerie, Formateur Associé à la CAPEC, la méthodologie utilisée pour cette formation reposera fondamentalement sur l’approche andragogique qui privilégie l’échange entre les formateurs et les apprenants. Elle s’articulera autour de présentations théoriques, des exemples illustratifs et la réalisation d’études de cas. Au total, sept (07) modules seront dispensés. A savoir : Découvrir la démarche Marketing ; Faire le diagnostic marketing ; Appréhender la méthodologie de l’étude de marché Module ; Élaborer et implémenter le questionnaire et Transformer les résultats de l’étude en outils Marketing.`,
  },
  {
    id: "conf2",
    title: "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
    description: "Un atelier de méthodologie et d’écriture scientifique organisé par le Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique (CODESRIA)...",
    date: "1 au 5 avril 2019",
    location: "Centre de Conférences, Plateau",
    participants: "50 participants",
    publishDate: "09 avril 2019",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `Un atelier de méthodologie et d’écriture scientifique organisé par le Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique (CODESRIA), en collaboration avec la Cellule d’Analyse de Politiques Economique de Cires (CAPEC), s’est tenu à Abidjan, du 1er au 5 avril 2019.

Cette rencontre organisée à l’attention des membres des MRI nouvellement sélectionnés, devait leur permettre d’améliorer leurs différentes propositions, les préparer à la recherche et à l’écriture scientifique et permettre de développer la convivialité et la dynamique de réseau entre les membres du groupe.

Les participants venus de plusieurs pays d’Afrique, ont eu droit à des exposés présentés par des personnes-ressources au cours d’une série de sessions intensément participatives et interactives.

Pour rappel, le (CODESRIA) a été créé en 1973. Son siège est basé à Dakar, au Sénégal. Il a pour principal mandat, la promotion de la recherche en sciences sociales dans toutes les régions de l’Afrique.`,
  },
  {
    id: "conf3",
    title: "Développement industriel : Des cadres outillés à l'analyse des filières et aux techniques d'élaboration et de mise en œuvre",
    description: "Dans un contexte de libéralisation économique, le Ministère de l’Industrie et des Mines, à travers la Direction Générale de l’Activité Industrielle (DGAI), a initié une formation pour renforcer les compétences de ses cadres.",
    date: "12 juillet 2017",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    publishDate: "12 juillet 2017",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `Conscient des défis que doit relever l’industrie ivoirienne dans un contexte de libéralisme économique et d’ouverture des marchés, le Ministère de l’Industrie et des Mines et plus particulièrement la Direction Générale de l’Activité Industrielle (DGAI), a décidé de renforcer les capacités de ses cadres. Ce, en vue d’une meilleure prise en charge des missions qui lui sont assignées.

Dans ce cadre, elle a commandité une session de formation portant notamment sur le thème: «Analyse des filières et techniques d’élaboration et de mise en œuvre des stratégies de développement industriel», réalisée du 29 juin au 11 juillet 2017 par la Cellule d’Analyse de Politiques Economiques du CIRES (CAPEC). Environ une dizaine de cadres issus de la DGAI y ont pris part.

L’objectif général de cette formation était de donner aux participants, les outils à même de leur permettre d’effectuer des analyses de filières, d’élaborer des politiques et programmes de développement des filières. Plusieurs phases incluant la théorie, des exercices pratiques et des séances interactives ont permis d’aborder les modules suivants: Introduction au concept de filière- Analyse fonctionnelle et identification des flux - Analyse financière - Analyse de la commercialisation (Analyse des effets du prix de marché) - Analyse aux prix de référence.

La formation assurée principalement par Prof AHOURE Alban, Directeur de la CAPEC, Prof. KAMGNIA Bernadette, Chercheur et des formateurs associés: Drs Alex Konian, Zako Lobé et Christian Aboua, s’est déroulée pendant une dizaine de jours au Cires. La coordination était assurée par Dr FE Doukouré Charles, Chercheur à la CAPEC.

La cérémonie de clôture et de remise de parchemins aux participants a été l’occasion pour le Directeur de la CAPEC de remercier les Autorités du Ministère de l’Industrie et des Mines pour leur coopération et pour l’importance accordée au renforcement des capacités en vue d’une meilleure performance des services. Il a également félicité les participants pour leur assiduité et l'intérêt manifesté relativement aux thèmes.

Les récipiendaires n’ont pas manqué à leur tour, de remercier la CAPEC pour cette opportunité qui leur a été offerte. Ils ont salué la pertinence des thèmes, félicité les formateurs et les organisateurs quant au bon déroulement de la formation. Notamment, en ce qui concerne l’adéquation des moyens logistiques et pédagogiques déployés par la CAPEC.

Ils ont par ailleurs, par la voix de leur porte-parole, noté que les résultats positifs atteints à travers cette session de renforcement de capacités contribueront à l’amélioration de la performance de leurs différents services, pour un meilleur suivi des actions de développement industriel en vue de l’Emergence de la Côte d’Ivoire à l’horizon 2020, conformément aux attentes du PND 2016-2020.

Faut-il le noter, la Direction Générale de l’Activité Industrielle (DGAI), est dirigée par M. Komenan Mougo, par ailleurs Président du Comité de Pilotage de la CAPEC.`,
  },
  {
    id: "conf4",
    title: "Planification, Programmation, Budgétisation et Suivi-Evaluation.",
    description: "Dans un contexte de libéralisation économique, le Ministère de l’Industrie et des Mines, à travers la Direction Générale de l’Activité Industrielle (DGAI), a initié une formation pour renforcer les compétences de ses cadres.",
    date: "12 juillet 2017",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    publishDate: "30 Juin, 2016",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `La CAPEC forme 30 Cadres du Ministère des Eaux et Forêts La mise en œuvre et le suivi du Plan National de Développement (PND) exigent un renforcement du capital humain des différents Ministères Techniques. Le Ministère des Eaux et Forêts (MINEF), l’a si bien compris, qu’il vient d’initier un atelier de renforcement des capacités. Portant sur la Planification, Programmation, Budgétisation et Suivi-évaluation, cet atelier a réuni du 27 au 29 juin 2016, à Mantchan-Hôtel (Grand-Bassam), 30 cadres issus des différentes structures centrales de ce Ministère. Cette formation intervient par ailleurs, au moment où le Ministère des Eaux et Forêts entend organiser les Etats généraux de son secteur, dont les deux résultats clés attendus sont l’évaluation du Plan Directeur Forestier (PDF 1988-2015) et l’élaboration d’un plan stratégique (2016-2060).

C’est à la Cellule d’Analyse de Politiques Économiques du Cires (CAPEC) qu’est revenu l’honneur d’assurer cette formation qui visait à permettre aux bénéficiaires de s’approprier les outils modernes de la chaîne PPPBSE afin d’être assez outillés face aux défis qu’implique la réalisation de leur mission.Pour faciliter l’appropriation et l’assimilation des connaissances diffusées, les enseignements ont été dispensés en trois grands modules: la Planification Stratégique, la Programmation et la Budgétisation, le Suivi-Evaluation des projets, soutenus par des cas pratiques.

Au total, il ressort de l’évaluation intervenue à l’issue de cette session de formation, que le cadre d’organisation, l’expertise des formateurs et la participation active des auditeurs ont permis de relever le défi de l’appropriation des méthodes et outils présentés. Notamment au cours des études de cas pratiques.

Notons que les cérémonies d’ouverture et de clôture de cette session de formation se sont déroulées en présence des Colonels SORO Doplé, Directeur de Cabinet du Ministre, ADINGRA Chantal, Directeur des Etudes, des Projets et de l’Évaluation (DEPE) et ME Kouamé Martial, Chef du Projet C2D/MINEF/Appui Institutionnel. Ces derniers n’ont pas manqué de traduire dans un premier temps, les attentes du ministère et de remercier par la suite la CAPEC pour la qualité de la formation. Le Directeur p.i de la CAPEC, Prof. Alban AHOURE, a lui, réitéré l’enthousiasme et l’engagement de sa structure à accompagner le MINEF sur la voie du renforcement des capacités.

Notons également, que cette formation qui se situe dans le cadre du «Projet C2D/CORENA/MINEF appui institutionnel», a reçu l’appui de l’Agence Française de Développement (AFD).Les facteurs explicatifs de cette situation, ainsi que le relèvent les résultats de l’Etude, sont: le manque ou la vétusté des infrastructures, l’isolement scientifique de certaines institutions de recherche et de leurs chercheurs, le faible accès à une documentation de qualité et l’insuffisance des activités de renforcement des capacités des chercheurs. «Au total, c’est à une redynamisation de la recherche scientifique en Sciences sociales qu’il faut pouvoir parvenir, conformément aux objectifs de l’émergence du pays en 2020», a souligné Prof. Ahouré.`,
  },
  {
    id: "conf5",
    title: "ENVIRONNEMENT DE LA RECHERCHE EN SCIENCES SOCIALES EN COTE D'IVOIRE: La CAPEC propose des pistes pour la redynamisation",
    description: "Dans un contexte de libéralisation économique, le Ministère de l’Industrie et des Mines, à travers la Direction Générale de l’Activité Industrielle (DGAI), a initié une formation pour renforcer les compétences de ses cadres.",
    date: "Publié le 06 Mai, 2016",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    publishDate: "le 06 Mai, 2016",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `Selon une étude menée récemment par la CAPEC sur l’«Evaluation de l’Environnement de la Recherche en Sciences Sociales en Côte d’Ivoire», la pratique de la recherche rencontre d’énormes difficultés dans les universités publiques ivoiriennes en général, et en particulier, dans les nouvelles universités (Univ. Lorougnon Guédé de Daloa et l’Univ. Péléforo Gon Coulibaly de Korhogo). Ce diagnostic, a noté Prof. AHOURE Alban, Directeur p.i de la CAPEC et responsable de l’équipe Ivoirienne, est équivalent à l’état de la recherche scientifique présenté par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique (MESRS) en 2012. ‘’Il met en exergue la présence d’obstacles à tous les niveaux qui sont entre autres, la faiblesse du budget alloué à la recherche au regard des résultats attendus, l’instabilité du cadre juridique et institutionnel, l’insuffisance des ressources humaines et matérielles, une faible valorisation des acquis de la recherche, la fuite des cerveaux liée aux mauvaises conditions de travail et l’absence de motivation, l’inorganisation de la coopération nationale et internationale entre les structures de recherche, etc’’.

Les facteurs explicatifs de cette situation, ainsi que le relèvent les résultats de l’Etude, sont: le manque ou la vétusté des infrastructures, l’isolement scientifique de certaines institutions de recherche et de leurs chercheurs, le faible accès à une documentation de qualité et l’insuffisance des activités de renforcement des capacités des chercheurs. «Au total, c’est à une redynamisation de la recherche scientifique en Sciences sociales qu’il faut pouvoir parvenir, conformément aux objectifs de l’émergence du pays en 2020», a souligné Prof. Ahouré.

C’est pourquoi, arguera-t-il: «Les réformes à entreprendre devront porter sur l’environnement de la recherche, les conditions de travail et les incitations des chercheurs ainsi que la gouvernance du secteur de la recherche. L’ensemble des parties prenantes de la recherche (l’Etat, les institutions de recherche, les chercheurs et les utilisateurs) devraient concilier leurs efforts pour réhabiliter, construire et équiper les espaces de recherche en infrastructures de qualité en mettant l’accent sur l’accès aux données, aux Technologies de l’information et de la communication et en favorisant le réseautage. Mais au-delà de l’environnement, l’Etat doit améliorer le mécanisme d’incitation en vigueur en offrant par exemple, des primes exceptionnelles aux chercheurs les plus productifs et dont les résultats concourent effectivement à une amélioration des politiques et stratégies tant au niveau du secteur public, du secteur privé que de la société civile. L’accent devra être mis davantage sur le financement des activités de renforcement des capacités (séminaires, colloques, fora, débats, conférences, formations, etc.) menées dans les institutions de recherche. La gouvernance du secteur doit renouer avec l’identification et la programmation des projets prioritaires de développement de la recherche scientifique. Elle doit en outre favoriser le pilotage sectoriel des activités de recherche de sorte à éviter la dispersion des efforts et optimiser les opportunités de valorisation des résultats de la recherche. Enfin, renforcer la coopération internationale peut créer de nouvelles opportunités pour les chercheurs et améliorer la confiance des utilisateurs de la recherche».

L’étude réalisée par la CAPEC a été financée par le Global Development Network (GDN), avec l’appui de l’Agence Française de Développement (AFD) et du Centre Suisse de Recherche Scientifique (CSRS). Ce,dans le cadre de son programme «Doing Research in Social Sciences», visant à soutenir les efforts des Gouvernants dans leur quête de promotion de l’essor de la recherche scientifique. Elle a été soutendue par une enquête directe conduite auprès des centres et instituts de recherche (35), des chercheurs (208) et des utilisateurs des produits de la recherche en sciences sociales (48). Les résultats de cette enquête ont abouti à la construction de l’Indice «Doing Research in Social Science» (DRSS), renfermant les 6 dimensions que sont : la disponibilité et la qualité des Infrastructures Physiques, du Capital Humain, le Renforcement des capacités et les incitations diverses, la Documentation, les Technologies de l’Information et de la Communication et le Réseautage.

L’Etude a impliqué sept (7) équipes de recherche dans onze (11) pays dont la Côte d’Ivoire, au cours d’une phase pilote. Les résultats obtenus en Côte d’Ivoire, ont été vulgarisés au cours d’un séminaire de dissémination qui s’est tenu le vendredi 29 avril 2016, à la Bibliothèque de l’UFRSEG. Environ une centaine de participants issus des institutions de recherche, du secteur public, du secteur privé, de la société civile, etc.), y ont pris part, au nombre desquels les responsables de l’Université Félix Houphouët Boigny de Cocody, avec à leur tête, Prof. Bakayoko Ly Ramata, Ministre de l’Enseignement Supérieur et de la Recherche Scientifique.

Notons que les résultats de l’Etude ont été analysés sous divers angles par les Professeurs Roch YAO GNABELI, Sociologue, Directeur du LAASSE, Koli BI ZUELI, Directeur du Laboratoire des Milieux Naturels de l’IGT et Abraham GADJI, Chef de Département du Droit Public.`,
  },
  {
    id: "conf6",
    title: "Chaine PPBSE / Ministère d'Etat, Ministère du Plan et du Développement",
    description: "La cérémonie de clôture de cette série de formation assurée par la Cellule d’Analyse des Politiques Économiques du Cires (CAPEC), s’est soldée par la remise de diplômes aux bénéficiaires des dernières formations.",
    date: "26 juin 2015",
    location: "Université Félix Houphouët-Boigny",
    participants: "101 participants",
    image: "/placeholder.svg?text=Conférence+Annuelle+2022&height=300&width=400",
    publishDate: "le 06 Mai, 2016",
    author: "Mayane Yapo, Chargée de la Communication et de la Visibilité de la CAPEC",
    fullContent: `Plus d’une centaine de cadres et agents formés aux techniques de la chaîne PPBSE.

Ce sont en définitive, plus d’une centaine de cadres et gestionnaires de la chaîne PPBSE (Planification, Prospective, Budgétisation, Suivi et Evaluation) du Ministère d’État, Ministère du Plan et du Développement qui ont bénéficié des 14 sessions de formation offertes depuis juillet 2014, par la Banque Islamique et de Développement (BID).

La cérémonie de clôture de cette série de formation assurée par la Cellule d’Analyse des Politiques Économiques du Cires (CAPEC), s’est soldée par la remise de diplômes aux bénéficiaires des dernières formations. C’était le vendredi 17 octobre 2014, dans la Salle des Séminaires du Cires, en présence de M. Kouamé Lacina, Directeur de Cabinet Adjoint, Dr. Gondo Yaké, Directeur Général du Développement des Capacités Nationales du Ministère d’Etat, Ministère du Plan et du Développement et Dr Coffie N’Guessan José, Directeur Adjoint chargé de la Recherche du Cires.

Ces formations faut-il le rappeler, avaient pour objectif général de favoriser le développement des connaissances des cadres dudit Ministère d’État sur les différentes composantes de la chaine PPBSE, notamment les outils de Planification, Prospective, Budgétisation axée sur les résultats, Suivi-Évaluation et le CDMT. Elles se voulaient un cadre d’apprentissage, de compréhension et d’échanges.Ainsi, pendant plus de trois mois, les participants ont pu bénéficier de l’expertise des chercheurs de la CAPEC et des formateurs associés. Qui, en vue de leur garantir la maîtrise des concepts, ont procédé par des exposés magistraux, des études de cas, des travaux de groupe, des exercices pratiques encadrés et des séances encadrées de «brainstorming».

La cérémonie de clôture a été l’occasion pour M. Kouamé Lacina, Directeur de Cabinet Adjoint, de renouveler les remerciements de Monsieur le Ministre d’Etat, Dr Albert Mabri Toikeusse, à la Banque Islamique de Développement (BID) pour ses multiples interventions au côté de la Côte d’Ivoire et particulièrement de son département ministériel dans la lutte contre la pauvreté et le développement économique et social. Il a également adressé ses remerciements à la CAPEC, structure formatrice ‘’pour la qualité des séries de formations tant générales que spécifiques qui aura permis à tous les participants d’améliorer leurs connaissances dans le sens d’une plus grande performance et pour l’utilité de leurs services respectives’’. Ces formations, a-t-il insisté, ‘’ont apporté des réponses aux besoins formulés par les différents services du Ministère’’.

M. Kouamé Lacina a en outre, adressé ses félicitations aux participants ‘’surtout pour leur abnégation à continuer d’apprendre en vue d’être toujours utile à leur département ministériel qu’ils servent depuis toujours avec responsabilité et compétence’’.

Au nom du Directeur du Cires, Dr N’Guessan José, s’est quant à lui réjouit du succès de ces formations assurées par la CAPEC et de la franche collaboration qui existe entre le Ministère d’Etat, Ministère du Plan et du Développement et son institution. Il n’a pas manqué de réaffirmer la détermination du Cires à contribuer à l’atteinte de l’émergence de la Côte d’Ivoire non seulement à travers les études et recherches mais aussi, par le renforcement des capacités des cadres et autres agents de l’Administration publique et privée.

Visiblement satisfaits des retombées de ces formations, c’est par la voix de leur porte-parole, que les participants ont salué à leur tour, l’expertise des formateurs et exprimé leur gratitude à la CAPEC qui n’a ménagé aucun effort pour la réussite de l’organisation de ces séances. Ce, tout en souhaitant vivement que l’expérience soit renouvelée et étendue à tous les intervenants de la chaîne PPBSE.`,
  },
];

// Filtrer les conférences pour la barre latérale
const sidebarConferences = conferences.filter(
  (conf) => conf.id !== "conf1" && conf.id !== "conf6"
);

// Fonction pour générer les métadonnées
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = conferences.find((e) => e.id === id);

  if (!event) {
    return {
      title: "Événement non trouvé",
      description: "Aucun événement correspondant.",
    };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailsPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const event = conferences.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  // Séparation des paragraphes
  const paragraphs = event.fullContent.split("\n\n");

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex flex-col md:flex-row">
        {/* Contenu principal */}
        <main className="container mx-auto flex-grow px-4 py-12 md:max-w-4xl md:px-6 md:py-24">
          <article className="rounded-lg bg-white p-8 shadow-md">
            <h1 className="mb-8 text-center text-2xl font-bold uppercase tracking-tighter sm:text-3xl md:text-4xl">
              {event.title}
            </h1>
            <p className="mb-6 text-left text-base text-muted-foreground">
              Publié le {event.publishDate}
            </p>
            <hr className="mb-10 w-full" />
            <div className="prose max-w-none text-justify">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 text-right text-base font-semibold">
                {event.author}
              </p>
            </div>
            <div className="mt-8 text-left text-base">
              <p>
                <strong>Date :</strong> {event.date}
              </p>
              <p>
                <strong>Lieu :</strong> {event.location}
              </p>
              <p>
                <strong>Participants :</strong> {event.participants}
              </p>
            </div>
          </article>
        </main>

        {/* Barre latérale */}
        <aside className="mt-12 w-full mb-10 bg-white p-4 shadow-lg md:mt-18 md:w-80 md:overflow-y-auto md:sticky md:top-24 md:h-[calc(100vh-6rem)]">
          <h2 className="mb-4 text-xl font-semibold text-orange-500">
            Autres Comptes rendus
          </h2>
          {sidebarConferences.map((conf) => (
            <div key={conf.id} className="mb-6">
              <Link
                href={`/activites/compte-rendu/${conf.id}`}
                className="text-base font-medium text-gray-800 hover:text-orange-500 uppercase"
              >
                {conf.title}
              </Link>
              <p className="mt-1 text-sm text-gray-600">{conf.publishDate}</p>
            </div>
          ))}
        </aside>
      </div>
      <Footer />
    </div>
  );
}