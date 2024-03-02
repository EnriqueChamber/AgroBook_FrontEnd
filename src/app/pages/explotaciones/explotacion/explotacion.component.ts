import { Component, OnInit } from '@angular/core';
import { ParcelaButtonComponent } from "../../../components/explotaciones/parcela-button/parcela-button.component";
import { DataService } from '../../../services/DataService/data.service';
import { Parcela } from '../../../model/parcela/parcela';
import { Explotacion } from '../../../model/explotacion/explotacion';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-explotacion',
    standalone: true,
    templateUrl: './explotacion.component.html',
    styleUrl: './explotacion.component.scss',
    imports: [ParcelaButtonComponent, CommonModule]
})
export class ExplotacionComponent implements OnInit {

  explotacion? : Explotacion;

  constructor(private service:DataService, private route : ActivatedRoute){
    
  }

  ngOnInit(): void {

    var indice = this.route.snapshot.params['id'];

    this.service.get('explotaciones/'+indice).subscribe({
      next: (v) => {
        console.log('Datos obtenidos:', v);
        this.explotacion = v;
      },
      error: (e) => console.error('Error al obtener datos:', e),
      complete: () => console.info('complete') 
    });
  }
}
