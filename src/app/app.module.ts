import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { FbService } from './services/fb.service';

import { ExampleRoutes, RouteExamplesModule } from './route-examples/route-examples.module';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDYeCNCz3it_DaUetJ5bF-FZ--kf631ygA",
    authDomain: "pepper-a15f6.firebaseapp.com",
    databaseURL: "https://pepper-a15f6.firebaseio.com",
    storageBucket: "pepper-a15f6.appspot.com",
    messagingSenderId: "510860996922"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouteExamplesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(ExampleRoutes),
  ],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
