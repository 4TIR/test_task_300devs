import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMainRoutingModule } from './home-main-routing.module';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeApiService } from '../services/home-api.service';
import { HomeService } from '../services/home.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeMainRoutingModule,
    SharedModule,
  ],
  providers:[
    HomeApiService,
    HomeService
  ]
})
export class HomeMainModule { }
