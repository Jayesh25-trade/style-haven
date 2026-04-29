import { createFileRoute } from "@tanstack/react-router";
import { Masthead } from "@/components/Masthead";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ActionPairs } from "@/components/ActionPairs";
import { Editorial } from "@/components/Editorial";
import { Lookbook } from "@/components/Lookbook";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MAISON NORTH — Issue 01, SS26 · Editorial Fashion House" },
      {
        name: "description",
        content:
          "MAISON NORTH Issue N°01 — The Motion Issue. An editorial spring/summer 2026 collection of tailored softness, knitwear, and outerwear photographed in motion.",
      },
      { property: "og:title", content: "MAISON NORTH — Issue 01, SS26" },
      {
        property: "og:description",
        content:
          "The Motion Issue. Tailored softness photographed mid-air. Shop the SS26 collection.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-paper">
      <Masthead />
      <main>
        <Hero />
        <Marquee />
        <ActionPairs />
        <Editorial />
        <Lookbook />
      </main>
      <Footer />
    </div>
  );
}
