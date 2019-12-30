import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromAuth from '.';


const routes: Routes = [
    {
        path: 'login',
        component: fromAuth.LoginComponent
    },
    {
        path: 'register',
        component: fromAuth.RegisterComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
