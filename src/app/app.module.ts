import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyBnNqqf1xt5odL5Mk6luggjdh5t95Xbcpg",
    authDomain: "isyet-97e80.firebaseapp.com",
    databaseURL: "https://isyet-97e80.firebaseio.com",
    storageBucket: "isyet-97e80.appspot.com",
    messagingSenderId: "672301772823"
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
