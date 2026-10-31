"use client";

interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search students by name..."
      aria-label="Search students by name"
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900"/>
  );
};

export default SearchBox;
