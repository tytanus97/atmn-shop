import { Component, EventEmitter, Output } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'atmn-shop-cart-navigation',
  templateUrl: './cart-navigation.component.html',
  styleUrls: ['./cart-navigation.component.scss'],
  standalone: true,
  imports: [MatBadgeModule]
})
export class CartNavigationComponent {

  @Output() showCartDetails = new EventEmitter<void>();

  onShowCartDetails() {
    this.showCartDetails.emit()
  }

}
