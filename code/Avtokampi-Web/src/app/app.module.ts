import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,
        fromComponents.HeaderComponent,
        fromComponents.FooterComponent,
        fromComponents.PageNotFoundComponent,
        fromComponents.UserProfileComponent,
        fromComponents.CampsListComponent,
        fromComponents.CampCardComponent,
        fromComponents.CampDetailsComponent,
    ],
    imports: [
        BrowserModule,
        ServicesModule,
        fromComponents.HomePageModule,
        fromComponents.MapsModule,
        fromComponents.AuthModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
