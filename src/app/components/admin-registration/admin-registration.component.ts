import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { CandidateRegisterService } from '../../services/placementRegister.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
  providers: [CandidateRegisterService]
})
export class AdminRegistrationComponent implements OnInit {

  roles: any = ['Admin', 'Coorinator', 'Supervisor'];
  professions = ['FullStackDeveloper', 'BPO'];
  placementCenters = ['Pune', 'Bangalore', 'Chennai'];
  languages = ['English', 'Hindi', 'Tamizh'];
  locations = ['Bangalore', 'Pune', 'Delhi'];
  status = ['Active', 'Inactive'];
  public userForm: FormGroup;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private candidateRegisterService:CandidateRegisterService) {
    this.userForm = fb.group({
      nameControl: ['', [Validators.required,Validators.pattern('[A-Za-z]{2,}')]],
      genderControl: ['', Validators.required],
      emailControl: ['',Validators.required],
      passwordControl: ['',[Validators.required,this.matchPassword()]],
      confirmPasswordControl:['',[Validators.required,this.matchPassword()]],
      mobileControl: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      roleControl: ['', Validators.required],
      professionControl: ['', Validators.required],
      pincodeControl: ['', [Validators.required,Validators.pattern('[0-9]{6}')]],
      placementControl: ['', Validators.required],
      statusControl: ['', Validators.required],
      languageControl: ['', Validators.required],
    });
  }

 
 matchPassword():ValidatorFn                           
 {
   
   return ( c: AbstractControl) => {
     if(this.userForm){
     if(this.userForm.get('passwordControl').value==this.userForm.get('confirmPasswordControl').value)
  {
     console.log("match"+this.userForm.get('confirmPasswordControl').valid+" "+this.userForm.get('passwordControl').valid)
     
     return  null;
 }
 else
 {
   return  { valid:false } ;
  }
     }
     
   }


 }
 

  ngOnInit() {


  }
temp(){
  console.log(this.userForm.get('confirmPasswordControl').valid+" "+this.userForm.get('passwordControl').valid );
}

  save(userData): boolean {
    console.log(userData);
    this.candidateRegisterService.add(userData);
    this.userForm.reset();
    window.alert("registered successfully");
     return true;
    //return false;
  }



  
  
  


  
 
}
