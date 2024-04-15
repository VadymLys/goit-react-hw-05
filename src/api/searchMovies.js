import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTU0N2YwYWRkMzY1MGJhYmQzYmY3NTNiMzAwZTQ2OCIsInN1YiI6IjY2MTZmYTIwODY5ZTc1MDE2MzdmZjczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8By5xFouiVFF3ZrlsCziiPRRM3XisiS-kFp8pftW60M";

async function searchMovies(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
}

export { searchMovies };
