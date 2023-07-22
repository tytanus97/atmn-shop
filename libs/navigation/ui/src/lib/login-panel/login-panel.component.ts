import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationFacade } from '@atmn-shop/navigation/data';
import { AuthProviderType, User } from '@atmn-shop/navigation/model';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'atmn-shop-login-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  providers: [AuthenticationFacade]
})
export class LoginPanelComponent {

  private _authFacade = inject(AuthenticationFacade)

  @Input({required: true}) user: User | null = null


  login() {
    this._authFacade.requestLogin(AuthProviderType.GOOGLE)
  }

  logout() {
    this._authFacade.requestLogout()
  }
}
