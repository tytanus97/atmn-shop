import { AuthProviderType, User } from '@atmn-shop/navigation/model';
import { createActionGroup, props } from '@ngrx/store';

export const loginActions = createActionGroup({
    source: "Login",
    events: {
        "login requested": props<{authType: AuthProviderType}>(),
        "login user": props<{user: User}>(),
        "logout requested": props<{callback: () => void}>()
    }
})