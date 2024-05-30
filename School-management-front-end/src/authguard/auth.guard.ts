import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userService:UserServiceService,public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      const userType = localStorage.getItem('userType');
  
      if (!isAuthenticated) {
        this.router.navigate(['login']);
        return false;
      }
  
      const expectedUserType = route.data['expectedUserType'];
      if (expectedUserType && expectedUserType !== userType) {
        this.router.navigate(['login']);
        return false;
      }
  
      return true;
    }
  }
  

