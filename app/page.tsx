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
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"
import { LanyardProvider, useLanyard } from "@/components/lanyard-context"

function HomeContent() {
  const { showLanyard } = useLanyard();

  return (
    <main className="min-h-screen bg-[#FFFFFF] relative">
      <div
        className={`fixed top-0 left-0 w-full h-screen z-10 pointer-events-none transition-all duration-700 ease-in-out ${showLanyard ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
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
      <ArticlesSection />
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
