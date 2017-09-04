import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ParkingmeService {
  headers: Headers;
  private url = 'http://192.168.61.5:1337/api/v1/';
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  
  login(user: Object) {
    let auth = {};
    return this.http
      .post( this.url + `users/login/`, user )
      .map( (response: Response) => { 
        auth = response.json().auth;
        this.headers.append('Authorization', 'Bearer ' + auth['token']);
        localStorage.setItem('currentUser', response.json());
        return response.json();
      }).catch(this._errorHandler);
  }

  registerUser (user: Object) {
    return this.http
      .post( this.url + `users/`, user )
      .map( (response: Response) => { 
        return response.json();
      }).catch(this._errorHandler);
  }

  getUser(){
    return this.http
    .get( this.url + `users/`)
    .map( (response: Response) => { 
      return response.json();
    }).catch(this._errorHandler);
  }

  _errorHandler(_error: Response) {
    console.log(_error )
    return Observable.throw( _error );
  }

}
