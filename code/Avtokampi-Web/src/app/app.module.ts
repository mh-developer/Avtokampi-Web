import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import { ServicesModule } from './services';

@NgModule({
    declarations: [
        AppComponent,
        ...fromComponents.components
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServicesModule,
        fromComponents.HomePageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
