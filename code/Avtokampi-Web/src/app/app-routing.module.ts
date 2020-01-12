import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import * as fromComponents from './components';
import {from} from "rxjs";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import(`./components`).then(m => m.HomePageModule)
    },
    {
        path: 'camps',
        loadChildren: () => import(`./components`).then(m => m.CampsModule)
    },
    {
        path: 'maps',
        loadChildren: () => import(`./components`).then(m => m.MapsModule)
    },
    {
        path: 'reservations',
        loadChildren: () => import(`./components`).then(m => m.ReservationsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import(`./components`).then(m => m.AuthModule)
    },
    {
        path: 'user-profile',
        component: fromComponents.UserProfileComponent
    },
    {
        path: '**',
        component: fromComponents.PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
