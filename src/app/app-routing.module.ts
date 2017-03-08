import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AuthGuard } from './services/auth.guard';

import { AfterLoginHeaderComponent } from './components/afterLogin_registration_layout/headerLayout/headerLayout.component';

// routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-layout', component: LoginLayoutComponent, canActivate: [AuthGuard] },
  {
    path: 'home', component: AfterLoginHeaderComponent, canActivate: [AuthGuard],
    children: [
      { path: 'aboutUs', component: AboutUsComponent, canActivate: [AuthGuard] },
      { path: 'candidateRegister', component: CandidateRegisterComponent, canActivate: [AuthGuard] },
      { path: 'candidateSearch', component: CandidateSearchComponent, canActivate: [AuthGuard] },
      { path: 'eventPost', component: EventPostComponent, canActivate: [AuthGuard] },
      { path: 'jobPost', component: JobPostComponent, canActivate: [AuthGuard] },
      { path: 'register', component: AdminRegistrationComponent },
      { path: 'register/:title', component: AdminRegistrationComponent },
      { path: '**', component: DashboardComponent },
      { path: 'verifyEmail', component: VerifyEmailComponent }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { };
