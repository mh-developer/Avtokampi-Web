import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KampirnoMesto } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class KampirnaMestaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_mesto_id: number): Observable<KampirnoMesto> {
        return this.apiService.get(`/KampirnaMesta/${kamp_mesto_id}`)
            .pipe(map(data => data));
    }

    public getByAvtokamp(kamp_id: number): Observable<KampirnoMesto[]> {
        return this.apiService.get(`/KampirnaMesta/${kamp_id}/avtokamp`)
            .pipe(map(data => data));
    }

    public post(kamp_id: number, item: KampirnoMesto): Response {
        return new Response(0, 0);
    }

    public delete(kamp_id: number, kamp_mesto_id: number): Response {
        return new Response(0, 0);
    }

    public put(kamp_id: number, kamp_mesto_id: number): Response {
        return new Response(0, 0);
    }

    public getKategorije(): Response {
        return new Response(0, 0);
    }
}
