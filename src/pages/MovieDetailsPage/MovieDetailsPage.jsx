import { useEffect, useState, useRef } from "react";
import { movieDetails } from "../../api/movieDetails";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { MdArrowBack } from "react-icons/md";

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

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      <Link to={backLinkHref.current} className={css.btnBack}>
        <MdArrowBack className={css.arrow} />
        Go back
      </Link>
      {movie && (
        <div className={css.container}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt="poster"
            width={250}
          />

          <div className={css.list}>
            <h2 className={css.title}>{movie.original_title}</h2>
            <p className={css.score}>
              User score: {formatUserScore(movie.vote_average)}
            </p>
            <p className={css.genres}>Overview: {movie.overview}</p>
            <h2 className={css.genresTitle}>
              Genres: {movie.genres.map((movie) => movie.name).join(", ")}
            </h2>
          </div>
        </div>
      )}
      {movie && (
        <div className={css.info}>
          <h4 className={css.titleInfo}>Adittional Information</h4>
          <ul className={css.listInfo}>
            <li>
              <Link to={`cast`} className={css.itemInfo}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={`reviews`} className={css.itemInfo}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
