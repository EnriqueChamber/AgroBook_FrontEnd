import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



const apiUrl : string = "http://localhost:5050/api";

localStorage.setItem('ACCESS_USER', 'user');


@Injectable({
  providedIn: 'root'
})
export class DataService {


  HEADERS_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('user:password')
    })
  };

  constructor(private httpClient : HttpClient) { }


  
  public setUserPassword(access_user: string, refresh_password: string): void {
    localStorage.removeItem('ACCESS_USER');
    localStorage.setItem('ACCESS_USER', access_user);
    
    this.HEADERS_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(access_user + ':' + refresh_password)
      })
    };
  }



  get(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.get(url, this.HEADERS_OPTIONS);
  }

  post(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.post(url, data, this.HEADERS_OPTIONS);
  }

  put(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.put(url, data, this.HEADERS_OPTIONS);
  }

  delete(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.delete(url, this.HEADERS_OPTIONS);
  }
}
