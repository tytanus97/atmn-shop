import { provideState } from '@ngrx/store'
import { authenticationFeature } from './lib/+state/login.reducer'
import { provideEffects } from '@ngrx/effects'
import { LoginEffects } from './lib/+state/login.effect'
import { AuthProviderBase } from './lib/auth/auth-provider'
import { GoogleAuthProviderService } from './lib/auth/google-auth-provider'
import { AuthProviderAggregator } from './lib/auth/auth-provider-aggregator'
import { TwitterAuthProviderService } from './lib/auth/twitter-auth-provider'

export * from './lib/auth/authentication-facade'

export const provideAuthentication = [
    provideState(authenticationFeature),
    provideEffects(LoginEffects),
    AuthProviderAggregator,
    {
        provide: AuthProviderBase,
        useClass: GoogleAuthProviderService,
        multi: true
    },{
        provide: AuthProviderBase,
        useClass: TwitterAuthProviderService,
        multi: true
    }
]