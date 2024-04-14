import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cast } from "../../api/cast";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    async function loadData() {
      try {
        const data = await Cast(movieId);
        setCast(data);
      } catch (error) {
        return error.status;
      }
    }
    loadData();
  }, [movieId]);
  return <div>MovieCast</div>;
};

export default MovieCast;
