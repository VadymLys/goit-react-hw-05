import axios from "axios";

async function searchMovies(query) {
  try {
    const API_KEY =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU0N2YwYWRkMzY1MGJhYmQzYmY3NTNiMzAwZTQ2OCIsInN1YiI6IjY2MTZmYTIwODY5ZTc1MDE2MzdmZjczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8By5xFouiVFF3ZrlsCziiPRRM3XisiS-kFp8pftW60M";

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day/`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export { searchMovies };
