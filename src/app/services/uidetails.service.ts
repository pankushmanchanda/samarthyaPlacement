import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthenticationService } from "./authentication.service"
import 'rxjs/add/operator/toPromise';
import { Common } from './../model/common';
import { Observable } from 'rxjs/Observable'; //http request using observable
import 'rxjs/add/operator/map'  // map operatror for observable
@Injectable()
export class UiDetails {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = '/api/navigationlinks';
  constructor(private http: Http, private authenticationService: AuthenticationService) { };
 getMenuDetails(token): Observable<Common[]> {
    return this.http.get(this.url, this.authoriZation(token))
      .map((response: Response) => {
        let body = response.json();
        return body;
      });
  }
  // }
  // getMenuDetails(token):Promise<Common[]>{
  //    return this.http.get(this.url,this.authoriZation(token))
  //            .toPromise()
  //            .then(this.getData)   //r 

  // }
  // private getData(response:Response):Promise<Common[]>{
  //  let body = response.json() ;
  //   return body as Promise<Common[]>;
  // }
  //     private handleError(error: any): Promise < any > {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
  private authoriZation(userToken) {
    if (userToken) {
      let headers = new Headers({ 'Authorization': userToken });
      return new RequestOptions({ headers: headers });
    }

  }

}