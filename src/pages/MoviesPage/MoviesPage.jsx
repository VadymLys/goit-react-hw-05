import { useEffect, useState } from "react";
import { searchMovies } from "../../api/searchMovies";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import css from "../MoviesPage/MoviesPage.module.css";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;
    async function loadData() {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.error("Error searching movies:", error);
        setError("An error occurred while searching for movies.");
      }
    }
    loadData();
  }, [query]);

  const handleChangeSearch = (evt) => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.query.value });
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Search movie</h2>
      <form onSubmit={handleChangeSearch}>
        <input
          type="text"
          name="query"
          defaultValue={query || ""}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>

      {error && <p className={css.error}>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
