import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the new header
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`)
    });

    // Pass on the cloned request instead of the original request
    return next.handle(authReq);
  }
}
