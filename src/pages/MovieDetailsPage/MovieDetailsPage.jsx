import { useEffect, useState } from "react";
import { movieDetails } from "../../api/movieDetails";
import { useParams, Link, Outlet } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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

  const formatUserScore = (score) => {
    return `${Math.trunc(score * 10)}%`;
  };

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      <GoBackBtn />
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.original_title}
            width={250}
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
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
