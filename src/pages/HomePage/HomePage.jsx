import { useState, useEffect } from "react";
import { searchMovies } from "../../api/searchImages";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    async function loadData() {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(true);
        return error.status;
      } finally {
        setError(false);
      }
    }
    loadData(query);
  }, []);

  return <div>Hello</div>;
};

export default HomePage;
