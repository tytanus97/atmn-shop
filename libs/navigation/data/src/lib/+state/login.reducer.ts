import { User } from '@atmn-shop/navigation/model'
import { createFeature, createReducer, on } from '@ngrx/store'
import { loginActions } from './login.action'


export interface AuthenticationState {
    user: User | null 
}

const INITIAL_STATE: AuthenticationState = {
    user: null
}

export const authenticationFeature = createFeature({
    name: 'Authentication',
    reducer: createReducer<AuthenticationState>(
        INITIAL_STATE,
        on(loginActions.loginUser, (state, action) => ({...state, user: action.user})),
        on(loginActions.logoutRequested, (state) => ({...state, user: null})),
    )},
    )