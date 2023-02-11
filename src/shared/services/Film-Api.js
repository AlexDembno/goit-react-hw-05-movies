import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = '6c57fb02719926393bb8c06aa147886f';

export const searchFilmApi = search =>
  axios.get(
    `/search/movie?api_key=${API_KEY}&query=${search}&page=1&include_adult=false`
  );

export const searchFilmByID = id =>
  axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
