import React from 'react';
import { Palette, Code, Lightbulb, Sparkles } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating human-centered interfaces that are intuitive, engaging, and visually appealing."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web & App Development",
    description: "Building full-stack solutions with clean, maintainable code and performance-first approach."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Product Strategy",
    description: "Defining goals, mapping user journeys, and designing products that solve real problems."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Branding & Identity",
    description: "Developing strong visual identities and brand assets that make products stand out."
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  return (
    <div className="group cursor-pointer">
      <div className="border-2 border-black bg-white p-6 h-full transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Icon */}
        <div className="bg-black text-white w-12 h-12 flex items-center justify-center mb-4">
          {service.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-medium text-[#1A1A1A] mb-3">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
