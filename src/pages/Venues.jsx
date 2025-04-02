
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BuildingCard = ({ 
  name, 
  image, 
  description, 
  link = "#" 
}) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="text-white border-white/30 hover:bg-white/20 hover:text-white w-full">
          Explore
        </Button>
      </Link>
    </div>
  </div>
);

const Venues = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Campus Venues</h1>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Buildings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BuildingCard 
              name="Technology Tower (TT)" 
              image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop"
              description="A modern building housing computer science labs, classrooms, and faculty offices with cutting-edge facilities."
              link="/buildings/tt"
            />
            <BuildingCard 
              name="SMV Building" 
              image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop"
              description="Home to engineering departments, featuring specialized labs and research centers."
              link="/buildings/smv"
            />
            <BuildingCard 
              name="SJT Building" 
              image="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&auto=format&fit=crop"
              description="The main academic complex with lecture halls, administrative offices, and student service centers."
              link="/buildings/sjt"
            />
            <BuildingCard 
              name="MGR Auditorium" 
              image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&auto=format&fit=crop"
              description="A state-of-the-art auditorium for academic conferences, cultural events, and ceremonies."
              link="/buildings/mgr"
            />
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Featured Venue</h2>
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&auto=format&fit=crop"
                    alt="Anna Auditorium" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Anna Auditorium</h3>
                  <p className="text-slate-700 mb-6">
                    The Anna Auditorium is our premier venue for hosting large-scale events, conferences, and cultural performances. 
                    With a seating capacity of over 2,000, this state-of-the-art facility features advanced audio-visual equipment, 
                    excellent acoustics, and versatile staging options.
                  </p>
                  <p className="text-slate-700 mb-6">
                    The auditorium is equipped with modern amenities including climate control, comfortable seating, 
                    professional lighting systems, and backstage facilities for performers. Its architecture combines 
                    functionality with elegance, creating an inspiring space for academic and cultural gatherings.
                  </p>
                  <Link to="/venues/anna-auditorium">
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
