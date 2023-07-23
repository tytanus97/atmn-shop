import { Injectable, inject } from '@angular/core';
import { Product } from '@atmn-shop/shared/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromProducts } from './products.selector';
import { productsActions } from './products.action';

@Injectable({providedIn: 'root'})
export class ProductsFacade {

    private readonly _store = inject(Store);

    get products$(): Observable<Product[]> {
        return this._store.select(fromProducts.selectProducts)
    }
    
    get productDetails$(): Observable<Product | null> {
        return this._store.select(fromProducts.selectProductDetails)
    }
    
    loadProducts() {
        this._store.dispatch(productsActions.loadProducts())
    }

    loadSingleProductDetails(id: number) {
        this._store.dispatch(productsActions.loadProductsSingle({id}))
    }

    resetSingleProductDetails() {
        this._store.dispatch(productsActions.resetSingleProductDetails())
    }
}