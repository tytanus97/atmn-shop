import { Injectable, inject } from '@angular/core';
import { AuthProviderType, User } from '@atmn-shop/navigation/model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromAuth } from '../+state/login.selector';
import { loginActions } from '../+state/login.action';

@Injectable({providedIn: 'root'})
export class AuthenticationFacade {
   
    private _store: Store = inject(Store)

    get user$(): Observable<User> {
        return this._store.select(fromAuth.selectUser)
    }

    requestLogin(type: AuthProviderType) {
        this._store.dispatch(loginActions.loginRequested({authType: type}))
    }

    requestLogout(callback: () => void) {
       this._store.dispatch(loginActions.logoutRequested({callback}))
    }
}