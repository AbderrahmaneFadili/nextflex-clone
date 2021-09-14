import { BASE_URL } from "../../api";
import {
  fetchNetflixOriginalsBegin,
  fetchNetflixOriginalsSuccess,
  fetchNetflixOriginalsFailure,
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
