import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromCamps from '.';

const routes: Routes = [
    {
        path: '',
        component: fromCamps.CampsListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampsRoutingModule { }
