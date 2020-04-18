
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Saga from '../saga';
import { Reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, Reducers);

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            apiMiddleware
        )
    )
);

sagaMiddleware.run(Saga);

const persistor = persistStore(store);
export { store, persistor }