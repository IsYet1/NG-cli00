import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, AngularFireModule } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const firebaseConfig = {
    apiKey: "AIzaSyDYeCNCz3it_DaUetJ5bF-FZ--kf631ygA",
    authDomain: "pepper-a15f6.firebaseapp.com",
    databaseURL: "https://pepper-a15f6.firebaseio.com",
    storageBucket: "pepper-a15f6.appspot.com",
    messagingSenderId: "510860996922"
  };

@Injectable()
export class FbService {
  public Cuisines: FirebaseListObservable<any[]>;
  public RestaurantsWithDetails: Observable<any[]>;

  constructor(private af: AngularFire) { 
    this.Cuisines = this.GetCuisines();
    this.RestaurantsWithDetails = this.GetRestaurantsWithDetails();
  }

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

  GetRestaurantsWithDetails(): Observable<any[]>{
    var restaurants = this.GetRestaurants()
      .map(rs => {
        //Next use JS array map to modify each item.
        rs.map(r =>{
          r.cuisineType = this.af.database.object('/cuisines/' + r.cuisine);

          r.featureTypes = [];
          for (var f in r.features)
            r.featureTypes.push(this.af.database.object('/features/' + f));
        });
        return rs; //Returns an Observable
      });
    return restaurants;
  }

  AddCuisine(name: string, index: number){
    this.Cuisines.push({
      value: 'Asian-1',
      name: 6
    })
  }

}
