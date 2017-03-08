import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router'
import { Data } from '../../services/data.service';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  providers: [JsonDataService]
})
export class VerifyEmailComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj;
  private postobject;
  public user = [];
  public timer;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,private data:Data, private viewContainerRef: ViewContainerRef, private router: Router) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    });
  }

  ngOnInit() { }

  //snackBar for notification

  // verify user if already exist or not for registration
  verifyUserRegistration() {
    if (this.user.length == 0) {
      //console.log(this.candidates);
      this.infoobj = {
        'to': this.userForm.value.email,
        'subject': "Email verification",
        'redirect': "http://localhost:3000/register",
        'mailBody': "Please Click on this link to verify your Email"
      }
      this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
        error => [this.data.openSnackBar('VERIFICATION MAIL SENT', 'Please Check your MAIL'),
        this.timer = setTimeout(() => this.router.navigate(['/login']), 500)]);
    }
    else {
      this.data.openSnackBar('User already Exist', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
    }
  }

  // on create account submit
  onVerifyLink() {
    this.JsonDataService.getEmail(this.userForm.value.email).subscribe(resJsonData => [
      this.user = resJsonData, this.verifyUserRegistration()]);
  }

  onBack() {
    this.router.navigate(['/login']);

  }
}