import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BoxPosition {
  x: number;
  y: number;
}

export const HeroSection: React.FC = () => {
  const [boxes, setBoxes] = useState<BoxPosition[]>([
    { x: 100, y: 10 },    // We
    { x: 270, y: 10 },    // Build
    { x: 480, y: 10 },    // Products
    { x: 130, y: 110 },   // That
    { x: 330, y: 110 },   // Move
    { x: 550, y: 110 },   // People
  ]);
  
  const [dragging, setDragging] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    const box = e.currentTarget as HTMLElement;
    const rect = box.getBoundingClientRect();
    setDragging(index);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging !== null && heroRef.current) {
      const heroRect = heroRef.current.getBoundingClientRect();
      const newX = e.clientX - heroRect.left - offset.x;
      const newY = e.clientY - heroRect.top - offset.y;
      
      setBoxes(prev => {
        const updated = [...prev];
        updated[dragging] = { x: newX, y: newY };
        return updated;
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const boxData = [
    { text: 'We', rotation: '-2deg', animationClass: 'animate-[slideInRotate1_0.6s_ease-out_0.1s_forwards]', bg: '' },
    { text: 'Build', rotation: '1deg', animationClass: 'animate-[slideInRotate2_0.6s_ease-out_0.3s_forwards]', bg: '' },
    { text: 'Products', rotation: '-1.5deg', animationClass: 'animate-[slideInRotate3_0.6s_ease-out_0.5s_forwards]', bg: 'bg-[#ff6bff] rounded-[20px] md:rounded-[40px]' },
    { text: 'That', rotation: '2deg', animationClass: 'animate-[slideInRotate4_0.6s_ease-out_0.7s_forwards]', bg: '' },
    { text: 'Move', rotation: '-1deg', animationClass: 'animate-[slideInRotate5_0.6s_ease-out_0.9s_forwards]', bg: '' },
    { text: 'People', rotation: '1.5deg', animationClass: 'animate-[slideInRotate6_0.6s_ease-out_1.1s_forwards]', bg: '' },
  ];

  return (
    <section className="pt-32 md:pt-40 lg:pt-48 pb-6 md:pb-16 lg:pb-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline with draggable bordered boxes */}
        <div 
          ref={heroRef}
          className="relative min-h-[220px] mb-6 md:mb-10 flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {boxData.map((box, index) => (
            <span
              key={index}
              className={`absolute border border-black px-3 md:px-6 py-2 md:py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium opacity-0 cursor-move select-none ${box.bg} ${box.animationClass}`}
              style={{
                left: `${boxes[index].x}px`,
                top: `${boxes[index].y}px`,
                transform: `rotate(${box.rotation})`,
              }}
              onMouseDown={(e) => handleMouseDown(index, e)}
            >
              {box.text}
            </span>
          ))}
        </div>
        {/* Subheadline */}
        <p className="text-sm md:text-base lg:text-[18px] text-black max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.3s_forwards]">
          Small team, big impact — we design, develop, and ship digital solutions that work.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.5s_forwards]">
          <Button 
            onClick={handleStartProject}
            className="bg-black text-white border-2 border-black px-8 h-12 hover:bg-white hover:text-black transition-colors rounded-none"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            onClick={handleExploreWork}
            variant="outline"
            className="border-2 border-black px-8 h-12 hover:bg-black hover:text-white transition-colors rounded-none"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};
