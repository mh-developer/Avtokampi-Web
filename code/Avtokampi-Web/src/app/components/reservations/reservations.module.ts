import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { CampsModule } from '../camps/camps.module';
import { ReservationComponent } from './reservation';
import { ReservationFormComponent } from './reservation-form';
import { CampPitchesReservationComponent } from './camp-pitches-reservation';


@NgModule({
  declarations: [
      ReservationComponent,
      ReservationFormComponent,
      CampPitchesReservationComponent,
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    CampsModule
  ]
})
export class ReservationsModule { }
