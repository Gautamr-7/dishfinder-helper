
import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBox = ({ onSearch, placeholder = "Search for dishes..." }: SearchBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative w-full max-w-2xl mx-auto transition-all duration-300 ${
        isFocused
          ? "transform scale-[1.02] shadow-lg"
          : "shadow-md hover:shadow-lg"
      }`}
    >
      <div
        className={`relative flex items-center overflow-hidden rounded-xl 
          backdrop-blur-sm bg-white/80 border transition-all duration-300
          ${isFocused ? "border-gray-400" : "border-gray-200"}`}
      >
        <Search
          className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
            isFocused ? "text-gray-800" : "text-gray-400"
          }`}
        />
        <input
          type="text"
          className="w-full py-4 pl-12 pr-4 text-lg bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
