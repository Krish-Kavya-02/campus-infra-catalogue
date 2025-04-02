
import React, { useEffect, useRef } from "react";
import { categoryData } from "@/utils/data";
import CategoryCard from "@/components/ui/CategoryCard";

const Index = () => {
  const featuredRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-bottom");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = featuredRef.current?.children;
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
    <div className="min-h-screen">
      {/* Hero Section with enhanced decoration */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/62e25fc0-c07b-46b2-8fa9-ec0edcda4a7b.png"
            alt="VIT University Campus Entrance"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-40"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-white text-center animate-fade-in">
          <div className="p-2 inline-block rounded-full bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium px-3 py-1">Discover Our Campus</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Explore Our Campus Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Discover state-of-the-art facilities, versatile spaces, and
            specialized resources designed to enhance your academic experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <a href="#categories" className="relative px-7 py-3 bg-black rounded-lg leading-none flex items-center">
                <span className="text-white group-hover:text-white transition duration-200">Discover Facilities</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#categories" className="text-white/80 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Explore Our Facilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the diverse range of infrastructure available to support
              your educational journey, research endeavors, and extracurricular
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={featuredRef}>
            {categoryData.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                image={category.image}
                count={category.count}
                link={category.link}
                className="opacity-0"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
