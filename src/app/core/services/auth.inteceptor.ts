import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../models/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(Constants.apiRoot)) {
      const headers = req.headers
        .set('Accept', 'application/json')
        .set('X-Auth-Token', `${Constants.token}`)
      const authReq = req.clone({ headers });

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
