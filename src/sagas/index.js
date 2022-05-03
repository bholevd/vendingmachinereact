import { all } from "redux-saga/effects";

import loadDataSaga from "./loadDataSaga";

export default function* rootSaga() {
  yield all([loadDataSaga()]);
}
