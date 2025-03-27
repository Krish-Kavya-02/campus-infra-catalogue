
import React, { useEffect, useRef } from "react";
import { facilitiesData } from "@/utils/data";
import FacilityCard from "@/components/ui/FacilityCard";

const SeminarHalls = () => {
  const seminarHalls = facilitiesData["seminar-halls"];
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
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-800 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526041092631-2689f620aa3b?q=80&w=2070&auto=format&fit=crop"
            alt="Seminar Hall"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-blue-800/70 to-blue-800/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-fade-in">
              Seminar Halls
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our seminar halls provide ideal spaces for academic discussions, presentations, workshops, and small conferences with modern amenities and flexible configurations.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Interactive Spaces</div>
                  <div className="text-sm text-white/70">For collaborative learning</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Presentation Technology</div>
                  <div className="text-sm text-white/70">High-definition displays</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m16 12-4-4v8z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Online Booking</div>
                  <div className="text-sm text-white/70">Simple reservation system</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Seminar Halls</h2>
          <p className="text-muted-foreground">
            Select any seminar hall to explore detailed information about its facilities, features, and availability.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={contentRef}
        >
          {seminarHalls.map((hall) => (
            <FacilityCard
              key={hall.id}
              id={hall.id}
              type="seminar-halls"
              name={hall.name}
              image={hall.image}
              location={hall.location}
              capacity={hall.capacity}
              description={hall.description}
              className="opacity-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SeminarHalls;
