import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery, GalleryModule } from 'ng-gallery';

@Component({
  selector: 'atmn-shop-product-details-gallery',
  standalone: true,
  imports: [CommonModule,GalleryModule],
  templateUrl: './product-details-gallery.component.html',
  styleUrls: ['./product-details-gallery.component.scss'],
})
export class ProductDetailsGalleryComponent implements OnInit{
  @Input() images: string[] = []

  constructor(private gallery: Gallery){
  }

  ngOnInit() {
    // Get the galleryRef by id
    const galleryRef = this.gallery.ref('myGallery');

    // Add items individually
    for(const image of this.images) {
      galleryRef.addImage({ src: image, thumb: image });
    }
  }
}
