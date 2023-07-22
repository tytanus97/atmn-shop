import { User } from '@atmn-shop/navigation/model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const loginActions = createActionGroup({
    source: "Login",
    events: {
        "login requested": emptyProps(),
        "login user": props<{user: User | null}>(),
        "logout requested": emptyProps()
    }
})