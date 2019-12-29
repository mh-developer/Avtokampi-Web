import { Injectable } from '@angular/core';
import { Rezervacija } from '../../models';
import { Response } from '../classes/apiresponse.class';

@Injectable({
    providedIn: 'root'
})
export class RezervacijeService {

    static getUserReservations(user_id: number): Response {
        return new Response(0, 0);
    }

    static get(rez_id: number): Response {
        return new Response(0, 0);
    }

    static put(rez_id: number): Response {
        return new Response(0, 0);
    }

    static delete(rez_id: number): Response {
        return new Response(0, 0);
    }

    static post(item: Rezervacija): Response {
        return new Response(0, 0);
    }

    static getVrsteKampiranja(): Response {
        return new Response(0, 0);
    }

    static getStatus(): Response {
        return new Response(0, 0);
    }
}
