"use client"

import { Navigation } from "@/components/navigation"
import Lanyard from "@/components/lanyard"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"

import { Footer } from "@/components/footer"
import { LanyardProvider, useLanyard } from "@/components/lanyard-context"

function HomeContent() {
  const { showLanyard } = useLanyard();

  return (
    <main className="min-h-screen bg-[#FFFFFF] relative">
      {/* Lanyard always visible, hanging from right side of navbar */}
      <div
        className="absolute -top-48 right-8 w-[800px] h-[1200px] z-10 pointer-events-none"
        style={{ transform: 'scale(1.3)', transformOrigin: 'top right' }}
      >
        <Lanyard />
      </div>
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />

      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <LanyardProvider>
      <HomeContent />
    </LanyardProvider>
  )
}
