import { provideState } from '@ngrx/store';
import { productsFeature } from './lib/+state/products.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './lib/+state/products.effect';

export const provideProducts = [
    provideState(productsFeature),
    provideEffects(ProductEffect)
]

export * from './lib/+state/products-facade'