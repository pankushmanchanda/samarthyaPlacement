import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { PlacementRegisterService } from '../../services/placementRegister.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
  providers: [PlacementRegisterService]
})
export class AdminRegistrationComponent implements OnInit {

  //For google map giving latitude and longitutde
  lat: number = 51.678418;
  lng: number = 7.809007;

  //Title of the form which maybe coordinato or supervisor.it should be dynamic
  private title: string;
  disabled: string = "false";
  hiddenParticularRole: any;
  hiddenRole: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.title = params['title']);
    if (this.title == 'Coordinator') {
      this.userForm.patchValue({
        roleControl: "Coordinator"
      })
      this.hiddenRole = true;
      this.hiddenParticularRole = false;
      this.disabled = "true";
    }
    else if (this.title == 'Supervisor') {
      this.userForm.patchValue({
        roleControl: "Supervisor"
      })
      this.hiddenRole = true;
      this.hiddenParticularRole = false;

      this.disabled = "true";
    }
    else if (this.title == 'Admin') {
      this.title = "Admin";
      this.disabled = "false";
      this.hiddenRole = false;
      this.hiddenParticularRole = true;

    }
  }


  //Dropdown values.Should be data driven
  roles: any = ['Admin', 'Coorinator', 'Supervisor'];
  professions = ['FullStackDeveloper', 'BPO'];
  placementCenters = ['Pune', 'Bangalore', 'Chennai'];
  languages = ['English', 'Hindi', 'Tamizh'];
  status = ['Active', 'Inactive'];

  //form name
  public userForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private PlacementRegisterService: PlacementRegisterService, private route: ActivatedRoute,
    private router: Router) {
    //building the form using FormBuilder and FormGroup
    this.userForm = fb.group({
      nameControl: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
      genderControl: ['', Validators.required],
      emailControl: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      passwordControl: ['', [Validators.required, this.passwordValidator()]],
      confirmPasswordControl: ['', [Validators.required, this.matchPassword()]],
      mobileControl: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      roleControl: ['', Validators.required],
      professionControl: ['', Validators.required],
      pincodeControl: ['', [Validators.pattern('[0-9]{6}')]],
      locationControl: ['', Validators.required],
      placementControl: ['', Validators.required],
      statusControl: ['', Validators.required],
      languageControl: ['', Validators.required],
    });
  }

  //password validation which is calling from form building of passwordControl
  passwordValidator(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('confirmPasswordControl').value) {
        if (this.userForm.get('passwordControl').value == this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }


  }

  //password validation which is calling from form building of confirmPasswordControl
  matchPassword(): ValidatorFn {

    return (c: AbstractControl) => {
      if (this.userForm && this.userForm.get('passwordControl').value) {
        if (this.userForm.get('passwordControl').value == this.userForm.get('confirmPasswordControl').value) {
          return null;
        }
        else {
          return { valid: false };
        }
      }

    }


  }
  pincodeHidden: any = true;
  showPincode() {
    if (this.pincodeHidden == true) {
      this.pincodeHidden = false;
      this.mapHidden = true;
    }
    else {
      this.pincodeHidden = true;
    }
  }
  mapHidden: any = true;
  showMap() {
    if (this.mapHidden == true) {
      this.mapHidden = false;
      this.pincodeHidden = true;
    }
    else {
      this.mapHidden = true;
    }

  }



  //user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
  getPincode() {
    this.userForm.patchValue({
      locationControl: 'salem'
    });
  }

  //user choose the location by pincode which is calling from html pincode input and it should set location to the entered pincode and close the dialog
  close(dialog: any) {
    this.getPincode();
    dialog.close();
  }
  //after submitting the form,it should executed and call service to add the data to json
  save(userData): boolean {
    if (this.PlacementRegisterService.add(userData) == true) {
      this.userForm.reset();
      window.alert("registered successfully");
      return true;
    }
    else {
      window.alert("Sorry.....try some other time");
      return false;
    }

  }

}
