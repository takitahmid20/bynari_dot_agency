import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return createPortal(
    <>
      <nav className="fixed top-8 left-4 md:left-8 z-[2000] flex items-center gap-0" >
      {/* Logo */}
      <Link to="/" className="h-[34px] w-[34px] border border-black flex items-center justify-center">
        <img src="/bynari-svg-logo.svg" alt="Bynari Logo" className="w-full h-full" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <button 
          onClick={() => scrollToSection('about')}
          className="relative overflow-hidden bg-white text-black h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border border-black leading-none group"
        >
          <span className="relative z-10">ABOUT</span>
          <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
        <button 
          onClick={() => scrollToSection('services')}
          className="relative overflow-hidden bg-white text-black h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-black leading-none group"
        >
          <span className="relative z-10">SERVICES</span>
          <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="relative overflow-hidden bg-white text-black h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-black leading-none group"
        >
          <span className="relative z-10">PORTFOLIO</span>
          <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
        <button 
          onClick={() => scrollToSection('team')}
          className="relative overflow-hidden bg-white text-black h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-black leading-none group"
        >
          <span className="relative z-10">TEAM</span>
          <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="relative overflow-hidden bg-white text-black h-[34px] px-3 flex items-center text-[11px] font-medium uppercase border-l-0 border border-black leading-none group"
        >
          <span className="relative z-10">CONTACT</span>
          <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </button>
      </div>

      {/* Mobile Navigation - Full Screen */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[3000] flex flex-col animate-in slide-in-from-top duration-300">
          {/* Close header */}
          <div className="bg-[#1A1A1A] flex items-center justify-center py-16 animate-in fade-in duration-500">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-[11px] font-medium uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 flex flex-col bg-white">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex-1 flex items-center justify-center text-[#1A1A1A] text-[17px] font-medium uppercase border-b border-black tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="flex-1 flex items-center justify-center text-[#1A1A1A] text-[17px] font-medium uppercase border-b border-black tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="flex-1 flex items-center justify-center text-[#1A1A1A] text-[17px] font-medium uppercase border-b border-black tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              PORTFOLIO
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="flex-1 flex items-center justify-center text-[#1A1A1A] text-[17px] font-medium uppercase border-b border-black tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              TEAM
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex-1 flex items-center justify-center text-[#1A1A1A] text-[17px] font-medium uppercase tracking-[-0.34px] animate-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
      
      {/* Menu Button - Mobile Only */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden relative overflow-hidden bg-white text-black h-[34px] px-3 border border-l-0 border-black flex items-center justify-center text-[11px] font-medium uppercase leading-none group"
      >
        <span className="relative z-10">MENU</span>
        <span className="absolute inset-0 bg-[#FA76FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
      </button>
    </nav>
    </>,
    document.body
  );
};
