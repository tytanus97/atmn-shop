import { GoogleAuthProvider } from '@angular/fire/auth';
import { AuthProviderType } from '@atmn-shop/navigation/model';
import { AuthProviderBase, AuthProviderImpl } from './auth-provider';
import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAuthProviderService implements AuthProviderBase {
    private readonly _type: AuthProviderType = AuthProviderType.GOOGLE
    
    provideAuth(): AuthProviderImpl {
       return new GoogleAuthProvider()
    }

    getType(): AuthProviderType {
        return this._type
    }
}