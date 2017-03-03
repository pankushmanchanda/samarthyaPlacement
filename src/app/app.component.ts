import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 navList = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Coordinators/Supervisors', path: '/register'},
    { name: 'Import', path: '/register'},
    { name: 'Placement Centers', path: '/register'},
    { name: 'Search Candidate', path: '/candidateSearch' },
    { name: 'Events', path: '/eventPost' },
    { name: 'Job Post', path: '/jobPost' },
    { name: 'About Us', path: '/aboutUs' },
  ];
}
