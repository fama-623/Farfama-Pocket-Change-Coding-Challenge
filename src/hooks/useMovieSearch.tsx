import { useState } from "react";
import { searchMovies, SearchResult } from "../api/omdbApi";

export function useMovieSearch() {
  const [searchResults, setSearchResults] = useState<SearchResult["Search"]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchMovies(query, 1).then((data: SearchResult) => {
      setSearchResults(data.Search);
      setTotalPages(Math.ceil(parseInt(data.totalResults) / 10));
      setCurrentPage(1);
    });
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    const pageNumber = selectedItem.selected + 1;
    searchMovies(searchQuery, pageNumber).then((data: SearchResult) => {
      setSearchResults(data.Search);
      setCurrentPage(pageNumber);
    });
  };

  return {
    searchResults,
    currentPage,
    totalPages,
    searchQuery,
    handleSearch,
    handlePageChange
  };
}