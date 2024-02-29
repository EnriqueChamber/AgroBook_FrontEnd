import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <label for="name">Name: </label>
  <input id="name" type="text" [formControl]="name">
  `,
  styleUrl: './name-editor.component.scss'
})
export class NameEditorComponent {
  name = new FormControl('');
}
