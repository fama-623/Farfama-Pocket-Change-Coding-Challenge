import { useState } from "react";
import { searchMovies, SearchResult } from "./api";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult["Search"]>(
    []
  );

  const handleSearch = (query: string) => {
    searchMovies(query).then((data: SearchResult) => {
      setSearchResults(data.Search);
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="">
        <div className=" top-0 w-screen	bg-slate-50	 z-10 shadow-lg	">
          <div className="flex flex-col items-center justify-center py-16 ">
            <h1 className="text-4xl font-bold py-8">Movie Search App</h1>
            <SearchForm onSubmit={handleSearch} />
          </div>
        </div>
        <div className=" flex flex-col items-center mt-8">
          {searchResults &&
            searchResults.map((result, index) => (
              <div key={index} className="mb-8">
                <img
                  src={result.Poster}
                  alt={`Poster for ${result.Title}`}
                />
                <h2>{result.Title}</h2>
                <p>Year: {result.Year}</p>
                <p>Type: {result.Type}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

