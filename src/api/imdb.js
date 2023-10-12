import axios from "axios";

const fetchPopularMovies = () =>
  axios.get(
    `${import.meta.env.VITE_IMDB_WEBSITE_URL}/MostPopularMovies/${import.meta.env.VITE_IMDB_KEY}`
  );

const fetchMovieTrailer = (id) =>
  axios.get(
    `${import.meta.env.VITE_IMDB_WEBSITE_URL}/Trailer/${import.meta.env.VITE_IMDB_KEY}/${id}`
  );

const fetchMovieDetails = (id) =>
  axios.get(
    `${import.meta.env.VITE_IMDB_WEBSITE_URL}/Title/${import.meta.env.VITE_IMDB_KEY}/${id}`
  );

export { fetchPopularMovies, fetchMovieDetails, fetchMovieTrailer };
