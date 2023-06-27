import axios from 'axios';

const API_KEY = 'a3efd2dd48cf6aca9d1b3d7226cefee9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async (detailedUrl, signal) => {
  const response = await axios.get(detailedUrl, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
};

export const fetchMoviesbyTitle = async (query, signal) => {
  const response = await axios.get('search/movie', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
    },
  });
  return response.data.results;
};
