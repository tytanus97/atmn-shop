import { provideState } from '@ngrx/store'
import { cartFeature } from './lib/+state/cart.reducers'
import { provideEffects } from '@ngrx/effects'
import { CartEffects } from './lib/+state/cart.effects'

export * from './lib/+state/cart-facade'

export const provideCart = [
    provideState(cartFeature),
    provideEffects(CartEffects)
]