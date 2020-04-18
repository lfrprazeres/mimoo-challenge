import { all } from 'redux-saga/effects';
import { watchSearchProducts, watchSearchNewProduct } from './user';


export default function* Saga() {
    yield all([
        watchSearchProducts(),
        watchSearchNewProduct(),
    ])
}