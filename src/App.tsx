import { useState } from "react";
import { searchMovies, SearchResult } from "./api";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";

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
      <div>
        <div className=" top-0 w-screen	bg-slate-50	z-10 shadow-lg p-5">
          <div className="flex flex-col items-center justify-center py-16 ">
            <h1 className="text-4xl font-bold py-8">Movie Search App</h1>
            <SearchForm onSubmit={handleSearch} />
          </div>
        </div>
        <div className=" flex flex-col items-center mt-8">
          {searchResults &&
            searchResults.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
