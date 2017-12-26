import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthService } from 'app/services/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class OrderService {

  constructor(
    private authHttp: AuthHttp,
    // private http: Http,
  ) {
  }

  getOrders() { 
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);

    // let options = new RequestOptions({ headers: headers });

    // return this.http.get('/api/orders', options)
    //   .map(response => response.json());

    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
