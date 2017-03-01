import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {Md2Module} from 'md2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    Md2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    AppbarComponent,
    AdminRegistrationComponent,
    
  ]
})
export class AppModule { }
