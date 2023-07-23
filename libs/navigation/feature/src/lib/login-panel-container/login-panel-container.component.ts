import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationFacade } from '@atmn-shop/navigation/data';
import { LoginPanelComponent } from '@atmn-shop/navigation/ui';
import { AuthProviderType } from '@atmn-shop/navigation/model';
import { Router } from '@angular/router';

@Component({
  selector: 'atmn-shop-login-panel-container',
  standalone: true,
  imports: [CommonModule,LoginPanelComponent],
  templateUrl: './login-panel-container.component.html',
  styleUrls: ['./login-panel-container.component.scss'],
})
export class LoginPanelContainerComponent {

  private readonly _authFacade = inject(AuthenticationFacade);
  private readonly _router = inject(Router)
  
  user$ = this._authFacade.user$  

  onLogin(type: AuthProviderType) {
    this._authFacade.requestLogin(type)
  }

  onLogout() {
    this._authFacade.requestLogout(() => this._router.navigateByUrl('/products'))
  }
}
