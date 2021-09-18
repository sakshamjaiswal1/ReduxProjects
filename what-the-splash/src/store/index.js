import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootREducer from '../reducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootREducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
