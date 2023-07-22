import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationFacade } from '@atmn-shop/navigation/data';
import { LoginPanelComponent } from '@atmn-shop/navigation/ui';

@Component({
  selector: 'atmn-shop-login-panel-container',
  standalone: true,
  imports: [CommonModule,LoginPanelComponent],
  templateUrl: './login-panel-container.component.html',
  styleUrls: ['./login-panel-container.component.scss'],
})
export class LoginPanelContainerComponent {

  private _authFacade = inject(AuthenticationFacade);
  
  user$ = this._authFacade.user$
}
