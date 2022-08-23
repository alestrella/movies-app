import axios from 'axios';

const AUTH_KEY = 'ac6d9c85bc39c965883addb2d25a5fb4';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const config = {
  params: {
    api_key: AUTH_KEY,
  },
};

export async function fetchTrendingMovies() {
  try {
    const { data } = await axios.get(`/trending/movie/day`, config);
    return data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
}

export async function fetchMovie(id) {
  try {
    const { data } = await axios.get(`/movie/${id}`, config);
    return data;
  } catch (error) {
    console.log('Error', error.message);
    return null;
  }
}

export async function fetchMovieCast(id) {
  try {
    const { data } = await axios.get(`movie/${id}/credits`, config);
    return data.cast;
  } catch (error) {
    console.log('Error', error.message);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`, config);
    return data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
}

export async function searchMovies(query) {
  const params = {
    params: {
      api_key: AUTH_KEY,
      query,
    },
  };
  try {
    const { data } = await axios.get('search/movie', params);
    return data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
}

export async function fetchGenres() {
  try {
    const { data } = await axios.get('genre/movie/list', config);
    return data.genres;
  } catch (error) {
    console.log('Error', error.message);
  }
}

export async function fetchMovieByGenre(genre) {
  try {
    const { data } = await axios.get(
      `discover/movie?with_genres=${genre}`,
      config
    );
    return data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
}
