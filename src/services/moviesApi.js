import axios from 'axios';

const AUTH_KEY = 'ac6d9c85bc39c965883addb2d25a5fb4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${AUTH_KEY}`);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${AUTH_KEY}&language=en-US`
  );
  return response.data;
}
