"use client";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const conferences = [
  {
    id: "conf1",
    title: "Méthode et Techniques Marketing: Des cadres du BNETD à l'École de la CAPEC",
    description:
      "Le Bureau National d’Étude Technique et de Développement (BNETD), en partenariat avec la CAPEC, a organisé une formation de cinq jours sur le thème « L’élaboration d’une étude/enquête marketing » pour renforcer les compétences des cadres de sa Cellule Marketing et Communication.",
    date: "21 septembre 2020",
    location: "BNETD, Abidjan",
    participants: "3 participants",
    image: "/placeholder.svg?text=Conférence+Internationale&height=300&width=400",
  },
  // ... other conference objects
];

// Create a component to handle the search params logic
function EventDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const event = conferences.find((e) => e.id === id); // Fix the find logic

  if (!event) {
    notFound();
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-muted-foreground mt-4">{event.description}</p>
      <div className="mt-6">
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
    </div>
  );
}

// Main page component with Suspense
export default function EventDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventDetailsContent />
    </Suspense>
  );
}