import { all } from 'redux-saga/effects';

import imageSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imageSaga(), statsSaga()]);
}
