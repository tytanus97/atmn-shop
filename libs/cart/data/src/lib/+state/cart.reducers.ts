import { Product } from '@atmn-shop/shared/models';
import { createFeature, createReducer } from '@ngrx/store';

export interface CartState {
    productsInCart: Product[]
    total: number
    elementsCount: number
}

const INITIAL_STATE: CartState = {
    productsInCart: [],
    total: 0,
    elementsCount: 0
}

export const cartFeature = createFeature({
    name: 'Cart',
    reducer: createReducer<CartState>(INITIAL_STATE,
        )
})