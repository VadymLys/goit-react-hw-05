import { useEffect, useState } from "react";
import { castReviews } from "../../api/cast-reviews";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    async function loadData() {
      try {
        const data = await castReviews(movieId);
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
