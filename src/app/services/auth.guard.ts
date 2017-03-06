import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// auhentication gaurd if without login user will try to access differnt menu links navigate it to login page

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        
        if (localStorage.getItem('currentUser')){
            //logged in user return true
            return true; 
  }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;

    }
}