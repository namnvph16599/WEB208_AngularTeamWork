import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorticateGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //TODO :  handle check role admin
    const roleAdmin = true  
    if (roleAdmin) {
      return true
    } else {
      this.router.navigate(['/'])
      return false
    }
  }

}
