import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <div className="h-[34px] w-[34px] border border-black flex items-center justify-center">
              <img src="/bynari-svg-logo.svg" alt="Bynari Logo" className="w-full h-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-[#1A1A1A]">
              Who We Are
            </h2>
          </div>
          
          {/* Content */}
          <div className="pl-0 md:pl-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Bynari.agency is a compact team of designers and developers passionate about building 
              intuitive, scalable, and beautiful digital products. Every project is crafted with care, 
              from idea to launch, combining creativity, strategy, and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
