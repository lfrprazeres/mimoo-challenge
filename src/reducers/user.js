import {
    LOGIN, PRODUCTS_SEARCHED_SUCCESS, NEW_PRODUCT_SEARCHED_SUCCESS, NEW_PRODUCT_SAVED
} from '../actions/user';
import { addNewProduct } from './utils/addNewProduct';

const initialState = {
    name: "",
    products: [],
    points: 0
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                name: payload,
                points: 100
            }
        }
        case PRODUCTS_SEARCHED_SUCCESS: {
            return {
                ...state,
                products: payload
            };
        }
        case NEW_PRODUCT_SEARCHED_SUCCESS: {
            return {
                ...state,
                newProduct: payload
            }
        }
        case NEW_PRODUCT_SAVED: {
            return {
                name: state.name,
                points: state.points + parseInt(payload.pointsEarned),
                products: addNewProduct(state.products, payload.product),
            }
        }
        default: 
            return state;
    }
}