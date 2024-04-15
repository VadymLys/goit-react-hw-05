import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast } from "../../api/cast";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  console.log(movieId);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await Cast(movieId);
        console.log(data);
        setActors(data);
      } catch (error) {
        return error.status;
      }
    }
    loadData();
  }, [movieId]);
  return (
    <div>
      <h2>Movie Cast</h2>
      {actors && (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                  width={130}
                />
              ) : (
                <div>No image</div>
              )}
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
