
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
  link: string;
  className?: string;
}

const CategoryCard = ({
  title,
  description,
  image,
  count,
  link,
  className,
}: CategoryCardProps) => {
  return (
    <Link 
      to={link}
      className={cn(
        "block group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-display font-semibold">{title}</h3>
          <span className="text-sm px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
            {count} {count === 1 ? 'facility' : 'facilities'}
          </span>
        </div>
        <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-sm font-medium transition-all transform translate-x-0 group-hover:translate-x-1">
          <span>View all</span>
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
