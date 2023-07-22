import { Component, OnInit } from '@angular/core';
import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  standalone: true,
  imports: [AppShellComponent],
  selector: 'atmn-shop-root',
  template: "<atmn-shop-app-shell/>",
 
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    fetch('./dummy-data.json').then(response => response.json()).then(data => data.products).then(console.log)
  }


}
