import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';
import { ToasterComponent } from 'src/app/_shared/toaster/toaster.component';

import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.formBuilder.group({})
  isSubmitted:boolean = false;
  token:any = '';
  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private toaster:ToasterComponent,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.generateLoginForm()
  }

  generateLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName: ["",Validators.required],
      password:  ["",Validators.required]
    })
  }
  login(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
        localStorage.setItem("token",res?.data);
        this.token = localStorage.getItem("token");
        var roles:any = jwt_decode(this.token);
       // let roles = jwtDecode(token);
        localStorage.setItem(
          "permissions",
          JSON.stringify(roles?.Roles)
        );
        console.log(roles, localStorage.getItem(
          "permissions"))
        this.authService.isAuthenticated = true;
        this.router.navigate(["/home"]);
      })
    }
  }
}
