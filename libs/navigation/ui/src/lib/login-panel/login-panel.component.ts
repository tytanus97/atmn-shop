import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthProviderType, User } from '@atmn-shop/navigation/model';
import {MatIconModule} from '@angular/material/icon';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'atmn-shop-login-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,UserInfoComponent],
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPanelComponent {

  @Output() login = new EventEmitter<AuthProviderType>()
  @Output() logout = new EventEmitter<void>()

  @Input() user!: User


  onLogin() {
    this.login.emit(AuthProviderType.GOOGLE)
  }

  onLogout() {
    this.logout.emit()
  }
}
