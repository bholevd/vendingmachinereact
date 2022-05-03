import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import loadDataReducer from "./loadDataReducer";
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    data: loadDataReducer,
    error: errorReducer,
});

export default rootReducer;
