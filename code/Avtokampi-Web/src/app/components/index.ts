import { CampsListComponent, CampDetailsComponent, CampCardComponent } from './camps';
import { LoginComponent, RegisterComponent } from './auth';
import * as fromHomePage from './home';
import { UserProfileComponent } from './user-profile';
import { HeaderComponent, FooterComponent } from './layout';
import { PageNotFoundComponent } from './page-not-found';
import { MapComponent } from './maps';


export const components: any[] = [
    MapComponent,
    CampsListComponent,
    CampDetailsComponent,
    CampCardComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    fromHomePage.HomePageComponent,
    fromHomePage.SearchSectionComponent,
    fromHomePage.ServicesSectionComponent,
    fromHomePage.FeaturedDestinationSectionComponent,
    fromHomePage.SpecialOffersSectionComponent,
    fromHomePage.FactsCountersSectionComponent,
    fromHomePage.PopularOffersSectionComponent,
    fromHomePage.TestimonySectionComponent,
    fromHomePage.RestaurantsSectionComponent,
    fromHomePage.BlogSectionComponent,
    fromHomePage.NewsletterSectionComponent
];

export * from './maps';
export * from './camps';
export * from './auth';
export * from './user-profile';
export * from './layout';
export * from './page-not-found';
export * from './home';


export * from './home/home-page.module';
export * from './maps/maps.module';
export * from './auth/auth.module';
