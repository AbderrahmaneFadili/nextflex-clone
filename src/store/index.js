import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchNetflixOriginalsReducer, moviesReducer } from "./reducers";

const rootReducer = combineReducers({
  fetchNetflixOriginalsReducer,
  moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
