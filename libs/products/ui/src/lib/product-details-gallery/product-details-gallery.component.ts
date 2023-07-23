import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atmn-shop-product-details-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details-gallery.component.html',
  styleUrls: ['./product-details-gallery.component.scss'],
})
export class ProductDetailsGalleryComponent {
  @Input() images: string[] = []
}
