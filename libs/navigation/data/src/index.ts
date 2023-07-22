import { provideState } from '@ngrx/store'
import { authenticationFeature } from './lib/+state/login.reducer'
import { provideEffects } from '@ngrx/effects'
import { LoginEffects } from './lib/+state/login.effect'

export * from './lib/+state/authentication-facade'

export const provideAuthentication = [
    provideState(authenticationFeature),
    provideEffects(LoginEffects)
]