import { DATA } from "../constants";

const loadData = () => ({
  type: DATA.LOAD,
});

const setData = (data) => ({
  type: DATA.LOAD_SUCCESS,
  data,
});

const setError = (error) => ({
  type: DATA.LOAD_FAIL,
  error,
});

export {
  loadData,
  setData,
  setError,
};
