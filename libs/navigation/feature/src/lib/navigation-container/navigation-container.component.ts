import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelContainerComponent } from '../login-panel-container/login-panel-container.component';


@Component({
  selector: 'atmn-shop-navigation-container',
  standalone: true,
  imports: [CommonModule,LoginPanelContainerComponent],
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
})
export class NavigationContainerComponent {
}
