import LandingHero from "@/components/landing/LandingHero";
import ArchGallery from "@/components/landing/ArchGallery";
import VideoGrid from "@/components/landing/VideoGrid";
import ValueStack from "@/components/landing/ValueStack";
import PriceSection from "@/components/landing/PriceSection";
import AddonsSection from "@/components/landing/AddonsSection";
import ChallahSection from "@/components/landing/ChallahSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default function HomePage() {
  return (
    <div className="bg-sand">
      {/* Hero — video, brand, big promise */}
      <LandingHero />

      {/* Gallery — Moroccan arch cards */}
      <ArchGallery />

      {/* Videos from real events */}
      <VideoGrid />

      {/* Base package value stack */}
      <ValueStack />

      {/* Price + limited promo */}
      <PriceSection />

      {/* Add-ons */}
      <AddonsSection />

      {/* Challah ceremony service */}
      <ChallahSection />

      {/* Final CTA — WhatsApp */}
      <FinalCTA />

      <LandingFooter />
    </div>
  );
}
