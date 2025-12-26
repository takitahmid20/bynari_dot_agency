import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { PortfolioSection } from '@/components/landing/PortfolioSection';
import { TeamSection } from '@/components/landing/TeamSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Bynari.agency - We Build Products That Move People"
        description="Small team, big impact — we design, develop, and ship digital solutions that work. UI/UX Design, Web & App Development, Product Strategy, and Branding."
      />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
