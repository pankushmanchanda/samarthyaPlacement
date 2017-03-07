import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {Md2Module} from 'md2';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AuthenticationService } from './services/authentication.service';
import { PlacementRegisterService } from './services/placementRegister.service';
import { AuthGuard } from './services/auth.guard'
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { UiDetails } from 'app/services/uidetails.service';
import { Data } from 'app/services/data.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {LoginHeaderComponent} from './components/login_registration_headerLayout/login-header/login-header.component';
import {LoginFooterComponent} from './components/login_registration_headerLayout/login-footer/login-footer.component';
import {AfterLoginHeaderComponent} from './components/afterLogin_registration_layout/headerLayout/headerLayout.component';
import {FooterComponent} from './components/afterLogin_registration_layout/footerLayout/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFrDXmfEyDR7DPrwGJYtmK4fAyXGgRic4'
    })
  ],
  providers: [PlacementRegisterService, AuthenticationService, AuthGuard, JsonDataService, EmailService, UiDetails,Data],
  bootstrap: [AppComponent],
  declarations: [
    LoginComponent,
    LoginLayoutComponent,
    DashboardComponent,
    CandidateRegisterComponent,
    CandidateSearchComponent,
    EmployersComponent,
    EventPostComponent,
    JobPostComponent,
    AdminRegistrationComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    AfterLoginHeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AppComponent,
    AdminRegistrationComponent,
]
})
export class AppModule { }
