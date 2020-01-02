import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mnenje } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class MnenjaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(mnenje_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/Uporabniki/avtokamp/${mnenje_id}/mnenje`)
            .pipe(map(data => data));
    }

    public getMnenjaByAvtokamp(kamp_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/Uporabniki/avtokamp/${kamp_id}/mnenja`)
            .pipe(map(data => data));
    }

    public getMnenjaByUser(user_id: number): Observable<Mnenje[]> {
        return this.apiService.get(`/Uporabniki/${user_id}/mnenja`)
            .pipe(map(data => data));
    }

    public post(kamp_id: number, item: Mnenje): Response {
        return new Response(0, 0);
    }

    public put(mnenje_id: number): Response {
        return new Response(0, 0);
    }

    public delete(mnenje_id: number): Response {
        return new Response(0, 0);
    }
}
