import { Product } from '@atmn-shop/shared/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const productsActions = createActionGroup({
    source: 'Products',
    events: {
        'load products': emptyProps(),
        'start loading': emptyProps(),
        'load products success': props<{products: Product[]}>(),
        'load products failed': emptyProps(),
        'load products single': props<{id: number}>(),
        'loaded single product success': props<{product: Product}>(),
        'loaded single product failed': emptyProps(),
        'reset single product details': emptyProps()
    }
})