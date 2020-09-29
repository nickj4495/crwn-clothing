import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxDevTools)
);

export default store;
