import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeWrapperComponent } from "./components/home-wrapper/home-wrapper.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeApiService } from "./services/home-api.service";
import { HomeService } from "./services/home.service";


@NgModule({
  declarations: [
    HomeWrapperComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[
    HomeApiService,
    HomeService
  ]
})
export class HomeModule { }
