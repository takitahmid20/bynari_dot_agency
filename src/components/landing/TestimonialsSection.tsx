import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Bynari.agency helped us launch our MVP faster than expected. Their design and development process is thoughtful and professional.",
    author: "Sarah Johnson",
    company: "Tech Startup Co."
  },
  {
    quote: "Working with Bynari was seamless. The team delivered beautiful and functional digital solutions.",
    author: "Michael Chen",
    company: "E-commerce Business"
  },
  {
    quote: "They transformed our concept into a fully working product with clear focus on user experience.",
    author: "Emily Rodriguez",
    company: "SaaS Platform"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="border-2 border-black bg-white p-8 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-gray-400" />
      </div>
      
      {/* Quote Text */}
      <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author */}
      <div className="border-t-2 border-black pt-4">
        <p className="font-medium text-[#1A1A1A]">{testimonial.author}</p>
        <p className="text-sm text-gray-600 mt-1">{testimonial.company}</p>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
