import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { explotacionesRoutes } from './routes/explotaciones.routes';
import { parcelasRoutes } from './routes/parcelas.routes';


// mantener el provider de app el último para que funcione correctamente NotFound
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(explotacionesRoutes), 
    provideRouter(parcelasRoutes),
    provideRouter(routes)
  ]
};
