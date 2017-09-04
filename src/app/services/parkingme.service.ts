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
    // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpjcmFtaXJlekB2ZWxvY2l0eXBhcnRuZXJzLm5ldCIsImlhdCI6MTUwNDU1NDg4M30.2ym4J5u7xVelEjzATrknhmQglZQLy6uPsruigRpmPcg');
  }
  
  login (user: Object) {
    return this.http
      .post( this.url + `users/login/`, user )
      .map( (response: Response) => {
        return response.json();
      }).catch(this._errorHandler);
  }

  _errorHandler(_error: Response) {
    console.log(_error )
    return Observable.throw( _error );
  }

}
