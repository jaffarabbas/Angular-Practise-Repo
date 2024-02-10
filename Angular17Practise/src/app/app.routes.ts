import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './_service/auth.guard';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'customer', loadComponent: () => import('./components/customer/customer.component').then(m => m.CustomerComponent),canActivate:[authGuard]},
    {path:'customer/add', loadComponent: () => import('./components/add-customer/add-customer.component').then(m => m.AddCustomerComponent),canActivate:[authGuard]},
];
