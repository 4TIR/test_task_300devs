import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeDetailsComponent } from './components/home-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':id',
        component: HomeDetailsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeDetailsRoutingModule {}
