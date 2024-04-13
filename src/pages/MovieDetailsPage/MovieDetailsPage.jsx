import { useEffect, useState } from "react";
import { movieDetails } from "../../api/movieDetails";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (!movieId) return;
    async function loadData() {
      try {
        const data = await movieDetails(movieId);
        setMovie(data);
      } catch (error) {
        return error.status;
      }
    }
    loadData(movieId);
  }, [movieId]);

  const backLinkHref = location.state?.from ?? "/";

  const formatUserScore = (score) => {
    return `${Math.trunc(score * 10)}%`;
  };

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
            width="250"
          />

          <div>
            <h2>{movie.original_title}</h2>
            <p>User score: {formatUserScore(movie.vote_average)}</p>
            <p>Overview: {movie.overview}</p>
            <h2>
              <span>Genres:</span>
              {movie.genres.map((movie) => movie.name).join(",")}
            </h2>
          </div>
        </div>
      )}
      {movie && (
        <div>
          <h4>Adittional Information</h4>
          <ul>
            <li>
              <Link to={`movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
