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
    
    loadProducts() {
        this._store.dispatch(productsActions.loadProducts())
    }
}