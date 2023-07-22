import { AuthProviderType } from '@atmn-shop/navigation/model';
import { AuthProviderBase, AuthProviderImpl } from './auth-provider';
import { Injectable } from '@angular/core';
import { TwitterAuthProvider } from '@angular/fire/auth';

@Injectable()
export class TwitterAuthProviderService implements AuthProviderBase {
    private readonly _type: AuthProviderType = AuthProviderType.TWITTER
    
    provideAuth(): AuthProviderImpl {
       return new TwitterAuthProvider()
    }

    getType(): AuthProviderType {
        return this._type
    }
}