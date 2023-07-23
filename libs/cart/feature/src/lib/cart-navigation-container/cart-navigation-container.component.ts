import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartNavigationComponent } from '@atmn-shop/cart/ui';

@Component({
  selector: 'atmn-shop-cart-navigation-container',
  templateUrl: './cart-navigation-container.component.html',
  styleUrls: ['./cart-navigation-container.component.scss'],
  standalone: true,
  imports: [CommonModule, CartNavigationComponent]
})
export class CartNavigationContainerComponent {}
