import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService:ApiService) { }

  login(form:any){
    return this.apiService.post("User/Login", form);
  }

  register(form:any){
    return this.apiService.post("User/Register", form);
  }
}
