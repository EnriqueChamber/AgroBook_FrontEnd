import { Component } from '@angular/core';
import { NameEditorComponent } from "../../../components/forms/controls/name-editor/name-editor.component";
import { DataService } from '../../../services/DataService/data.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../model/usuario/usuario';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [NameEditorComponent, ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  user = localStorage.getItem('ACCESS_USER')


  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    
  }
  
  onSubmit() {
    var username = this.loginForm.get('username')?.getRawValue() as string
    var password = this.loginForm.get('password')?.getRawValue() as string

    this.dataService.setUserPassword(username, password);

    var errorFunc = () => {this.dataService.setUserPassword('user', 'password')};

    this.dataService.get('login').subscribe({
      next(value) {
          // redirect to dashboard
          //console.log(value)
          location.href = '/'
      },
      error(error){
        // shows error
        console.error(error)
        errorFunc()
      },
      complete(){
        // quit loading
        console.log('completed')
      }
    })
  }

  async setUserPassword(user: string, password: string){
    this.dataService.setUserPassword(user, password)
  }

}

