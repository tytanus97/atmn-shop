import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginActions } from './login.action';
import { concatMap, debounceTime, from, map, tap } from 'rxjs';
import { Auth, user } from '@angular/fire/auth';

import { User as AuthUser } from '@angular/fire/auth';
import { AuthProviderAggregator } from '../auth/auth-provider-aggregator';
import { ANNONYMOUS_USER } from './login.reducer';

@Injectable()
export class LoginEffects {
  private _actions = inject(Actions);
  private _auth = inject(Auth);
  private readonly _authProviderAggregator = inject(AuthProviderAggregator);

  login$ = createEffect(
    () =>
      this._actions.pipe(
        debounceTime(500),
        ofType(loginActions.loginRequested),
        concatMap((action) =>
          this._authProviderAggregator.signIn(action.authType, this._auth)
        )
      ),
    { dispatch: false }
  );

  user$ = createEffect(() =>
    user(this._auth).pipe(
      map((user: AuthUser | null) =>
        loginActions.loginUser({
          user: user
            ? {
                avatar: user.photoURL || '',
                email: user.email || '',
                username: user.displayName || '',
                isAnonnymous: false
              }
            : ANNONYMOUS_USER,
        })
      )
    )
  );

  logout$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(loginActions.logoutRequested),
        tap(({ callback }) => callback()),
        concatMap(() => from(this._auth.signOut()))
      ),
    { dispatch: false }
  );
}
