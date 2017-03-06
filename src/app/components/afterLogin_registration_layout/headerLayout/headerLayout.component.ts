import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'app/services/json-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './headerLayout.component.html',
  styleUrls: ['./headerLayout.component.css'],
  providers: [JsonDataService]
})
export class AfterLoginHeaderComponent implements OnInit {

  public languages = [];
  public navList=[];
 

  constructor(private JsonDataService: JsonDataService) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData['languages']));
    this.JsonDataService.getJsonNavList().subscribe(resJsonData => this.getNavList(resJsonData['navList']));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
  getNavList(navListItem){
      this.navList=navListItem;
  }
}