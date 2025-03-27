
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { facilitiesData } from "@/utils/data";

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      const searchResults = Object.entries(facilitiesData).flatMap(([type, facilities]) => {
        return facilities.filter(facility => 
          facility.name.toLowerCase().includes(value.toLowerCase()) ||
          facility.description?.toLowerCase().includes(value.toLowerCase())
        ).map(facility => ({
          ...facility,
          type
        }));
      });
      
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleSelectResult = (result: any) => {
    navigate(`/facility/${result.type}/${result.id}`);
    setQuery("");
    setResults([]);
    onClose && onClose();
  };

  return (
    <div className="container max-w-2xl mx-auto">
      <div className="relative">
        <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="px-3 text-muted-foreground">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search facilities..."
            value={query}
            onChange={handleSearch}
            className="flex-1 py-3 px-2 outline-none text-foreground"
            autoFocus
          />
          {query && (
            <button 
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              className="px-3 text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        {results.length > 0 && (
          <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-10 border animate-fade-in">
            <ul className="max-h-64 overflow-y-auto">
              {results.map((result) => (
                <li 
                  key={`${result.type}-${result.id}`}
                  className="border-b last:border-0 hover:bg-muted/50 cursor-pointer"
                  onClick={() => handleSelectResult(result)}
                >
                  <div className="px-4 py-3">
                    <div className="font-medium">{result.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {result.type.replace('-', ' ')}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
