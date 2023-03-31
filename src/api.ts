export type SearchResult = {
  Search: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
  totalResults: string;
  Response: string;
};

export type SearchResultItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const OMDB_API_URL = "https://www.omdbapi.com";
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query: string): Promise<SearchResult> => {
  const response = await fetch(
    `${OMDB_API_URL}/?apikey=${OMDB_API_KEY}&s=${query}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
