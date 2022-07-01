import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeWrapperComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./home-main/home-main.module').then((m) => m.HomeMainModule),
          },
          {
            path: 'item',
            loadChildren: () => import('./home-details/home-detail.module').then((m) => m.HomeDetailModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
