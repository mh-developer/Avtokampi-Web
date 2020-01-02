import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Uporabnik as User } from '../../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private http: HttpClient,
        private jwtService: JwtService
    ) { }

    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        // If JWT detected, attempt to get & store user's info
        const getToken = this.jwtService.getToken();
        if (getToken) {
            const username = this.jwtService.getDecodedTokenUsername(getToken);
            this.apiService.get(`/uporabniki/${username}/username`)
                .subscribe(
                    data => {
                        data.token = getToken;
                        this.setAuth(data);
                    },
                    err => this.purgeAuth()
                );
        } else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }

    getUser() {
        // If JWT detected, attempt to get & store user's info
        const getToken = this.jwtService.getToken();
        if (getToken) {
            const username = this.jwtService.getDecodedTokenUsername(getToken);
            this.apiService.get(`/uporabniki/${username}/username`)
                .subscribe(
                    data => {
                        data.token = getToken;
                        return data;
                    },
                    err => this.purgeAuth()
                );
        } else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
        return null;
    }

    setAuth(user: User) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({} as User);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    attemptAuth(type, credentials): Observable<User> {
        const route = (type === 'login') ? '/login' : '';
        credentials.username = credentials.email;
        return this.apiService.post('/auth' + route, { ...credentials })
            .pipe(map(
                data => {
                    this.jwtService.saveToken(data.token);
                    this.populate();
                    return this.getUser();
                }
            ));
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    // Update the user on the server (email, pass, etc)
    update(user): Observable<User> {
        return this.apiService
            .put('/uporabniki', { ...user })
            .pipe(map(data => {
                // Update the currentUser observable
                this.currentUserSubject.next(data.user);
                return data.user;
            }));
    }
}
