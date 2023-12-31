import { Product } from '@atmn-shop/shared/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { productsActions } from './products.action';

export interface ProductsState {
    products: Product[],
    productDetails: Product | null,
    loadingStatus: "NOT_LOADED" | "LOADING" | "LOADED"
}

const INITIAL_STATE: ProductsState = {
    loadingStatus: "NOT_LOADED",
    products: [],
    productDetails: null
}

export const productsFeature = createFeature({
    name: 'Products',
    reducer: createReducer<ProductsState>(
        INITIAL_STATE,
        on(productsActions.loadProducts, (state) => ({...state})),
        on(productsActions.startLoading, (state) => ({...state, loadingStatus: 'LOADING'})),
        on(productsActions.loadProductsSuccess, (state, {products}) => ({...state, products, loadingStatus: 'LOADED'})),
        on(productsActions.loadProductsFailed, (state) => ({...state, loadingStatus: 'NOT_LOADED'})),
        on(productsActions.loadedSingleProductSuccess, (state, {product}) => ({...state, productDetails: product})),
        on(productsActions.loadedSingleProductFailed,productsActions.resetSingleProductDetails, (state) => ({...state, productDetails: null})),
    )
})