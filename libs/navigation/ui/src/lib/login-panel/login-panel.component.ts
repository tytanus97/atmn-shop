import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationFacade } from '@atmn-shop/navigation/data';
import { AuthProviderType, User } from '@atmn-shop/navigation/model';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'atmn-shop-login-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,UserInfoComponent],
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  providers: [AuthenticationFacade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent {
  private readonly _router = inject(Router)
  private _authFacade = inject(AuthenticationFacade)

  @Input({required: true}) user!: User


  login() {
    this._authFacade.requestLogin(AuthProviderType.GOOGLE)
  }

  logout() {
    this._authFacade.requestLogout(() => this._router.navigateByUrl('/products'))
  }
}
