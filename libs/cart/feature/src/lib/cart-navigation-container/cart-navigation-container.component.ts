import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartFacade } from '@atmn-shop/cart/data';
import { CartNavigationComponent } from '@atmn-shop/cart/ui';
import { Store } from '@ngrx/store';

@Component({
  selector: 'atmn-shop-cart-navigation-container',
  templateUrl: './cart-navigation-container.component.html',
  styleUrls: ['./cart-navigation-container.component.scss'],
  standalone: true,
  imports: [CommonModule, CartNavigationComponent]
})
export class CartNavigationContainerComponent {

  private readonly _router = inject(Router)
  private readonly _cartFacade = inject(CartFacade)

  itemCount$ = this._cartFacade.cartItemCount$

  onShowCartDetails() {
    this._router.navigateByUrl('cart')
  }
}
