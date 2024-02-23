import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



const apiUrl : string = "http://localhost:8080/api";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('enrique_chamber:789')
  })
};




@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private httpClient : HttpClient) { }

  get(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.get(url, httpOptions);
  }

  post(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.post(url, data);
  }

  put(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.put(url, data);
  }

  delete(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.delete(url);
  }
}
