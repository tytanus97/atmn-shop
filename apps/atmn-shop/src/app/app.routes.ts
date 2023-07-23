import { Route } from '@angular/router';
import { provideProducts } from '@atmn-shop/products/data';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    providers: provideProducts,
    loadChildren: () => import('@atmn-shop/products/feature'),
  },
  {
    path: 'cart',
    loadChildren: () => import('@atmn-shop/cart/routes')
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];
