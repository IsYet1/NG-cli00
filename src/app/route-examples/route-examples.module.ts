import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRouteComponent } from './default-route/default-route.component';
import { SampleRouteComponent } from './sample-route/sample-route.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ExampleRoutes = [
    {
    path: 'test',
    component: SampleRouteComponent,
  },
  {
    path: '',
    component: DefaultRouteComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefaultRouteComponent,
    SampleRouteComponent,
    NotFoundComponent
  ]
})

export class RouteExamplesModule { }
