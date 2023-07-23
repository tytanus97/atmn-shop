import { Product } from '@atmn-shop/shared/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const cartActions = createActionGroup({
    source: 'Cart',
    events: {
        'add product': props<{product: Product}>(),
        'product added': emptyProps(),
        'remove product': props<{product: Product}>(),
        'product removed': emptyProps()
    }
})