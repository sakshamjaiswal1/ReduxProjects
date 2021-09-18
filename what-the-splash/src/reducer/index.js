import { combineReducers } from 'redux';

import imageReducer from './imageReducer';
import loadReducer from './loadingReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootREducer = combineReducers({
    isLoading: loadReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootREducer;
