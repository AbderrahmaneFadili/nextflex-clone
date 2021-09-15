import {
  fetchNetflixOriginalsBegin,
  fetchNetflixOriginalsSuccess,
  fetchNetflixOriginalsFailure,
  fetchMoviesBegin,
  fetchNetflixOriginalsMoviesSuccess,
  fetchTrendingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchComedyMoviesSuccess,
  fetchRomanceMoviesSuccess,
  fetchHorrorMoviesSuccess,
  fetchDocumentariesSuccess,
  fetchActionMoviesSuccess,
  fetchMoviesFailure,
} from "../constants";

//fetch Netflix Originals Reducer
const initialState = {
  loading: false,
  result: null,
  error: null,
};

export const fetchNetflixOriginalsReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case fetchNetflixOriginalsBegin:
      return { ...state, loading: true, result: null, error: null };
    case fetchNetflixOriginalsSuccess:
      return { ...state, loading: false, result: payload, error: null };
    case fetchNetflixOriginalsFailure:
      return { ...state, loading: false, result: null, error: payload };
    default:
      return state;
  }
};

//fetch Movies Reducer
const moviesInitailState = {
  loading: false,
  NetflixOriginals: [],
  Trending: [],
  Trending: [],
  ActionMovies: [],
  ComedyMovies: [],
  HorrorMovies: [],
  RomanceMovies: [],
  RomanceMovies: [],
  error: null,
};

export const moviesReducer = (
  state = moviesInitailState,
  { type, payload },
) => {
  switch (type) {
    case fetchMoviesBegin:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchNetflixOriginalsMoviesSuccess:
      return {
        ...state,
        loading: false,
        NetflixOriginals: payload,
        error: null,
      };
    case fetchActionMoviesSuccess:
      return { ...state, loading: false, ActionMovies: payload, error: null };
    case fetchComedyMoviesSuccess:
      return { ...state, loading: false, ComedyMovies: payload, error: null };
    case fetchHorrorMoviesSuccess:
      return { ...state, loading: false, HorrorMovies: payload, error: null };
    case fetchDocumentariesSuccess:
      return { ...state, loading: false, Documentaries: payload, error: null };
    case fetchRomanceMoviesSuccess:
      return { ...state, loading: false, RomanceMovies: payload, error: null };
    case fetchTopRatedMoviesSuccess:
      return { ...state, loading: false, TopRated: payload, error: null };
    case fetchTrendingMoviesSuccess:
      return { ...state, loading: false, Trending: payload, error: null };
    case fetchMoviesFailure:
      return { ...state, loading: false, loading: false, error: payload };

    default:
      return state;
  }
};
