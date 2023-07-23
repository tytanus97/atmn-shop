import { Routes } from '@angular/router';
import { CartComponent } from './lib/cart/cart.component';



const routes: Routes = [
    {
        path: '',component: CartComponent
    },
    {
        path:'**', pathMatch: 'full',redirectTo:''
    }
]

export default routes;