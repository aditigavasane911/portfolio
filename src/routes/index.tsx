import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Hackathon } from "@/components/Hackathon";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { TechMarquee } from "@/components/TechMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditi Gavasane — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Aditi Gavasane: prompt engineering, AI products, and full-stack web engineering with Python, React, and REST APIs.",
      },
      { property: "og:title", content: "Aditi Gavasane — Portfolio" },
      {
        property: "og:description",
        content:
          "Prompt engineering, AI product work, and full-stack builds across Python, JavaScript, React, and REST APIs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main id="top" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <SelectedWork />
      <TechMarquee />
      <Certifications />
      <Hackathon />
      <Contact />
    </main>
  );
}
