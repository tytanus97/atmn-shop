import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { productsActions } from './products.action';
import { ApiClient } from '@atmn-shop/shared/data';
import { catchError, exhaustMap, filter, map, of, tap } from 'rxjs';
import { Product } from '@atmn-shop/shared/models';
import { Store } from '@ngrx/store';
import { fromProducts } from './products.selector';

@Injectable()
export class ProductEffect {
  private readonly _actions = inject(Actions);
  private readonly _apiClient = inject(ApiClient);
  private readonly _store = inject(Store)

  loadProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(productsActions.loadProducts),

      concatLatestFrom(() => this._store.select(fromProducts.selectLoadingStatus)),
      tap(console.log),
      filter(([_, loadingStatus]) => loadingStatus === 'NOT_LOADED'),
      tap(() => this._store.dispatch(productsActions.startLoading())),
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
