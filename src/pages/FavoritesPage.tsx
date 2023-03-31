import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite,selectFavorites } from '../reducers/favoritesReducer';

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
    <div>
      <h1>Favorites</h1>
      {favoriteMovies.length > 0 ? (
        <ul>
          {favoriteMovies.map((movie: FavoriteMovie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
              <h2>{movie.Title}</h2>
              <p>Year: {movie.Year}</p>
              <button onClick={() => handleRemoveFavorite(movie.imdbID)}>Remove from favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no favorite movies.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
