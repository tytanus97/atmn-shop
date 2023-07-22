import { Route } from '@angular/router';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';

export const PRODUCT_ROUTES: Route[] = [
    {
        path: '', component: ProductListContainerComponent
    }
]