import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api/index';
import {
    loadImagesStats,
    setImagesStats,
    setImageStatsError,
} from '../actions';

function* handleStatsRequest(id) {
    for (let index = 0; index < 3; index++) {
        try {
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            return true;
        } catch (err) {}
    }
    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let index = 0; index < images.length; index++) {
            yield fork(handleStatsRequest, images[index].id);
        }
    }
}
