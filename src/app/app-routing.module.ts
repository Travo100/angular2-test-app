import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}