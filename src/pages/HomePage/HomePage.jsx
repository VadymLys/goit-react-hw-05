import { useState, useEffect } from "react";
import { trendingMovies } from "../../api/trendingMovies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
        return error.status;
      } finally {
        setError(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
