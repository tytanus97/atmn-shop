import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFacade } from '@atmn-shop/products/data';

@Component({
  selector: 'atmn-shop-product-details-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss'],
})
export class ProductDetailsContainerComponent implements OnInit, OnDestroy {
  private readonly _productsFacade = inject(ProductsFacade);

  product$ = this._productsFacade.productDetails$;

  @Input({ transform: numberAttribute }) id!: number;

  ngOnInit(): void {
    this._productsFacade.loadSingleProductDetails(this.id);
  }

  ngOnDestroy(): void {
    this._productsFacade.resetSingleProductDetails();
  }
}
