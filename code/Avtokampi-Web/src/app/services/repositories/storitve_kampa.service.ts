import {Response} from "../classes/apiresponse.class";
import {Storitev} from "../../models";

export class StoritveKampaService {

    static get(kamp_id: number): Response {
      return new Response(0, 0);
    }

    static getStoritve(kamp_mesto_id: number): Response {
      return new Response(0, 0);
    }

    static getStoritev(storitev_id: number): Response {
      return new Response(0, 0);
    }

    static getKategorije(): Response {
      return new Response(0, 0);
    }

    static post(kamp_id: number, item: Storitev): Response {
      return new Response(0, 0);
    }

    static put(storitev_id: number): Response {
      return new Response(0, 0);
    }

    static delete(storitev_id: number): Response {
      return new Response(0, 0);
    }
}
