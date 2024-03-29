import { Component, OnInit } from '@angular/core';
import { Explotacion } from '../../../model/explotacion/explotacion';
import { ExplotacionService } from '../../../services/ExplotacionService/explotacion.service';
import { DataService } from '../../../services/DataService/data.service';
import { CommonModule } from '@angular/common';
import { ExplotacionButtonComponent } from "../../../components/explotaciones/explotacion-button/explotacion-button.component";

@Component({
    selector: 'app-explotaciones',
    templateUrl: './explotaciones.component.html',
    styleUrl: './explotaciones.component.scss',
    standalone: true,
    providers: [ExplotacionService],
    imports: [CommonModule, ExplotacionButtonComponent]
})
export class ExplotacionesComponent implements OnInit{

  
  explotaciones : Explotacion[] = [];

  constructor(private service:DataService){
    
  }

  ngOnInit(): void {
    this.service.get('explotaciones').subscribe({
      next: (v) => {
        console.log('Datos obtenidos:', v);
        this.explotaciones = v;
      },
      error: (e) => console.error('Error al obtener datos:', e),
      complete: () => console.info('complete') 
    });
  }

}
