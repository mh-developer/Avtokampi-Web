import { Injectable } from '@angular/core';
import { Response } from '../classes/apiresponse.class';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storitev } from '../../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class StoritveKampaService {

    constructor(
        private apiService: ApiService
    ) { }

    public get(kamp_id: number): Observable<Storitev[]> {
        return this.apiService.get(`/StoritveKampa/${kamp_id}/avtokamp`)
            .pipe(map(data => data));
    }

    public getStoritve(kamp_mesto_id: number): Response {
        return new Response(0, 0);
    }

    public getStoritev(storitev_id: number): Response {
        return new Response(0, 0);
    }

    public getKategorije(): Response {
        return new Response(0, 0);
    }

    public post(kamp_id: number, item: Storitev): Response {
        return new Response(0, 0);
    }

    public put(storitev_id: number): Response {
        return new Response(0, 0);
    }

    public delete(storitev_id: number): Response {
        return new Response(0, 0);
    }
}
