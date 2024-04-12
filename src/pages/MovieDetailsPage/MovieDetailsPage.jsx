import { useEffect, useState } from "react";
import { movieDetails } from "../../api/movieDetails";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
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

  return <div>MovieDetails</div>;
};

export default MovieDetailsPage;
