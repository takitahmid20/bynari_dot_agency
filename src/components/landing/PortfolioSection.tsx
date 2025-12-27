import React, { useState } from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Election 2026 Platform",
    description: "A comprehensive election management platform built for transparency and efficiency. Features real-time updates, candidate profiles, and voter information.",
    tags: ["Full Stack", "Web App", "Politics"],
    link: "https://election-2026.bynari.agency/"
  },
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
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="group cursor-pointer">
        {/* Project Image/Preview */}
        <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-video border-2 border-black">
          {project.link ? (
            <>
              <iframe 
                src={project.link}
                className="w-full h-full pointer-events-none"
                title={project.title}
                loading="lazy"
              />
              <button
                onClick={handleFullscreen}
                className="absolute top-2 right-2 bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800 border border-white z-10"
                title="View Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </>
          )}
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
        
        {/* Link */}
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:underline"
          >
            View Live Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>

    {/* Fullscreen Modal */}
    {isFullscreen && project.link && (
      <div className="fixed inset-0 z-50 bg-black">
        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="h-[24px] w-[24px] border border-white flex items-center justify-center">
              <img src="/bynari-svg-logo.svg" alt="Bynari Logo" className="w-full h-full" />
            </div>
            <span className="text-white font-medium">{project.title}</span>
          </div>
          <button
            onClick={handleCloseFullscreen}
            className="text-white hover:bg-gray-800 p-2 transition-colors"
            title="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="w-full h-full pt-[52px]">
          <iframe 
            src={project.link}
            className="w-full h-full"
            title={`${project.title} - Fullscreen`}
          />
        </div>
      </div>
    )}
  </>
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
