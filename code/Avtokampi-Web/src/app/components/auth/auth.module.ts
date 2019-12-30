import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import * as fromAuth from '.';

@NgModule({
  declarations: [
    fromAuth.LoginComponent,
    fromAuth.RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
