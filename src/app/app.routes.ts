import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/common/not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},
    {path:'**', component:NotFoundComponent}
];
