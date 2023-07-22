import { authenticationFeature } from './login.reducer';


const {selectUser} = authenticationFeature;

export const fromAuth = {
    selectUser
}