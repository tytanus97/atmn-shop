import { Product } from '@atmn-shop/shared/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { productsActions } from './products.action';

export interface ProductsState {
    products: Product[]
    loadingStatus: "NOT_LOADED" | "LOADING" | "LOADED"
}

const INITIAL_STATE: ProductsState = {
    loadingStatus: "NOT_LOADED",
    products: []
}

export const productsFeature = createFeature({
    name: 'Products',
    reducer: createReducer<ProductsState>(
        INITIAL_STATE,
        on(productsActions.loadProductsSuccess, (state, {products}) => ({...state, products}))
    )
})