import { put, call, takeEvery } from "redux-saga/effects";

import { setData, setError } from "../actions";
import { DATA } from "../constants";
import { fetchData } from "../api";

// export const getPage = (state) => state.nextPage;

export function* handleDataLoad() {
  try {
    // const page = yield select(getPage);
    const data = yield call(fetchData);
    yield put(setData(data));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchDataLoad() {
  yield takeEvery(DATA.LOAD, handleDataLoad);
}
