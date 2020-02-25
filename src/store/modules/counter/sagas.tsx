import { delay, put, takeEvery } from "redux-saga/effects";

import { increment } from "./actions";
import { INCREMENT_ASYNC } from "./types";

function* incrementSaga() {
  try {
    yield delay(5000);
    yield put(increment());
  } catch (error) {
    return null;
  }
}

export function* counterSagas() {
  yield takeEvery(INCREMENT_ASYNC, incrementSaga);
}
