import { Response } from "../classes/apiresponse.class";
import { KampirnoMesto } from "../../models";

export class KampirnaMestaService {

    static get(kamp_mesto_id: number): Response {
      return new Response(0, 0);
    }

    static post(kamp_id: number, item: KampirnoMesto): Response {
      return new Response(0, 0);
    }

    static delete(kamp_id: number, kamp_mesto_id: number): Response {
      return new Response(0, 0);
    }

    static put(kamp_id: number, kamp_mesto_id: number): Response {
      return new Response(0, 0);
    }

    static getKategorije(): Response {
      return new Response(0, 0);
    }

    static getAll(kamp_id: number): Response {
      return new Response(0, 0);
    }
}
