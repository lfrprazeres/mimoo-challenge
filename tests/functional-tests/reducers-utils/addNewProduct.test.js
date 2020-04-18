import { addNewProduct } from '../../../src/reducers/utils/addNewProduct';
import { newProduct, products } from '../../mocks';


describe('fire addNewProduct function', () => {
    it('Should add a new Product in a existent category', () => {
        const expectedResponse = [{
            category: 'Skin Care',
            brands: [{
                name: 'brand 1',
                products: [{
                    image: newProduct.image,
                    name: newProduct.name
                }]
            }]
        }];
        expect(addNewProduct(products, newProduct)).toMatchObject(expectedResponse);
    });
    it("Should create another category if it doesn't exist", () => {
        const expectedResponse = [{
            category: 'Skin Care',
            brands: [{
                name: 'brand 1',
                products: [{
                    image: newProduct.image,
                    name: newProduct.name
                }]
            }]
        }];
        expect(addNewProduct([], newProduct)).toMatchObject(expectedResponse);
    });
});
