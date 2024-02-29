import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/common/not-found/not-found.component';
import { LoginComponent } from './pages/common/login/login.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'login', component:LoginComponent},
    {path:'**', component:NotFoundComponent}
];
