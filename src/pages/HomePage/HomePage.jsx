import { useState, useEffect } from "react";
import { trendingMovies } from "../../api/trendingMovies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
        console.error("Error searching movies:", error);
        setError("An error occurred while searching for movies.");
      } finally {
        setError(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
