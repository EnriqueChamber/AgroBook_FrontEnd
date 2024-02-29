import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/AuthService/auth.service';
import { DataService } from '../../../services/DataService/data.service';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  //check if user is logged in with the auth service
  //constructor(private authService: AuthService

  constructor(private dataService: DataService){
    
  }
  ngOnInit(): void {
    if(localStorage.getItem('ACCESS_USER') == "user"){
      location.href = '/login'
    }
  }

}
