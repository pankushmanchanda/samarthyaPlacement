import { LoginComponent } from './../components/login/login.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private url: string = "/api/emailVerification";
  //   public data2 :LoginComponent  ;
  constructor(private http: Http) { }
  postdata(mailObj: LoginComponent) {
    // var data1=JSON.stringify({to :"sheenamnarula1993@yahoo.com", subject:"abc", text:"hello" });
    var mailObjString = JSON.stringify(mailObj);
    //var data1 = JSON.stringify(this.data2.getdata());
    var params = 'json=' + mailObjString;
    var res;
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return this.http.post(this.url, params, {
      headers: headers
    }).map(res => res.json());
  }
}
