import { Injectable } from '@angular/core';
import { Product } from '@atmn-shop/shared/models';
import { Observable, from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiClient {

    getProducts(): Observable<Product[]> {
        return from(fetch('/dummy-data.json').then(response => response.json()).then(data => data.products))
    }
}