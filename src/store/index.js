import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchNetflixOriginalsReducer } from "./reducers";

const rootReducer = combineReducers({
  fetchNetflixOriginalsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
