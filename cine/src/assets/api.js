import axios from "axios";

const API_KEY = "d5020016";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);

export const searchSeries = (query) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=series`);

export const getMovieDetail = (id) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);

export const fetchPopular = () => searchMovies("Dune");

export const getGenres = () => Promise.resolve({ data: { genres: [] } });
