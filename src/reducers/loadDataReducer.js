import { DATA } from "../constants";

const loadDataReducer = (state = [], action) => {
  if (action.type === DATA.LOAD_SUCCESS) {
    return [...state, ...action.data];
  }
  return state;
};

export default loadDataReducer;
