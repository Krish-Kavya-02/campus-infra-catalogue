
import React, { useEffect, useRef } from "react";
import { facilitiesData } from "@/utils/data";
import FacilityCard from "@/components/ui/FacilityCard";

const Cells = () => {
  const cells = facilitiesData.cells;
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
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-gray-900 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Special Cells"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-gray-900/70 to-gray-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-fade-in">
              Special Cells
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore our specialized cells providing focused support for career development, research, entrepreneurship, and various student initiatives across the campus.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5.5 20H8M12 20h2.5M8 20h4M8 20v-5M12 20v-5M17 4h.5a3 3 0 0 1 0 6H12M2.5 4H7a3 3 0 0 1 0 6h-1.5" />
                    <path d="M12 10v5" />
                    <path d="M6 10h.5a3 3 0 0 1 0 6h-3" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Expert Guidance</div>
                  <div className="text-sm text-white/70">Professional mentorship</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Personalized Support</div>
                  <div className="text-sm text-white/70">Tailored to individual needs</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Industry Connections</div>
                  <div className="text-sm text-white/70">Strong professional network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Special Cells</h2>
          <p className="text-muted-foreground">
            Select any specialized cell to explore detailed information about its services, successes, and opportunities.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={contentRef}
        >
          {cells.map((cell) => (
            <FacilityCard
              key={cell.id}
              id={cell.id}
              type="cells"
              name={cell.name}
              image={cell.image}
              location={cell.location}
              description={cell.description}
              className="opacity-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cells;
