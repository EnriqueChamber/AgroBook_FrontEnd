import { Routes } from '@angular/router';
import { ParcelaComponent } from '../pages/parcelas/parcela/parcela.component';

export const parcelasRoutes: Routes = [
    {path:'parcelas/:id', component:ParcelaComponent},
];
