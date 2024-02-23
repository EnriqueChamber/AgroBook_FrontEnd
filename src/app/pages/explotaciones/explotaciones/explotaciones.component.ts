import { Component, OnInit } from '@angular/core';
import { Explotacion } from '../../../model/explotacion/explotacion';
import { ExplotacionService } from '../../../services/ExplotacionService/explotacion.service';
import { DataService } from '../../../services/DataService/data.service';

@Component({
  selector: 'app-explotaciones',
  templateUrl: './explotaciones.component.html',
  styleUrl: './explotaciones.component.scss',
  standalone: true,
  imports: [],
  providers:[ExplotacionService]
})
export class ExplotacionesComponent implements OnInit{

  
  private explotaciones : Explotacion[] = [];


  constructor(private service:ExplotacionService){

  }

  ngOnInit(): void {
    this.explotaciones = this.service.getAll(); // para ExplotacionesService

    /*this.service.get('explotaciones').subscribe(
      (data) => {
        console.log('Datos obtenidos:', data);
        this.explotaciones = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );*/
  }

}
