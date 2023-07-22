import { Component } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  standalone: true,
  imports: [AppShellComponent],
  selector: 'atmn-shop-root',
  template: "<atmn-shop-app-shell/>",
 
})
export class AppComponent {}
