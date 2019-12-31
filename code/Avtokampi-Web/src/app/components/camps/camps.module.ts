import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromCamps from '.';
import { CampsRoutingModule } from './camps-routing.module';


@NgModule({
    declarations: [
        fromCamps.CampCardComponent,
        fromCamps.CampDetailsComponent,
        fromCamps.CampsListComponent,
    ],
    imports: [
        CommonModule,
        CampsRoutingModule
    ],
    exports: [
        fromCamps.CampCardComponent,
    ]
})
export class CampsModule { }
