import { Component, Input, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atmn-shop-product-details-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss'],
})
export class ProductDetailsContainerComponent {
  @Input({transform: numberAttribute}) id!: number
}
