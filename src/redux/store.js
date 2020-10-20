import { createStore } from "redux";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, reduxDevTools);

export const persistor = persistStore(store);
