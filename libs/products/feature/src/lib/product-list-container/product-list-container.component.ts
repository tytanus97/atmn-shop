import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsFacade } from '@atmn-shop/products/data';
import { ProductListSingleElementComponent } from '@atmn-shop/products/ui';
import { Product } from '@atmn-shop/shared/models';

@Component({
  selector: 'atmn-shop-product-list-container',
  standalone: true,
  imports: [CommonModule, NgFor,ProductListSingleElementComponent],
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit{
  private readonly _productsFacade = inject(ProductsFacade)
  products$ = this._productsFacade.products$
  
  ngOnInit(): void {
    this._productsFacade.loadProducts()
  }

  trackByFn(index: any, product: Product) {
    return product.id
  }

}