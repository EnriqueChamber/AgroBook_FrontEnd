import { Component } from '@angular/core';
import { AuthService } from '../../../services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      (response) => {
        // Manejar la respuesta del servidor (puede ser un token u otra información)
        console.log('Authentication successful', response);
      },
      (error) => {
        // Manejar errores de autenticación
        console.error('Authentication failed', error);
      }
    );
  }
}
