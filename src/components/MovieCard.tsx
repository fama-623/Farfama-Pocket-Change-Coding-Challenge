import { useDispatch, useSelector } from "react-redux";
import { SearchResultItem } from "../api";
import { addFavorite, removeFavorite } from "../reducers/favoritesReducer";

interface Props {
  movie: SearchResultItem;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.items);
  const isFavorite = favorites.some(
    (favMovie: { imdbID: string }) => favMovie.imdbID === movie.imdbID
  );

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(movie.imdbID));
  };

  return (
    <div className="mb-8">
      <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      {isFavorite ? (
        <button onClick={handleRemoveFavorite}>Remove from favorites</button>
      ) : (
        <button onClick={handleAddFavorite}>Add to favorites</button>
      )}
      <p>
        Current favorites:{" "}
        {favorites.map((movie: { Title: any }) => movie.Title).join(", ")}
      </p>
    </div>
  );
};

export default MovieCard;
