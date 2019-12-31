import { Avtokamp } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Avtokamp, Slika, Cenik, Regija, Drzava } from '../../models';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AvtokampiService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_id: number): Observable<Avtokamp> {
        return this.apiService.get(`/Avtokampi/${kamp_id}`)
                              .pipe(map(data => data));
    }

    public post(item: Avtokamp): Response {
        return new Response(0, 0);
    }

    public delete(kamp_id: number): Response {
        return new Response(0, 0);
    }

    public put(kamp_id: number): Response {
        return new Response(0, 0);
    }

    public getAll(): Observable<Avtokamp[]> {
        return this.apiService.get('/Avtokampi')
                              .pipe(map(data => data));
    }

    public getPaging(page: number, size: number): Observable<Avtokamp[]> {
        return this.apiService.get(`/Avtokampi/Paging?PageNumber=${page}&PageSize=${size}`)
                              .pipe(map(data => data));
    }

    public getSlike(kamp_id: number): Observable<Slika[]> {
        return this.apiService.get(`/Avtokampi/${kamp_id}/slike`)
                              .pipe(map(data => data));
    }

    public postSlike(kamp_id: number): Response {
        return new Response(0, 0);

    }

    public postSlika(kamp_id: number): Response {
        return new Response(0, 0);
    }

    public putSlika(slika_id: number): Response {
        return new Response(0, 0);
    }

    public deleteSlika(slika_id: number): Response {
        return new Response(0, 0);
    }

    public getCeniki(kamp_id: number): Observable<Cenik[]> {
        return this.apiService.get(`/Avtokampi/${kamp_id}/ceniki`)
                              .pipe(map(data => data));
    }

    public getCenik(cenik_id: number): Observable<Cenik> {
        return this.apiService.get(`/Avtokampi/${cenik_id}/cenik`)
                              .pipe(map(data => data));
    }

    public putCenik(cenik_id: number): Response {
        return new Response(0, 0);
    }

    public postCenik(kamp_id: number): Response {
        return new Response(0, 0);
    }

    public deleteCenik(cenik_id: number): Response {
        return new Response(0, 0);
    }

    public getRegije(): Observable<Regija[]> {
        return this.apiService.get('/Avtokampi/regije')
                              .pipe(map(data => data));
    }

    public getDrzave(): Observable<Drzava[]> {
        return this.apiService.get('/Avtokampi/drzave')
                              .pipe(map(data => data));
    }
}
