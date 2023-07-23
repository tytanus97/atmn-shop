import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromCart } from './cart.selectors';
import { Product } from '@atmn-shop/shared/models';
import { Observable } from 'rxjs';
import { cartActions } from './cart.actions';

@Injectable({providedIn: 'root'})
export class CartFacade {
 
    private readonly _store = inject(Store)

    get cartProducts$(): Observable<Product[]> {
        return this._store.select(fromCart.selectProductsInCart)
    }

    get cartTotal$(): Observable<number> {
        return this._store.select(fromCart.selectTotal)
    }

    get cartItemCount(): Observable<number> {
        return this._store.select(fromCart.selectElementsCount)
    }

    addProduct(product: Product) {
        this._store.dispatch(cartActions.addProduct({product}))
    }

    removeProduct(product: Product) {
        this._store.dispatch(cartActions.removeProduct({product}))
    }
    
}