import { useState, useEffect } from "react";
import { searchMovies, trendingMovies } from "../../api/searchImages";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
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

  return <div>Hello</div>;
};

export default HomePage;
