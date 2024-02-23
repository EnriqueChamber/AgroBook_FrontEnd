import { Routes } from '@angular/router';
import { ExplotacionesComponent } from '../pages/explotaciones/explotaciones/explotaciones.component';
import { ExplotacionComponent } from '../pages/explotaciones/explotacion/explotacion.component';

export const explotacionesRoutes: Routes = [
    {path:'explotaciones', component:ExplotacionesComponent},
    {path:'explotaciones/', component:ExplotacionesComponent},
    {path:'explotaciones/:id', component:ExplotacionComponent}
];
