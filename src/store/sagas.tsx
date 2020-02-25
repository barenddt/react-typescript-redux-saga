import { all, fork } from "redux-saga/effects";

import { counterSagas } from "./modules/counter/sagas";

export default function* rootSaga() {
  yield all([fork(counterSagas)]);
}
