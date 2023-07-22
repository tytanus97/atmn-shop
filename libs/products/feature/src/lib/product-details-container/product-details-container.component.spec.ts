import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsContainerComponent } from './product-details-container.component';

describe('ProductDetailsContainerComponent', () => {
  let component: ProductDetailsContainerComponent;
  let fixture: ComponentFixture<ProductDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
