import { applyMiddleware, createStore } from "redux";

import { middleware } from "./middleware";
import { sagaMiddleware } from "./middleware";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export default function configureStore(preloadedState: object) {
  const middlewareEnhancer = applyMiddleware(...middleware);
  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
