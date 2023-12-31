import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from '@atmn-shop/shared/models';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'atmn-shop-product-list-single-element',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,RouterModule],
  templateUrl: './product-list-single-element.component.html',
  styleUrls: ['./product-list-single-element.component.scss'],
})
export class ProductListSingleElementComponent {

  @Input() product!: Product
}
