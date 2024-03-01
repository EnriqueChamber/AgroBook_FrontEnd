import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



const apiUrl : string = "http://localhost:5050/api";


const ACCESS_USER = 'user';
const ACCESS_PASS = 'pass';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private static getHeadersOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(sessionStorage.getItem(ACCESS_USER)+':'+sessionStorage.getItem(ACCESS_PASS))
      })
    };
  }

  constructor(private httpClient : HttpClient) { }


  
  public static setUserPassword(access_user: string, access_pass: string): void {
    sessionStorage .removeItem(ACCESS_USER);
    sessionStorage .setItem(ACCESS_USER, access_user);
    sessionStorage .removeItem(ACCESS_PASS);
    sessionStorage .setItem(ACCESS_PASS, access_pass);
  }

  public static logOut() : void{
    sessionStorage .removeItem(ACCESS_USER);
    sessionStorage .setItem(ACCESS_USER, 'user');
    sessionStorage .removeItem(ACCESS_PASS);
    sessionStorage .setItem(ACCESS_PASS, 'pass');
  }

  public static getLoggedUser() : string{
    return sessionStorage.getItem(ACCESS_USER)!;
  }
  public static isLoggedIn() : boolean{
    return sessionStorage.getItem(ACCESS_USER) != 'user' && sessionStorage.getItem(ACCESS_USER) != null;
  }



  get(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.get(url, DataService.getHeadersOptions());
  }

  post(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.post(url, data, DataService.getHeadersOptions());
  }

  put(endpoint: string, data: any): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.put(url, data, DataService.getHeadersOptions());
  }

  delete(endpoint: string): Observable<any> {
    const url = `${apiUrl}/${endpoint}`;
    return this.httpClient.delete(url, DataService.getHeadersOptions());
  }
}
