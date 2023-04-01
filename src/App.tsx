import ReactPaginate from "react-paginate";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";
import Logo from "./components/Logo";
import { useMovieSearch } from "./hooks/useMovieSearch";

function App() {
  const {
    searchResults,
    totalPages,
    handleSearch,
    handlePageChange
  } = useMovieSearch();

  return (
    <div className="flex justify-center w-full ">
      <div>
        <div className="top-0 w-screen bg-slate-50 z-10 shadow-lg p-5">
          <div className="flex flex-col items-center justify-center py-16 ">
            <h1 className="text-4xl font-bold">Movie Search</h1>
            <Logo />
            <SearchForm onSubmit={handleSearch} />
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-16 p-16">
          {searchResults &&
            searchResults.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </ul>
        {totalPages > 0 && (
          <ReactPaginate
            pageCount={Math.ceil(totalPages / 10)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active-class"
            nextLabel=""
            previousLabel=""
            breakLabel=".."
          />
        )}
      </div>
    </div>
  );
}

export default App;
