import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router, private log : LoginComponent){ }

  canActivate(){
    this.log.onSubmit();
    return false
  }
}
