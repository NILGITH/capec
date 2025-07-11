import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Video, Mic, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/main-nav";
import Link from "next/link";

interface Interview {
  id: string;
  title: string;
  date: string;
  speaker: string;
  type: "video" | "audio" | "text";

}

interface Debat {
  id: string;
  title: string;
  date: string;
  participants: string;
}

interface Question {
  id: string;
  question: string;
  answer: string;
  expert: {
    name: string;
    title: string;
    photo: string;
  };
}

export default function InterviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Interviews & Questions</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-mutedthemed-foreground md:text-xl max-w-[800px]">
            Découvrez les interviews et interventions médiatiques des chercheurs de la CAPEC sur les questions économiques
            d'actualité.
          </p>
        </div>

        <Tabs defaultValue="interviews" className="mt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="debats">Question A</TabsTrigger>
          </TabsList>
          <TabsContent value="interviews" className="mt-6">
            <div className="space-y-6">
              {interviews.map((interview, index) => (
                <InterviewCard
                  key={interview.id}
                  interview={interview}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="debats" className="mt-6">
            <div className="space-y-6">
              {debats.map((debat) => (
                <DebatCard key={debat.id} debat={debat} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Demande d'interview</h2>
              <p className="text-muted-foreground">
                Vous êtes journaliste ou représentant d'une organisation et souhaitez interviewer un chercheur de la CAPEC ?
              </p>
            </div>
           <Link href={"/"}>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white">
              Contactez-nous
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

function InterviewCard({ interview, isFirst = false }: { interview: Interview; isFirst?: boolean }) {
  return (
    <Card className="overflow-hidden w-[1300px] max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-3 flex flex-col h-full">
          <div className="flex items-center text-sm text-ci-orange mb-4">
            <Calendar className="h-4 w-4 mr-2 shrink-0" />
            <span className="truncate">{interview.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-4 line-clamp-2">{interview.title}</h3>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center text-sm min-w-0">
              <User className="h-4 w-4 text-ci-green mr-2 shrink-0" />
              <span className="truncate">
                <span className="font-medium">Intervenant:</span> {interview.speaker}
              </span>
            </div>
          </div>
          <div className="mt-auto">
            <Link href={`/activites/interview/${interview.id}`}>
              <Button className="bg-ci-green hover:bg-green-700 text-white w-full md:w-auto">
                {interview.type === "video"
                  ? "Voir plus"
                  : interview.type === "audio"
                  ? "Voir plus"
                  : "Voir l'interview"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
function DebatCard({ debat }: { debat: Debat }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        
        <div className="md:col-span-2 p-6">
          <div className="flex items-center text-sm text-ci-orange mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{debat.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{debat.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 text-ci-green mr-2" />
              <span>
                <span className="font-medium">Participants:</span> {debat.participants}
              </span>
            </div>
            
          </div>
          <div className="mt-4">
                <Link href={`/activites/interview/${debat.id}`}>
              <Button className="bg-ci-green hover:bg-green-700 text-white">Voir plus</Button>

               </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

function QuestionCard({ question }: { question: Question }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{question.question}</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={question.expert.photo || "/images/default.jpg"}
                alt={question.expert.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center">
                <p className="font-bold">{question.expert.name}</p>
                <span className="text-sm text-muted-foreground ml-2">{question.expert.title}</span>
              </div>
              <p className="mt-2 text-muted-foreground">{question.answer}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data
const interviews: Interview[] = [
  {
    id: "int1",
    title: "« Nos réflexions aideront à établir un lien entre la violence juvénile et les opportunités économiques »",
    date: "le 18 Août, 2020",
    speaker: "Prof Kimou Assi José Carlos, Cherecheurs Sénior a la CAPEC,Responsable de la Recherche et du Suivi-Evaluation",
    type: "video",
  },
  {
    id: "int2",
    title: "« La Côte d'Ivoire n'a pas régressé mais sa progression a été moins importante»",
    date: "15 juin 2020",
    speaker: "Dr. Germain Kramo,Chercheur a la CAPEC",
    type: "audio",
  },
  {
    id: "int3",
    title: "«On ne devient pas Professeur titulaire que par son seul travail personnel.»",
    date: "5 juin 2020",
    speaker: "Le prof Mama Ouattara, Directeur du Cires",
    type: "video",
  },
  {
    id: "int4",
    title: "«La Gestion Axée sur les Résultats peut aider les pays du Sud à atteindre leurs objectifs de développement»",
    date: "5 novembre 2019",
    speaker: "Jean AMANTCHI GOGOUA, Economiste Sénior Banque Mondiale",
    type: "video",
  },
];

const debats: Debat[] = [
  {
    id: "deb1",
    title: "«Monsieur le Directeur, quels peuvent être les impacts à court ou à moyen terme de la mesure de confinement consécutive à la situation sanitaire liée à la COVID-19 ?»",
    date: "15 juin 2020",
    participants:
      "Prof AHOURE Alban. Directeur de la Capec",
  },
  {
    id: "deb2",
    title: "«Quelles leçons peuvent tirer les africains de la zone franc ?»",
    date: "15 février 2019",
    participants: "Dr. Fatou Sow (CAPEC), Dr. Ouattara Ibrahim (CNRA), Mme Bamba Aminata (Ministère de l'Agriculture)",
  },
];