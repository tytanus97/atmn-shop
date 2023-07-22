import { Injectable, inject } from '@angular/core';
import { User } from '@atmn-shop/navigation/model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromAuth } from './login.selector';
import { loginActions } from './login.action';

@Injectable({providedIn: 'root'})
export class AuthenticationFacade {
   
    private _store: Store = inject(Store)

    get user$(): Observable<User | null> {
        return this._store.select(fromAuth.selectUser)
    }

    requestLogin() {
        this._store.dispatch(loginActions.loginRequested())
    }

    requestLogout() {
       this._store.dispatch(loginActions.logoutRequested())
    }
}