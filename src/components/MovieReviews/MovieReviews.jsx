import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviews } from "../../api/reviews";

const MovieReviews = () => {
  const [opinios, setOpinions] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        const data = await reviews(movieId);
        setOpinions(data);
      } catch (error) {
        return error.status;
      }
    }
    loadData();
  }, [movieId]);

  return <div>MovieReviews</div>;
};

export default MovieReviews;
