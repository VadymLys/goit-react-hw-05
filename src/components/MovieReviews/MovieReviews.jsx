import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviews } from "../../api/reviews";

const MovieReviews = () => {
  const [opinions, setOpinions] = useState([]);
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

  return (
    <div>
      <h2>Movie Reviews</h2>
      {opinions.length > 0 ? (
        <ul>
          {opinions.map((opinion) => (
            <li key={opinion.id}>
              <p>Author:{opinion.author}</p>
              <p>{opinion.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
