import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationContainerComponent } from '@atmn-shop/navigation/feature';

@Component({
  selector: 'atmn-shop-app-shell',
  standalone: true,
  imports: [CommonModule,RouterModule, NavigationContainerComponent],
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {}
