import { Component, Input } from '@angular/core';
import { Explotacion } from '../../../model/explotacion/explotacion';
import { Parcela } from '../../../model/parcela/parcela';

@Component({
  selector: 'app-parcela-button',
  standalone: true,
  imports: [],
  templateUrl: './parcela-button.component.html',
  styleUrl: './parcela-button.component.scss'
})
export class ParcelaButtonComponent {
  @Input() parcela!: Parcela;
}
