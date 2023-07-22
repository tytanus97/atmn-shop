import { Injectable } from '@angular/core';
import { AuthProviderBase } from './auth-provider';
import { AuthProviderType } from '@atmn-shop/navigation/model';
import { Auth, signInWithPopup } from '@angular/fire/auth';

@Injectable()
export class AuthProviderAggregator {
  private _authProviderMap = new Map<AuthProviderType, AuthProviderBase>();
  constructor(private readonly authProviders: AuthProviderBase) {
    // eslint-disable-next-line prefer-rest-params
    for(const provider of arguments[0]) {
        this._authProviderMap.set((provider as AuthProviderBase).getType(),provider)
    }
  }

  signIn(authType: AuthProviderType, auth: Auth) {
    const provider = this._authProviderMap.get(authType);
    if (provider) {
      return signInWithPopup(auth, provider.provideAuth());
    }
    throw Error('Unknown auth provider');
  }
}
