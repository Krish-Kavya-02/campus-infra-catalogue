
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search, LogIn } from "lucide-react";
import SearchBar from "../ui/SearchBar";
import { Button } from "../ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Auditoriums", path: "/auditoriums" },
    { name: "Labs", path: "/labs" },
    { name: "Seminar Halls", path: "/seminar-halls" },
    { name: "Special Cells", path: "/cells" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold text-primary">
            Campus Infrastructure
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="gap-2">
              <LogIn size={16} />
              Login
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors mr-2"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md animate-fade-in shadow-md">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "py-2 px-3 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md p-4 animate-fade-in">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
