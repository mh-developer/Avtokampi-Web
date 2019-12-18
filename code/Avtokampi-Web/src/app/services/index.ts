import { AvtokampiService } from "./repositories/avtokampi.service";
import { KampirnaMestaService } from "./repositories/kampirna_mesta.service";
import { RezervacijeService } from "./repositories/rezervacije.service";
import { StoritveKampaService } from "./repositories/storitve_kampa.service";

export const services: any[] = [
  AvtokampiService,
  KampirnaMestaService,
  RezervacijeService,
  StoritveKampaService
];

export * from "./repositories/avtokampi.service";
export * from "./repositories/kampirna_mesta.service";
export * from "./repositories/rezervacije.service";
export * from "./repositories/storitve_kampa.service";
