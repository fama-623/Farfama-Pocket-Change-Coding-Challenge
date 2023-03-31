import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, selectFavorites } from '../reducers/favoritesReducer';

interface FavoriteMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const FavoritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavorites);

  const handleRemoveFavorite = (movieId: string) => {
    dispatch(removeFavorite(movieId));
  };

  return (
    <div className="flex flex-col items-center mt-8 py-16">
      <h1 className="text-4xl font-bold mb-4">Favorites</h1>
      {favoriteMovies.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16 p-16">
          {favoriteMovies.map((movie: FavoriteMovie) => (
            <li
              key={movie.imdbID}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <img
                src={movie.Poster}
                alt={`Poster for ${movie.Title}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
                <p className="text-gray-600 text-sm mb-2">Year: {movie.Year}</p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveFavorite(movie.imdbID)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl font-bold">You have no favorite movies.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
