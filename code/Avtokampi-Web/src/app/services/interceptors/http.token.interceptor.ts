import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { JwtService } from '../repositories';

@Injectable({
    providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private jwtService: JwtService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this.jwtService.getToken();

        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
        }

        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request).pipe(tap(() => { },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                        return;
                    }
                    this.router.navigate(['login']);
                }
            }));
    }
}
