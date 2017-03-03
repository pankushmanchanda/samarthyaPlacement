import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {Md2Module} from 'md2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    Md2Module.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFrDXmfEyDR7DPrwGJYtmK4fAyXGgRic4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LogoutComponent,
    AdminRegistrationComponent,
    AboutUsComponent,
    DashboardComponent,
    CandidateSearchComponent,
    CandidateRegisterComponent,
    EmployersComponent,
    EventPostComponent,
    JobPostComponent,
    AdminRegistrationComponent
  ]
})
export class AppModule { }
