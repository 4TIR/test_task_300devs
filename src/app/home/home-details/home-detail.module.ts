import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDetailsComponent } from './components/home-details.component';
import { HomeDetailsRoutingModule } from './home-details-routing.module';
import { HomeApiService } from '../services/home-api.service';
import { HomeService } from '../services/home.service';



@NgModule({
  declarations: [HomeDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeDetailsRoutingModule
  ],
  providers:[
    HomeApiService,
    HomeService
  ]
})
export class HomeDetailModule { }
