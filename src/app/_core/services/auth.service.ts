import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  constructor(private apiService:ApiService,
    private router: Router) { }

  login(form:any){
    return this.apiService.post("User/Login", form);
  }

  register(form:any){
    return this.apiService.post("User/Register", form);
  }
  checkAuthentication() {
    let token = localStorage.getItem("token");
    if (token) {
      this.isAuthenticated = true;
      if (window.location.hash == "#/auth/login") {
        this.router.navigate([""]);
      }
    } else {
      this.isAuthenticated = false;
    }
  }
  logOut(){
    return this.apiService.post('User/Logout')
  }
}
