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
    <div className="App">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search movies:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults &&
          searchResults.map((result, index) => (
            <div key={index}>
              <h2>{result.Title}</h2>
              <p>Year: {result.Year}</p>
              <p>Type: {result.Type}</p>
              <img src={result.Poster} alt={`Poster for ${result.Title}`} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
