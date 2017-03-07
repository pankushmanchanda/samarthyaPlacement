import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'app/services/json-data.service';
import {AuthenticationService} from 'app/services/authentication.service'
import {Data} from 'app/services/data.service'


@Component({
  selector: 'app-header',
  templateUrl: './headerLayout.component.html',
  styleUrls: ['./headerLayout.component.css'],
  providers: [JsonDataService,AuthenticationService]
})
export class AfterLoginHeaderComponent implements OnInit {

  public languages = [];
  public navList=[];
 

  constructor(private JsonDataService: JsonDataService,private AuthenticationService:AuthenticationService,private data:Data) { }

  ngOnInit() {
    // getting languages form json file
  
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
    this.JsonDataService.getJsonNavList().subscribe(resJsonData =>{this.getNavList(resJsonData)});
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
  getNavList(navListItem){
      this.navList=navListItem;
  }
  logoutUser(){

      this.AuthenticationService.logout();
      this.data.openSnackBar("logged out successfully","OK");
  }
}