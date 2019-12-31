import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        fromComponents.HeaderComponent,
        fromComponents.FooterComponent,
        fromComponents.PageNotFoundComponent,
        fromComponents.UserProfileComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ServicesModule,
        fromComponents.HomePageModule,
        fromComponents.MapsModule,
        fromComponents.AuthModule,
        fromComponents.CampsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
