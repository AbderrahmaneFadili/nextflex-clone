import { key } from "./key";

const BASE_URL = "https://api.themoviedb.org/3/";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${key}&languauge=en-US`,
  fetchNetflexOriginals: `/discover/tv?api_key=${key}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&languauge=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,
};

export { requests, BASE_URL };
