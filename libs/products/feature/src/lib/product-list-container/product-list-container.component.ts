import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFacade } from '@atmn-shop/products/data';
import { tap } from 'rxjs';

@Component({
  selector: 'atmn-shop-product-list-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit{
  private readonly _productsFacade = inject(ProductsFacade)
  products$ = this._productsFacade.products$.pipe(tap(console.log)).subscribe()
  
  ngOnInit(): void {
    this._productsFacade.loadProducts()
  }

}