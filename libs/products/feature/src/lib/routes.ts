import { Route } from '@angular/router';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { provideProducts } from '@atmn-shop/products/data';

export const PRODUCT_ROUTES: Route[] = [
    {
        providers: [provideProducts],
        path: '', component: ProductListContainerComponent
    }
]