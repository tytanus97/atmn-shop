import { GoogleAuthProvider } from '@angular/fire/auth';
import { AuthProviderType } from '@atmn-shop/navigation/model';


export abstract class AuthProviderBase {
    abstract provideAuth(): AuthProviderImpl
    abstract getType(): AuthProviderType
}

export type AuthProviderImpl = GoogleAuthProvider