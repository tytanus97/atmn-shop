import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelComponent } from '@atmn-shop/navigation/ui';
import { Store } from '@ngrx/store';
import { fromAuth } from 'libs/navigation/data/src/lib/+state/login.selector';
import { tap } from 'rxjs';

@Component({
  selector: 'atmn-shop-navigation-container',
  standalone: true,
  imports: [CommonModule,LoginPanelComponent],
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
})
export class NavigationContainerComponent {
  private _store = inject(Store);
  
  user$ = this._store.select(fromAuth.selectUser).pipe(tap(console.log))
}
