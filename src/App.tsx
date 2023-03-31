import { useEffect, useState } from 'react';
import { searchMovies, SearchResult } from './api';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult['Search']>([]);

  useEffect(() => {
    searchMovies('Batman').then((data: SearchResult) => {
      setSearchResults(data.Search);
    });
  }, []);
  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <div className="search-results">
        {searchResults.map((result, index) => (
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
