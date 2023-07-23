import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartNavigationComponent } from './cart-navigation.component';

describe('CartNavigationComponent', () => {
  let component: CartNavigationComponent;
  let fixture: ComponentFixture<CartNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
