import { userReducer as reducer } from '../../src/reducers/user';
import { LOGIN, PRODUCTS_SEARCHED_SUCCESS, NEW_PRODUCT_SEARCHED_SUCCESS, NEW_PRODUCT_SAVED } from '../../src/actions/user';
import { products, newProduct } from '../mocks';
import { addNewProduct } from '../../src/reducers/utils/addNewProduct';

let initialState;

describe('User reducer test', () => {
    beforeEach(() => {
        initialState = {
            name: "",
            products: [],
            points: 0
        };
      });
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGIN', () => {
        let login = (name) => {
            return reducer(initialState, {
                type: LOGIN,
                payload: name
            });
        };
        initialState = login("Nome");
        expect(initialState).toEqual({
            name: "Nome",
            points: 100,
            ...initialState
        });
    });
    it('should handle PRODUCTS_SEARCHED_SUCCESS', () => {
        let searchingProducts = () => {
            return reducer(initialState, {
                type: PRODUCTS_SEARCHED_SUCCESS,
                payload: products
            });
        };
        initialState = searchingProducts();
        expect(initialState).toMatchObject({
            ...initialState,
            products: products
        });
    });
    it('should handle NEW_PRODUCT_SEARCHED_SUCCESS', () => {
        let searchingNewProduct = () => {
            return reducer(initialState, {
                type: NEW_PRODUCT_SEARCHED_SUCCESS,
                payload: newProduct
            });
        };
        initialState = searchingNewProduct();
        expect(initialState).toMatchObject({
            ...initialState,
            newProduct: newProduct
        });
    });
    it('should handle NEW_PRODUCT_SAVED', () => {
        let saveNewProduct = () => {
            return reducer(initialState, {
                type: NEW_PRODUCT_SAVED,
                payload: {
                    pointsEarned: 100,
                    product: newProduct
                }
            });
        };
        initialState = saveNewProduct();
        expect(initialState).toMatchObject({
            ...initialState,
            points: 100,
            products: addNewProduct([], newProduct)
        });
    });
})