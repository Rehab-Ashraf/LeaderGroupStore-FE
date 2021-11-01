import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token = localStorage.getItem("token");
  isAuthorized:boolean = false;

  constructor(public authService: AuthService,private router:Router) { 
    authService.checkAuthentication()
  }

  ngOnInit(): void {
    this.authService.checkAuthentication()
  }

  logOut(){
    return this.authService.logOut().subscribe((res:any)=>{
      localStorage.removeItem("token");
      localStorage.removeItem("permissions");
      this.authService.isAuthenticated = false;
      this.router.navigate(["/auth/login"]);
    })
  }

}
