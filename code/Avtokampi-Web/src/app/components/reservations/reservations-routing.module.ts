import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromReservations from '.';
import * as fromCamps from '../camps';

const routes: Routes = [
    {
        path: '',
        component: fromReservations.ReservationComponent
    },
    {
        path: 'reservations/:avtokampId',
        component: fromReservations.CampPitchesReservationComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
