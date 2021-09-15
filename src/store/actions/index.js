import { BASE_URL } from "../../api";
import {
  //fetch Net flix Originals
  fetchNetflixOriginalsBegin,
  fetchNetflixOriginalsSuccess,
  fetchNetflixOriginalsFailure,
  //fetch Movies
  fetchMoviesBegin,
  fetchMoviesFailure,
  fetchNetflixOriginalsMoviesSuccess,
  fetchTrendingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchRomanceMoviesSuccess,
  fetchDocumentariesSuccess,
  fetchHorrorMoviesSuccess,
  fetchComedyMoviesSuccess,
  fetchActionMoviesSuccess,
} from "../constants";

//fetch Netflix Originals Actions

const fetchNetflixOriginalsBeginAction = () => ({
  type: fetchNetflixOriginalsBegin,
});

const fetchNetflixOriginalsSuccessAction = (payload) => ({
  type: fetchNetflixOriginalsSuccess,
  payload,
});

const fetchNetflixOriginalsFailureAction = (payload) => ({
  type: fetchNetflixOriginalsFailure,
  payload,
});

export const fetchNetflixOriginalsAction = (request) => (dispatch) => {
  dispatch(fetchNetflixOriginalsBeginAction());
  fetch(`${BASE_URL}${request}`)
    .then((r) => r.json())
    .then((d) =>
      dispatch(
        fetchNetflixOriginalsSuccessAction(
          d.results[Math.floor(Math.random() * d.results.length - 1)],
        ),
      ),
    )
    .catch((e) => dispatch(fetchNetflixOriginalsFailureAction(e)));
};

export const fetchNetflixOriginalsRow = (request) => (dispatch) => {
  dispatch(fetchNetflixOriginalsBeginAction());
  fetch(`${BASE_URL}${request}`)
    .then((r) => r.json())
    .then((d) => dispatch(fetchNetflixOriginalsSuccessAction(d.results)))
    .catch((e) => dispatch(fetchNetflixOriginalsFailureAction(e)));
};

//etch movies actions
const fetchMoviesBeginAction = () => ({
  type: fetchMoviesBegin,
});

const fetchNetflixOriginalsMoviesSuccessAction = (payload) => ({
  type: fetchNetflixOriginalsMoviesSuccess,
  payload,
});

const fetchTrendingMoviesSuccessAction = (payload) => ({
  type: fetchTrendingMoviesSuccess,
  payload,
});

const fetchTopRatedMoviesSuccessAction = (payload) => ({
  type: fetchTopRatedMoviesSuccess,
  payload,
});

const fetchRomanceMoviesSuccessAction = (payload) => ({
  type: fetchRomanceMoviesSuccess,
  payload,
});

const fetchDocumentariesSuccessAction = (payload) => ({
  type: fetchDocumentariesSuccess,
  payload,
});

const fetchHorrorMoviesSuccessAction = (payload) => ({
  type: fetchHorrorMoviesSuccess,
  payload,
});

const fetchComedyMoviesSuccessAction = (payload) => ({
  type: fetchComedyMoviesSuccess,
  payload,
});

const fetchActionMoviesSuccessAction = (payload) => ({
  type: fetchActionMoviesSuccess,
  payload,
});

const fetchMoviesFailureAction = (payload) => ({
  type: fetchMoviesFailure,
  payload,
});

export const fetchMoviesAction = (request, typeOfRequest) => (dispatch) => {
  console.log(`${BASE_URL}${request}`);
  dispatch(fetchMoviesBeginAction());
  fetch(`${BASE_URL}${request}`)
    .then((r) => r.json())
    .then((d) => {
      switch (typeOfRequest) {
        case "fetchNetflixOriginals":
          dispatch(fetchNetflixOriginalsMoviesSuccessAction(d.results));
          break;
        case "fetchTrending":
          dispatch(fetchTrendingMoviesSuccessAction(d.results));
          break;
        case "fetchTopRated":
          dispatch(fetchTopRatedMoviesSuccessAction(d.results));
          break;
        case "fetchActionMovies":
          dispatch(fetchActionMoviesSuccessAction(d.results));
          break;
        case "fetchComedyMovies":
          dispatch(fetchComedyMoviesSuccessAction(d.results));
          break;
        case "fetchHorrorMovies":
          dispatch(fetchHorrorMoviesSuccessAction(d.results));
          break;
        case "fetchRomanceMovies":
          dispatch(fetchRomanceMoviesSuccessAction(d.results));
          break;
        case "fetchDocumentaries":
          dispatch(fetchDocumentariesSuccessAction(d.results));
          break;
      }
    })
    .catch((e) => dispatch(fetchMoviesFailureAction(e)));
};
