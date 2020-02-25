import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const loggerMiddleware = createLogger({
  collapsed: true
});

export const sagaMiddleware = createSagaMiddleware();

export const middleware = [loggerMiddleware, sagaMiddleware];
