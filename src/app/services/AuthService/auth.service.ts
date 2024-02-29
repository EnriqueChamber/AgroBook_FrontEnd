import { Injectable } from '@angular/core';
import { DataService } from '../DataService/data.service';

const ACCESS_USER = 'user';
const ACCESS_PASSWORD = 'password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService) { 
    dataService.get("user/info")//api/user/info
  }

  
  setUserPassword(access_user: string, refresh_password: string): void {
    localStorage.removeItem(ACCESS_USER);
    localStorage.setItem(ACCESS_USER, access_user);
    localStorage.removeItem(ACCESS_PASSWORD);
    localStorage.setItem(ACCESS_PASSWORD, refresh_password);
  }
}
