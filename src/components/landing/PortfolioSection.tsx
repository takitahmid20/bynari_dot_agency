import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "SaaS Analytics Dashboard",
    description: "Redesigned the interface for a data analytics platform, improving usability and clarity.",
    tags: ["UI/UX", "Web App", "Data Viz"]
  },
  {
    title: "E-commerce MVP",
    description: "Built a responsive e-commerce MVP for a small business, optimized for mobile and desktop.",
    tags: ["Full Stack", "E-commerce", "Mobile"]
  },
  {
    title: "Internal Logistics Tool",
    description: "Developed a web app for internal logistics management, simplifying workflows.",
    tags: ["Web App", "Enterprise", "Workflow"]
  },
  {
    title: "Landing Page for Tech Startup",
    description: "Crafted a modern, conversion-focused landing page for a SaaS startup.",
    tags: ["Landing Page", "SaaS", "Marketing"]
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image Placeholder */}
      <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-video border-2 border-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transition-transform duration-500 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ExternalLink className="w-12 h-12 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      {/* Project Info */}
      <div className="space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="bg-white border border-black px-3 py-1 text-xs font-medium uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-medium text-[#1A1A1A] group-hover:underline">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600">
            A selection of projects we've crafted with care
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
