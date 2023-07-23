import { Product } from '@atmn-shop/shared/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { cartActions } from './cart.actions';

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
        on(cartActions.addProduct,(state, action) => {
            const productsInCart = [...state.productsInCart,action.product]
            const elementsCount = state.elementsCount + 1
            const total = state.total + action.product.price

            return {...state,productsInCart, elementsCount, total}
        })
        )
})