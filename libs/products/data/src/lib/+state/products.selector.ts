import { productsFeature } from './products.reducer';

const {selectProducts, selectProductDetails} = productsFeature

export const fromProducts = {
    selectProducts,
    selectProductDetails
}