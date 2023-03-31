import { useState } from "react";
import { searchMovies, SearchResult } from "./api";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";
import Logo from "./components/Logo";

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
    <div className="flex justify-center w-full ">
      <div>
        <div className=" top-0 w-screen	bg-slate-50	z-10 shadow-lg p-5">
          <div className="flex flex-col items-center justify-center py-16 ">
            <h1 className="text-4xl font-bold">Movie Search</h1>
            <Logo/>
            <SearchForm onSubmit={handleSearch} />
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16 p-16">
          {searchResults &&
            searchResults.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
