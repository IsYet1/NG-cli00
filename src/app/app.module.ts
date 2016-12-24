import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { FbService } from './services/fb.service';

import { AngularFireModule } from 'angularfire2';
import { DefaultRouteComponent } from './route-examples/default-route/default-route.component';
import { SampleRouteComponent } from './route-examples/sample-route/sample-route.component';
import { NotFoundComponent } from './route-examples/not-found/not-found.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDYeCNCz3it_DaUetJ5bF-FZ--kf631ygA",
    authDomain: "pepper-a15f6.firebaseapp.com",
    databaseURL: "https://pepper-a15f6.firebaseio.com",
    storageBucket: "pepper-a15f6.appspot.com",
    messagingSenderId: "510860996922"
  };
const ROUTES: Routes =[
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
  declarations: [
    AppComponent,
    DefaultRouteComponent,
    SampleRouteComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
