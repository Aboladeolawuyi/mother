"use client";
import { useState, useRef } from "react";

import Navigation from "@/components/common/Navigation";
import LandingSection from "@/components/LandingSection";
import TheFilmBox from "@/components/common/theFilm";
import SectionWithBackground from "@/components/SectionBackground";
import PostersSection from "@/components/theFilm/PostersSection";
import FilmmakersSection from "@/components/theFilm/FilmmakersSection";
import CinemaListings from "@/components/theFilm/CinemaListings";
import DocumentaryStills from "@/components/theFilm/DocumentaryStills";
import MovieBento from "@/components/mocMovie";
import TheHeadline from "@/components/theImpact/TheHeadline";
import BeneContent from "@/components/theImpact/BeneContent";
import GoalsTimeline from "@/components/theImpact/GoalsTimeline";
import SupportSection from "@/components/SupportSection";
import PressMentions from "@/components/theImpact/PressMentions";
import ContactHero from "@/components/contacts/ContactHero";

export default function LandingPage() {
  const [muted, setMuted] = useState(true);
  const trailerRef = useRef<HTMLDivElement>(null);

  const scrollToTrailer = () => {
    trailerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navigation muted={muted} setMuted={setMuted} />

      {/* Main Landing Section with video */}
      <section id="landing-section" className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted={muted}
          playsInline
        >
          <source src="/assets/video/moc-video02.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <LandingSection onWatchTrailer={scrollToTrailer} />
      </section>

      {/* Trailer Section */}
      <section
        ref={trailerRef}
        id="trailer-section"
        className="bg-neutral-950 text-white py-12"
      >
        <MovieBento trailerId="TGJ3ZQPos0A" showTrailer showPosters={false} />
      </section>

      {/* The Film Section */}
      <SectionWithBackground
        id="the-film-section"
        videoSrc="/assets/video/moc-the-film.mp4"
        overlay
        className="min-w-full relative z-10"
      >
        <div className="min-h-[130vh] relative z-10">
          <TheFilmBox />
        </div>
      </SectionWithBackground>

      {/* Posters Section */}
      <section id="the-mothers" className="bg-neutral-950 text-white py-12">
        <header className="border-b p-10 lg:p-16 flex justify-between items-center">
          <div className="lg:text-[70px] text-[40px] tracking-tight4 leading-0 font-guthenBloots text-gray-200">
            The Mothers
          </div>
        </header>
        <PostersSection />
      </section>

      {/* Filmmakers Section */}
      <FilmmakersSection />

      {/* Cinema Listings Section */}
      <section id="cinema-listings">
        <CinemaListings />
      </section>

      {/* Documentary Stills Section */}
      <DocumentaryStills />

      {/* Impact Section */}
      <section
        id="the-impact"
        className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-impact-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <TheHeadline />
          <BeneContent />
          <GoalsTimeline />
        </div>
      </section>

      {/* Support Section */}
      <section
        id="plant-seed"
        className="flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/moc-background-dark.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <SupportSection />
        </div>
      </section>

      {/* Press Mentions */}
      <section
        id="press"
        className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-impact-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <PressMentions />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/moc-background-dark.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <ContactHero />
        </div>
      </section>
    </main>
  );
}