import { SearchResultItem } from "../api";

interface Props {
  movie: SearchResultItem;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="mb-8">
      <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  );
};

export default MovieCard;