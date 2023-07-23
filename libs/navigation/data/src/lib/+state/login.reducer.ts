import { User } from '@atmn-shop/navigation/model'
import { createFeature, createReducer, on } from '@ngrx/store'
import { loginActions } from './login.action'


export interface AuthenticationState {
    user: User
}

export const ANNONYMOUS_USER: User = {
    id: 'annonymous',
    isAnonnymous: true,
}

const INITIAL_STATE: AuthenticationState = {
    user: ANNONYMOUS_USER
}

export const authenticationFeature = createFeature({
    name: 'Authentication',
    reducer: createReducer<AuthenticationState>(
        INITIAL_STATE,
        on(loginActions.loginUser, (state, action) => ({...state, user: action.user})),
        on(loginActions.logoutRequested, (state) => ({...state, user: ANNONYMOUS_USER})),
    )},
    )