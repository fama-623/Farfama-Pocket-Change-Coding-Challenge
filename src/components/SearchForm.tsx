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
      <label
        className="mr-4 text-md font-medium text-gray-600"
        htmlFor="query"
      >
        Search:
      </label>
      <input
        className="flex-grow text-md focus:outline-none p-1 bg-slate-50"
        type="search"
        name="query"
        placeholder="eg. Jurassic Park"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="flex-shrink-0 ml-4 flex-grow-0">
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;