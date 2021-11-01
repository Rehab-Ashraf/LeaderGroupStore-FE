import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { JWTService } from "../services/jwt.service";
@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(private jwtService: JWTService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig:any = {};
    const token: any = this.jwtService.getToken();
    req = req.clone({
      headers: req.headers.set(
        "Content-Type",
        "application/json; charset=utf-8"
      ),
    });
    req = req.clone({
      headers: req.headers.set("Accept", "*/*"),
    });
    if (token) {
      headersConfig["Authorization"] = `${token}`;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
