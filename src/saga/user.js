import { put, takeEvery } from 'redux-saga/effects';
import {
    SEARCH_PRODUCTS,
    searchingProducts,
    SEARCH_NEW_PRODUCT,
    searchingNewProduct
} from '../actions/user';

function* searchProductsSaga({type, payload}) {
    yield put(searchingProducts());
};

export function* watchSearchProducts() {
    yield takeEvery(SEARCH_PRODUCTS, searchProductsSaga);
}


function* searchNewProductSaga({type, payload}) {
    yield put(searchingNewProduct(payload.barCode));
};

export function* watchSearchNewProduct() {
    yield takeEvery(SEARCH_NEW_PRODUCT, searchNewProductSaga);
}