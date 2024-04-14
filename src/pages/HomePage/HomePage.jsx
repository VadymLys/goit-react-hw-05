import { useState, useEffect } from "react";
import { trendingMovies } from "../../api/trendingMovies";
import MovieList from "../../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";

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
        toast.error("An error occurred while fetching trending movies.");
      } finally {
        setError(false);
      }
    }
    loadData();
  }, []);

  if (error) {
    return toast.error("An error occurred while fetching trending movies.");
  }

  return (
    <>
      <MovieList movies={movies} />
      <Toaster position="top-right" />
    </>
  );
};

export default HomePage;
