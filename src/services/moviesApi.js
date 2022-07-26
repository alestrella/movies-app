import axios from 'axios';

const AUTH_KEY = 'ac6d9c85bc39c965883addb2d25a5fb4';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${AUTH_KEY}`);
  console.log('into fetch trending :>> ');

  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${AUTH_KEY}&language=en-US`
  );
  console.log('into fetch by id :>> ');
  return response.data;
}
