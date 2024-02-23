import { Injectable } from '@angular/core';
import { DataService } from '../DataService/data.service';
import { Explotacion } from '../../model/explotacion/explotacion';

@Injectable({
  providedIn: 'root'
})
export class ExplotacionService {

  constructor(private dataService : DataService) { }

  getAll() : Explotacion[]{
    var explotaciones : Explotacion[] = [];
    this.dataService.get('explotaciones').subscribe(
      (data) => {
        console.log('Datos obtenidos:', data);
        explotaciones = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
    return explotaciones;
  }

  
}
