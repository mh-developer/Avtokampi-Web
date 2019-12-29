import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as fromServices from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: fromServices.HttpTokenInterceptor, multi: true },
    fromServices.ApiService,
    fromServices.AuthGuard,
    fromServices.JwtService,
    fromServices.UserService,
    fromServices.AvtokampiService,
    fromServices.KampirnaMestaService,
    fromServices.RezervacijeService,
    fromServices.StoritveKampaService
  ],
  declarations: []
})
export class ServicesModule { }
