import { useEffect, useState } from "react";
import { searchMovies } from "../../api/searchMovies";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    async function loadData() {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        return error.status;
      }
    }
    loadData();
  }, [query]);

  const handleChangeSearch = (evt) => {
    evt.preventDefault();
    setSearchParams((searchParams) => {
      searchParams.set("query", evt.target.elements.query.value);
      return searchParams;
    });
  };

  return (
    <div>
      <h2>Search movie</h2>
      <form onSubmit={handleChangeSearch}>
        <input type="text" name="query" defaultValue={query || ""} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MoviesPage;
