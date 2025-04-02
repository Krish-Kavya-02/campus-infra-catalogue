
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MapPin, Users, Calendar } from "lucide-react";

const FacilityCard = ({
  id,
  type,
  name,
  image,
  location,
  capacity,
  description,
  className,
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    navigate(`/facility/${type}/${id}`);
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden cursor-pointer group animate-scale-in",
        className
      )}
      onClick={handleClick}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <div 
          className={cn(
            "absolute inset-0 bg-muted/20 backdrop-blur-sm flex items-center justify-center",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {description}
          </p>
        )}
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={14} className="mr-1.5 flex-shrink-0" />
            <span>{location}</span>
          </div>
          {capacity && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users size={14} className="mr-1.5 flex-shrink-0" />
              <span>Capacity: {capacity}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
