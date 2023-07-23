import { Injectable } from '@angular/core';
import { Product } from '@atmn-shop/shared/models';
import { Observable, from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiClient {

    getProducts(): Observable<Product[]> {
        return from(fetch('/dummy-data.json').then(response => response.json()).then(data => data.products))
    }

    getProductById(id: number): Observable<Product> {
        return from(fetch('/dummy-data.json').then(response => response.json()).then(({products}) => {
            const found = this.findById(products,id) 
            if(!found) throw new Error('Product not found')
            return found 
        }))
    }


    private findById(products: Product[], id: number) {
        return products.find(product => product.id === id)
    }
}