import * as actions from '../../src/actions/user';

describe('Fire user actions', () => {
    it('Should login', () => {
        const expectedResponse = {
            type: actions.LOGIN,
            payload: "User"
        };
        expect(actions.login("User")).toEqual(expectedResponse);
    });

    it('Should search products', () => {
        const expectedResponse = {
            type: actions.SEARCH_PRODUCTS,
        };
        expect(actions.searchProduct()).toEqual(expectedResponse);
    });

    it('Should search a new product', () => {
        const barCode = "000";
        const history = "";
        const expectedResponse = {
            type: actions.SEARCH_NEW_PRODUCT,
            payload: {
                barCode,
                history
            }
        };
        expect(actions.searchNewProduct(barCode, history)).toStrictEqual(expectedResponse);
    });

    it('Should save the new product', () => {
        const product = {};
        const pointsEarned = 100;
        const expectedResponse = {
            type: actions.NEW_PRODUCT_SAVED,
            payload: {
                product,
                pointsEarned
            }
        };
        expect(actions.saveNewProduct(product,pointsEarned)).toStrictEqual(expectedResponse);
    });

});