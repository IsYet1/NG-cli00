import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, AngularFireModule } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyDYeCNCz3it_DaUetJ5bF-FZ--kf631ygA",
    authDomain: "pepper-a15f6.firebaseapp.com",
    databaseURL: "https://pepper-a15f6.firebaseio.com",
    storageBucket: "pepper-a15f6.appspot.com",
    messagingSenderId: "510860996922"
  };

@Injectable()
export class FbService {

  constructor(private af: AngularFire) { }

  GetCuisines(): FirebaseListObservable<any[]>{
    var cuisines = this.af.database.list('/cuisines', {
      query: {
        orderByValue: true
      }
    });
    return cuisines;
  }

  GetRestaurants(): FirebaseListObservable<any[]>{
    var restaurants = this.af.database.list('/restaurants', {
      query: {
        orderByChild: 'address/city'
      }
    });
    return restaurants;
  }

}
