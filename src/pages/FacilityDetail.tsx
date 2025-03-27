
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, MapPin, Users, CalendarIcon, CheckCircle } from "lucide-react";
import { facilitiesData } from "@/utils/data";

const FacilityDetail = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [facility, setFacility] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (type && id && facilitiesData[type as keyof typeof facilitiesData]) {
      const foundFacility = facilitiesData[type as keyof typeof facilitiesData].find(
        (f: any) => f.id === id
      );
      setFacility(foundFacility);
    }
    setLoading(false);
  }, [type, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Facility Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The facility you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="flex items-center text-primary hover:underline"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Home
        </Link>
      </div>
    );
  }

  const getBackLink = () => {
    switch (type) {
      case "auditoriums":
        return "/auditoriums";
      case "labs":
        return "/labs";
      case "seminar-halls":
        return "/seminar-halls";
      case "cells":
        return "/cells";
      default:
        return "/";
    }
  };

  const formatType = (type: string) => {
    return type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to={getBackLink()}
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to {formatType(type || "")}
        </Link>

        <div className="relative rounded-xl overflow-hidden mb-8 h-[400px] bg-muted">
          <div 
            className={`absolute inset-0 bg-muted/20 backdrop-blur-sm flex items-center justify-center z-10 transition-opacity duration-500 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
          <img
            src={facility.image}
            alt={facility.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {facility.name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-2" />
                <span>{facility.location}</span>
              </div>
              
              {facility.capacity && (
                <div className="flex items-center text-muted-foreground">
                  <Users size={18} className="mr-2" />
                  <span>Capacity: {facility.capacity}</span>
                </div>
              )}
            </div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed mb-6">{facility.description}</p>
              
              {/* Facility-specific content based on type */}
              {type === "auditoriums" && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {facility.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Past Events</h3>
                  <div className="space-y-4 mb-8">
                    {facility.pastEvents.map((event: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-3 mt-1 p-1 bg-muted rounded-md">
                          <CalendarIcon size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{event.name}</div>
                          <div className="text-sm text-muted-foreground">{event.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {type === "labs" && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Equipment & Technology</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {facility.equipment.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Research Focus</h3>
                  <p className="mb-8">{facility.research}</p>
                </>
              )}
              
              {type === "seminar-halls" && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Features & Technology</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {facility.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Scheduling Information</h3>
                  <p className="mb-8">{facility.schedule}</p>
                </>
              )}
              
              {type === "cells" && (
                <>
                  <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {facility.services.map((service: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Achievements & Impact</h3>
                  <p className="mb-8">{facility.success}</p>
                </>
              )}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-muted/50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{facility.location}</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <div className="font-medium">Contact Number</div>
                    <div className="text-muted-foreground">+123 456 7890</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-primary flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@campus.edu</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <a
                  href="#"
                  className="inline-block w-full bg-primary text-primary-foreground py-3 rounded-lg text-center font-medium transition-transform hover:translate-y-[-2px]"
                >
                  Book this Facility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail;
