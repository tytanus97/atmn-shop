import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@atmn-shop/shared/models';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'atmn-shop-product-details-info',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './product-details-info.component.html',
  styleUrls: ['./product-details-info.component.scss'],
})
export class ProductDetailsInfoComponent{
  @Input() product!: Product

  @Output() addToCart = new EventEmitter<Product>()

    
}
