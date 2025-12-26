import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Taki Tahmid",
    role: "Founder & Designer",
    tagline: "Crafting experiences that matter.",
    initials: "TT"
  },
  {
    name: "Friend 1",
    role: "Developer",
    tagline: "Turning ideas into working products.",
    initials: "F1"
  },
  {
    name: "Friend 2",
    role: "Frontend & Designer",
    tagline: "Pixel-perfect interfaces.",
    initials: "F2"
  },
  {
    name: "Friend 3",
    role: "Operations / Client Manager",
    tagline: "Bridging clients and team.",
    initials: "F3"
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group">
      {/* Avatar */}
      <div className="relative mb-4 overflow-hidden">
        <div className="aspect-square border-2 border-black bg-white flex items-center justify-center text-4xl font-medium text-[#1A1A1A] transition-all duration-300 group-hover:bg-black group-hover:text-white">
          {member.initials}
        </div>
      </div>
      
      {/* Info */}
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-[#1A1A1A]">
          {member.name}
        </h3>
        <div className="bg-white border border-black px-3 py-1 inline-block">
          <span className="text-xs font-medium uppercase">
            {member.role}
          </span>
        </div>
        <p className="text-gray-600 italic">
          "{member.tagline}"
        </p>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600">
            Small team, serious craft
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
