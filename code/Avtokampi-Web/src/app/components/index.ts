import { CampsListComponent } from './camps/camps-list/camps-list.component';
import { CampDetailsComponent } from './camps/camp-details/camp-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CampCardComponent } from './camps/camp-card/camp-card.component';

export const components: any[] = [
    CampsListComponent,
    CampDetailsComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    CampCardComponent,
    HeaderComponent,
    FooterComponent
];

export * from './camps/camps-list/camps-list.component';
export * from './camps/camp-details/camp-details.component';
export * from './camps/camp-card/camp-card.component';
export * from './auth/login/login.component';
export * from './auth/register/register.component';
export * from './user-profile/user-profile.component';
export * from './layout/header/header.component';
export * from './layout/footer/footer.component';
