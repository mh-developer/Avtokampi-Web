import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromCamps from '.';
import { CampsRoutingModule } from './camps-routing.module';
import { MapsModule } from '../maps/maps.module';


@NgModule({
    declarations: [
        fromCamps.CampCardComponent,
        fromCamps.CampDetailsComponent,
        fromCamps.CampsListComponent,
    ],
    imports: [
        CommonModule,
        CampsRoutingModule,
        MapsModule
    ],
    exports: [
        fromCamps.CampCardComponent,
    ]
})
export class CampsModule { }
