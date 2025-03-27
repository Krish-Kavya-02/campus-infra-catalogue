
import React, { useEffect, useRef } from "react";
import { facilitiesData } from "@/utils/data";
import FacilityCard from "@/components/ui/FacilityCard";

const Labs = () => {
  const labs = facilitiesData.labs;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = contentRef.current?.children;
    if (childElements) {
      Array.from(childElements).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (childElements) {
        Array.from(childElements).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-teal-800 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="Research Laboratory"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/70 to-teal-800/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-fade-in">
              Research Laboratories
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Discover our cutting-edge research laboratories equipped with advanced technology to support innovation and academic excellence across disciplines.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M10 2v8.5a2.5 2.5 0 0 1-5 0V2" />
                    <path d="M7 2v8.5a2.5 2.5 0 0 0 5 0V2" />
                    <path d="M8.5 2h7l-.01 5.99" />
                    <path d="M14 22H8L7 16H4.5L6 9h12l1.5 7H17l-1 6h-3Z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Specialized Equipment</div>
                  <div className="text-sm text-white/70">For advanced research</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Safety Protocols</div>
                  <div className="text-sm text-white/70">Meeting international standards</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Global Collaboration</div>
                  <div className="text-sm text-white/70">Research partnerships worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Laboratories</h2>
          <p className="text-muted-foreground">
            Select any laboratory to explore detailed information about its equipment, research focus, and capabilities.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={contentRef}
        >
          {labs.map((lab) => (
            <FacilityCard
              key={lab.id}
              id={lab.id}
              type="labs"
              name={lab.name}
              image={lab.image}
              location={lab.location}
              capacity={lab.capacity}
              description={lab.description}
              className="opacity-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Labs;
