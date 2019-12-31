import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import * as fromComponents from './components';
import { from } from 'rxjs';


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
        component: fromComponents.CampsListComponent
    },
    {
        path: 'maps',
        loadChildren: () => import(`./components`).then(m => m.MapsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import(`./components`).then(m => m.AuthModule)
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
