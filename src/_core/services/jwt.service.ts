import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  getToken(): String {
    let token = `Bearer ${localStorage.getItem("token")}`;

    return token;
  }

  saveToken(token: String) {
    window.localStorage["jwtToken"] = token;
  }

  destroyToken() {
    window.localStorage.removeItem("jwtToken");
  }
}
