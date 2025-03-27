
import React, { useEffect, useRef } from "react";
import { facilitiesData } from "@/utils/data";
import FacilityCard from "@/components/ui/FacilityCard";

const Auditoriums = () => {
  const auditoriums = facilitiesData.auditoriums;
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
      <section className="relative py-20 bg-primary mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580212204038-ea66cc1d3629?q=80&w=1964&auto=format&fit=crop"
            alt="Auditorium"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 animate-fade-in">
              Auditoriums
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore our state-of-the-art auditoriums designed to host a variety of events, from academic conferences to cultural performances. Each space offers modern amenities and flexible configurations.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M17 7h.01" />
                    <path d="M7 17h.01" />
                    <path d="M17 17h.01" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Multiple Venues</div>
                  <div className="text-sm text-white/70">For various event sizes</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Modern AV Equipment</div>
                  <div className="text-sm text-white/70">For professional presentations</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-medium">Flexible Capacity</div>
                  <div className="text-sm text-white/70">From 250 to 800 seats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Auditoriums</h2>
          <p className="text-muted-foreground">
            Select any auditorium to explore detailed information about its facilities, capacity, and past events.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={contentRef}
        >
          {auditoriums.map((auditorium, index) => (
            <FacilityCard
              key={auditorium.id}
              id={auditorium.id}
              type="auditoriums"
              name={auditorium.name}
              image={auditorium.image}
              location={auditorium.location}
              capacity={auditorium.capacity}
              description={auditorium.description}
              className="opacity-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Auditoriums;
