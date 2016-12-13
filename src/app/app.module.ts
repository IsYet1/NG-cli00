import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FbService } from './services/fb.service';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
