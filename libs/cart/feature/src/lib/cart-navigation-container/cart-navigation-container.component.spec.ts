import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartNavigationContainerComponent } from './cart-navigation-container.component';

describe('CartNavigationContainerComponent', () => {
  let component: CartNavigationContainerComponent;
  let fixture: ComponentFixture<CartNavigationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartNavigationContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartNavigationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
