import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsActions } from './products.action';
import { ApiClient } from '@atmn-shop/shared/data';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Product } from '@atmn-shop/shared/models';

@Injectable()
export class ProductEffect {
  private readonly _actions = inject(Actions);
  private readonly _apiClient = inject(ApiClient);

  loadProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(productsActions.loadProducts),
      exhaustMap(() =>
        this._apiClient.getProducts().pipe(
          map((products: Product[]) =>
            productsActions.loadProductsSuccess({ products })
          ),
          catchError((error: any) => of(productsActions.loadProductsFailed()))
        )
      )
    )
  );

  loadSingleProduct = createEffect(() =>
    this._actions.pipe(
      ofType(productsActions.loadProductsSingle),
      exhaustMap(({ id }) =>
        this._apiClient
          .getProductById(id)
          .pipe(
            map((product: Product) =>
              productsActions.loadedSingleProductSuccess({ product })
            ),
            catchError((error: any) => of(productsActions.loadedSingleProductFailed()))
          )
      )
    )
  );
}
