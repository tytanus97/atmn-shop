import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPanelContainerComponent } from './login-panel-container.component';

describe('LoginPanelContainerComponent', () => {
  let component: LoginPanelContainerComponent;
  let fixture: ComponentFixture<LoginPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPanelContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
