import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListSingleElementComponent } from './product-list-single-element.component';

describe('ProductListSingleElementComponent', () => {
  let component: ProductListSingleElementComponent;
  let fixture: ComponentFixture<ProductListSingleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListSingleElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListSingleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
