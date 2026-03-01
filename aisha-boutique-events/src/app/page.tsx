"use client";

import { useState } from "react";
import HeroVideo from "@/components/sections/HeroVideo";
import ImageTrio from "@/components/sections/ImageTrio";
import LeadMagnetBand from "@/components/sections/LeadMagnetBand";
import ParallaxServices from "@/components/sections/ParallaxServices";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import HorizontalCarousel from "@/components/sections/HorizontalCarousel";
import FooterFormBlock from "@/components/sections/FooterFormBlock";
import QuestionnaireModal from "@/components/features/questionnaire/QuestionnaireModal";

export default function HomePage() {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  return (
    <>
      {/* Block 1 — Hero Video */}
      <HeroVideo onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} />

      {/* Block 2 — Image Trio */}
      <ImageTrio />

      {/* Block 3 — Lead Magnet Band */}
      <LeadMagnetBand onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)} />

      {/* Block 4 — Parallax Services */}
      <ParallaxServices />

      {/* Block 5 — Services Accordion */}
      <ServicesAccordion />

      {/* Block 6 — Horizontal Carousel */}
      <HorizontalCarousel />

      {/* Block 7 — Footer + Contact Form */}
      <FooterFormBlock />

      {/* Questionnaire Modal (triggered from blocks 1 & 3) */}
      <QuestionnaireModal
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)}
      />
    </>
  );
}
