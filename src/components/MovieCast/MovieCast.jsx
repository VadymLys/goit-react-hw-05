import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast } from "../../api/cast";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function loadData() {
      try {
        const data = await Cast(movieId);
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
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              />
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
