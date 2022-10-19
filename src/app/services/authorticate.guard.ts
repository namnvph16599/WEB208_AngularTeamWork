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
    // const userInfo = localStorage.getItem('user')
    // if (userInfo) {
    //   const { user: { role } } = JSON.parse(userInfo)
    //   if (role) {
    //     return true
    //   }
    // }
    // this.router.navigate(['/'])
    // return false
    return true
  }

}
