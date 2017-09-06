import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ParkingmeService {
  private url = 'http://192.168.61.5:1337/api/v1/';
  
  constructor(private http: Http) { 
    
  }

  createAuthorizationHeader(headers: Headers, auth) {
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + auth['token']);
  }
  
  login(user: Object) {
    let auth = {};
    return this.http
      .post( this.url + `users/login/`, user )
      .map( (response: Response) => { 
        auth = response.json().auth;
        console.log(response.json())
        localStorage.setItem('currentUser', JSON.stringify(response.json()));
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
    let headers = new Headers();
    let auth =  JSON.parse(localStorage.getItem('currentUser'));
    this.createAuthorizationHeader(headers, auth['auth']);
    return this.http
    .get( this.url + `users/`+ auth['id'])
    .map( (response: Response) => { 
      return response.json();
    }).catch(this._errorHandler);
  }

  _errorHandler(_error: Response) {
    console.log(_error )
    return Observable.throw( _error );
  }

}
