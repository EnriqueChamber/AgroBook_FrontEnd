import { Injectable } from '@angular/core';
import { DataService } from '../DataService/data.service';
import { Explotacion } from '../../model/explotacion/explotacion';

@Injectable({
  providedIn: 'root'
})
export class ExplotacionService {

  constructor(private dataService : DataService) { }

  getAll(explotaciones:Explotacion[] | undefined){
    this.dataService.get('explotaciones').subscribe({
      next: (v) => {
        console.log('Datos obtenidos:', v);
        explotaciones = v;
      },
      error: (e) => console.error('Error al obtener datos:', e),
      complete: () => console.info('complete') 
    });
  }

  
}
