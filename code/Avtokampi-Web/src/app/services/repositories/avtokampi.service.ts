import {Avtokamp} from "../../models";
import {Response} from "../classes/apiresponse.class";

export class AvtokampiService{

    static get(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static post(item: Avtokamp): Response {
      return new Response(0, 0);
    }

    static delete(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static put(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static getAll(): Response {
      return new Response(0, 0);
    }

    static getSlike(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static postSlike(kamp_id: number): Response {
      return new Response(0, 0);

    }

    static postSlika(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static putSlika(slika_id: number): Response {
      return new Response(0, 0);
    }

    static deleteSlika(slika_id: number): Response {
      return new Response(0, 0);
    }

    static getCeniki(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static getCenik(cenik_id: number): Response {
      return new Response(0, 0);
    }

    static putCenik(cenik_id: number): Response {
      return new Response(0, 0);
    }

    static postCenik(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static deleteCenik(cenik_id: number): Response {
      return new Response(0, 0);
    }

    static getRegije(): Response {
      return new Response(0, 0);
    }

    static getDrzave(): Response {
      return new Response(0, 0);
    }
}
