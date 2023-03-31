import { useDispatch, useSelector } from "react-redux";
import { SearchResultItem } from "../api";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../reducers/favoritesReducer";

interface Props {
  movie: SearchResultItem;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(
    (favMovie) => favMovie.imdbID === movie.imdbID
  );

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie.imdbID));
  };

  return (
    <li
      key={movie.imdbID}
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-200 ease-in-out"
    >
      <img
        className="w-full h-96 object-cover"
        src={movie.Poster}
        alt={`Poster for ${movie.Title}`}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
        <p className="text-gray-600 text-sm mb-2">Year: {movie.Year}</p>
        {isFavorite ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRemoveFavorite}
          >
            Remove from Favorite
          </button>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddFavorite}
          >
            Favorite
          </button>
        )}
      </div>
    </li>
  );
};

export default MovieCard;
