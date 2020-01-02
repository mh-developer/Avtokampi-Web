import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromReservations from '.';

const routes: Routes = [
    {
        path: '',
        component: fromReservations.ReservationComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
