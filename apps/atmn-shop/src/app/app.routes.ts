import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('@atmn-shop/products/feature'),
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];
