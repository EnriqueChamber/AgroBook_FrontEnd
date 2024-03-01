import { Component, Input } from '@angular/core';
import { Explotacion } from '../../../model/explotacion/explotacion';

@Component({
  selector: 'app-explotacion-button',
  standalone: true,
  imports: [],
  templateUrl: './explotacion-button.component.html',
  styleUrl: './explotacion-button.component.scss'
})
export class ExplotacionButtonComponent {
  @Input() explotacion!: Explotacion;
}
