import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';

import { AzureADServiceConstants } from './ngAuth/authenticators/AzureADServiceConstants';
import { AzureADAuthService } from './ngAuth/authenticators/AzureADAuthService';
import { AuthenticatedHttpService } from './ngAuth/AuthenticatedHttpService';

import { serviceConstants } from './authsettings.config';

let authenticator = new AzureADAuthService(serviceConstants);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HomeComponent,
    LoginComponent,
    StatusComponent
  ],
  providers: [
    HeroService,
    AuthenticatedHttpService, {
      provide: AzureADAuthService,
      useValue: authenticator
    }
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }

