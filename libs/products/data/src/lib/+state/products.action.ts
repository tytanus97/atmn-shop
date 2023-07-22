import { Product } from '@atmn-shop/shared/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const productsActions = createActionGroup({
    source: 'Products',
    events: {
        'load products': emptyProps(),
        'load products success': props<{products: Product[]}>(),
        'load products failed': emptyProps()
    }
})