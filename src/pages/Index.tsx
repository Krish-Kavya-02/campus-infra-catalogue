
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoryData } from "@/utils/data";
import CategoryCard from "@/components/ui/CategoryCard";

const Index = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
            alt="Campus Buildings"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-white text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Explore Our Campus Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Discover state-of-the-art facilities, versatile spaces, and
            specialized resources designed to enhance your academic experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/auditoriums"
              className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-opacity-95 transition-all transform hover:-translate-y-1"
            >
              Explore Facilities
            </Link>
            <a
              href="#categories"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Learn More
            </a>
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

      {/* Feature Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069&auto=format&fit=crop"
                  alt="Campus Facilities"
                  className="rounded-xl shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">13+</div>
                    <div className="text-sm text-muted-foreground">
                      Specialized Facilities
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our campus boasts modern facilities designed to provide an
                optimal environment for learning, research, and collaboration.
                Each space is thoughtfully designed to meet the specific needs of
                our academic community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Auditoriums</h3>
                    <p className="text-muted-foreground">
                      Fully equipped spaces for events, conferences, and performances.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Advanced Research Labs</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge equipment for scientific exploration and innovation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Specialized Cells</h3>
                    <p className="text-muted-foreground">
                      Dedicated units for career development, entrepreneurship, and research support.
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/auditoriums"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                <span>View All Facilities</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Explore Our Campus?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Browse through our comprehensive catalogue of facilities and discover
            the perfect spaces for your academic needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/auditoriums"
              className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-opacity-95 transition-all transform hover:-translate-y-1"
            >
              Explore Facilities
            </Link>
            <Link
              to="/cells"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Visit Special Cells
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
