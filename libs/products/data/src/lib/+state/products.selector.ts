import { productsFeature } from './products.reducer';

const {selectProducts, selectProductDetails, selectLoadingStatus} = productsFeature

export const fromProducts = {
    selectProducts,
    selectProductDetails,
    selectLoadingStatus
}