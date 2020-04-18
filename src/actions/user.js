import { RSAA } from 'redux-api-middleware';

const standardStart = "USER::";
export const LOGIN = `${standardStart}LOGIN`;

export const login = (name) => {
    return {
        type: LOGIN,
        payload: name
    };
};

export const SEARCH_PRODUCTS = `${standardStart}SEARCH_PRODUCTS`;

export const searchProduct = () => {
    return {
        type: SEARCH_PRODUCTS
    };
};

export const SEARCHING_PRODUCTS = `${standardStart}SEARCHING_PRODUCTS`;
export const PRODUCTS_SEARCHED_SUCCESS = `${standardStart}PRODUCTS_SEARCHED_SUCCESS`;
export const PRODUCTS_SEARCHED_FAILURE = `${standardStart}PRODUCTS_SEARCHED_FAILURE`;

export const searchingProducts = () => {
    return {
        [RSAA]: {
            endpoint: "https://virtserver.swaggerhub.com/mimoo-tech/frontend-challenge-api/1.0.0/products",
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            types: [{
                type: SEARCHING_PRODUCTS
            }, {
                type: PRODUCTS_SEARCHED_SUCCESS,
                payload: async (action, state, response) => {
                    let data = await response.json().then(data => data);
                    return data
                }
            }, {
                type: PRODUCTS_SEARCHED_FAILURE
            }]
        }
    }
}

export const SEARCH_NEW_PRODUCT = `${standardStart}SEARCH_NEW_PRODUCT`;
export const searchNewProduct = barCode => {
    return {
        type: SEARCH_NEW_PRODUCT,
        payload: {
            barCode
        }
    }
}

export const SEARCHING_NEW_PRODUCT = `${standardStart}SEARCHING_NEW_PRODUCT`;
export const NEW_PRODUCT_SEARCHED_SUCCESS = `${standardStart}NEW_PRODUCT_SEARCHED_SUCCESS`;
export const NEW_PRODUCT_SEARCHED_FAILURE = `${standardStart}NEW_PRODUCT_SEARCHED_FAILURE`;

export const searchingNewProduct = (barCode) => {
    return {
        [RSAA]: {
            endpoint: `https://virtserver.swaggerhub.com/mimoo-tech/frontend-challenge-api/1.0.0/products/${barCode}`,
            method: 'GET',
            types: [
                {
                    type: SEARCHING_NEW_PRODUCT
                },
                {
                    type: NEW_PRODUCT_SEARCHED_SUCCESS,
                    payload: async (action,state,response) => {
                        let data = await response.json().then(data => data);
                        return data;
                    }
                },
                {
                    type: NEW_PRODUCT_SEARCHED_FAILURE
                }
            ]
        }
    }
}

export const NEW_PRODUCT_SAVED = `${standardStart}NEW_PRODUCT_SAVED`;

export const saveNewProduct = (product, pointsEarned) => {
    return {
        type: NEW_PRODUCT_SAVED,
        payload: {
            product,
            pointsEarned
        }
    }
}