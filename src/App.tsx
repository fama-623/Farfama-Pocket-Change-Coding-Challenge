import { useEffect, useState } from "react";
import { searchMovies, SearchResult } from "./api";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult["Search"]>(
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies(query).then((data: SearchResult) => {
      setSearchResults(data.Search);
    });
  };

  return (
    <div className="flex justify-center w-full">
    <div className="h-screen">
      <div className=" top-0 w-full bg-white z-10">
        <div className="flex flex-col items-center justify-center py-16 ">
          <h1 className="text-4xl font-bold py-8">Movie Search App</h1>
          <form
            onSubmit={handleSubmit}
            className="flex items-center rounded-full border-2 border-gray-300 w-full max-w-md md:max-w-lg px-4 py-2 flex-shrink-0"
          >
            <label
              className="mr-4 text-md font-medium text-gray-600"
              htmlFor="query"
            >
              Search:
            </label>
            <input
              className="flex-grow text-md focus:outline-none p-1"
              type="search"
              name="query"
              placeholder="eg. Jurassic Park"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="flex-shrink-0 ml-4 flex-grow-0"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M21.707,20.293l-5.146-5.146C17.238,13.509,18,11.844,18,10c0-4.411-3.589-8-8-8S2,5.589,2,10s3.589,8,8,8 c1.844,0,3.509-0.762,4.707-1.999l5.146,5.146c0.391,0.391,1.023,0.391,1.414,0l1.414-1.414 C22.098,21.316,22.098,20.684,21.707,20.293z M4,10c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S4,13.309,4,10z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className=" flex-col items-center mt-8">
        {searchResults &&
          searchResults.map((result, index) => (
            <div key={index} className="mb-8">
              <h2>{result.Title}</h2>
              <p>Year: {result.Year}</p>
              <p>Type: {result.Type}</p>
              <img src={result.Poster} alt={`Poster for ${result.Title}`} />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default App;

