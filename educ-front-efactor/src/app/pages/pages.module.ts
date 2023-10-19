import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ChooseUserComponent,
    PersonalDataComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
