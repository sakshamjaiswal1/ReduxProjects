import { combineReducers } from 'redux';

import imageReducer from './imageReducer';
import loadReducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';

const rootREducer = combineReducers({
    isLoading: loadReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootREducer;
