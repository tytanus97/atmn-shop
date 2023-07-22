import { Route } from '@angular/router';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductDetailsContainerComponent } from './product-details-container/product-details-container.component';

export const PRODUCT_ROUTES: Route[] = [
    {
        path: '', component: ProductListContainerComponent,
    },
    {
        path:':id', component: ProductDetailsContainerComponent
    }

]