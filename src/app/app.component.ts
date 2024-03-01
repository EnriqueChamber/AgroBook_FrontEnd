import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from './services/DataService/data.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [DataService],
    imports: [RouterOutlet, HttpClientModule, NavBarComponent, CommonModule]
})
export class AppComponent implements OnInit{
  title = 'AgroBook_FrontEnd';

  uri = 'URI'
  loggedIn = false

  constructor(private dataService : DataService, private router: Router){

  }

  ngOnInit(): void {
    this.uri = location.pathname
    this.loggedIn = DataService.isLoggedIn()

    if(this.uri != '/login' && !this.loggedIn){
      location.href = '/login'
    }
    if(this.uri == '/login' && this.loggedIn){
      location.href = '/'
    }
  }
}
