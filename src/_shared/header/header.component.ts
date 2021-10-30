import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token = localStorage.getItem("token");
  isAuthorized:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.token){
      this.isAuthorized = true
    }else{
      this.isAuthorized = false
    }
  }

}
