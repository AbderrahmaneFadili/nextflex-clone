import {
  fetchNetflixOriginalsBegin,
  fetchNetflixOriginalsSuccess,
  fetchNetflixOriginalsFailure,
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
