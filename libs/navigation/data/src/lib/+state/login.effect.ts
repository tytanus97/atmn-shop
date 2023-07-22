import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginActions } from './login.action';
import { Observable, concat, concatMap, debounceTime, filter, from, map, tap } from 'rxjs';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
} from '@angular/fire/auth';

import {User as AuthUser} from '@angular/fire/auth'

@Injectable()
export class LoginEffects {
  private _actions = inject(Actions);
  private _auth = inject(Auth);

  login$ = createEffect(
    () =>
      this._actions.pipe(
        debounceTime(500),
        ofType(loginActions.loginRequested),
        concatMap(() => signInWithPopup(this._auth, new GoogleAuthProvider()))
      ),
    { dispatch: false }
  );

  user$ = createEffect(() =>
    user(this._auth).pipe(
      map((user: AuthUser | null) => loginActions.loginUser({
          user: user ? {
              avatar: user.photoURL || '',
              email: user.email || '',
              username: user.displayName || ''
          } : null
      }))
    )
  );

  logout$ = createEffect(() => this._actions.pipe(
    ofType(loginActions.logoutRequested),
    concatMap(() => from(this._auth.signOut()))  
  ), {dispatch: false})
}

