import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {CandidateRegister} from '../modal/candidate-register.modal';

@Injectable()
export class PlacementRegisterService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/CandidateRegister'; 
  constructor(private http: Http) { }
 
  add(userdata):Promise<any>  {
    return this.http
      .post(this.url, JSON.stringify({Name: userdata.get('nameControl').value,Gender:userdata.get('genderControl').value,Email:userdata.get('emailControl').value,Password:userdata.get('passwordControl').value,MobileNo:userdata.get('mobileControl').value,Role:userdata.get('roleControl').value,Profession:userdata.get('professionControl').value,Location: userdata.get('pincodeControl').value,PlacementCenter:userdata.get('placementControl').value,Status:userdata.get('statusControl').value,Language:userdata.get('languageControl').value}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}