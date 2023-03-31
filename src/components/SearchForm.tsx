import React, { useState } from "react";

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-full border-2 border-gray-300 w-full max-w-md md:max-w-lg px-4 py-2 flex-shrink-0 hover:shadow-md "
    >
        <button type="submit" className="flex-shrink-0 flex-grow-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-current text-gray-500"
        viewBox="0 0 24 24"
      >
        <path d="M21.707,20.293l-5.146-5.146C17.238,13.509,18,11.844,18,10c0-4.411-3.589-8-8-8S2,5.589,2,10s3.589,8,8,8 c1.844,0,3.509-0.762,4.707-1.999l5.146,5.146c0.391,0.391,1.023,0.391,1.414,0l1.414-1.414 C22.098,21.316,22.098,20.684,21.707,20.293z M4,10c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S4,13.309,4,10z" />
      </svg>
      </button>
      <input
        className="flex-grow text-sm focus:outline-none p-1 bg-slate-50"
        type="search"
        name="query"
        placeholder=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
    </form>
  );
};

export default SearchForm;
