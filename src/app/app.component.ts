import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Udemy Advanced Angular with Firebase';
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;;

  constructor(private af: AngularFire) {
    //super();
  }

  ngOnInit(){
    this.cuisines =   this.af.database.list('/cuisines');
    this.restaurants = this.af.database.list('/restaurants')
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
  }

  ngOnInit_Cuisines(){
    this.cuisines =   this.af.database.list('/cuisines');
    this.restaurants = this.af.database.list('/restaurants')
      .map(rs => {
        console.warn("Before Map:", rs);
        //Next use JS array map to modify each item.
        rs.map(r =>{
          r.cuisineType = this.af.database.object('/cuisines/' + r.cuisine);
        });
        console.warn("After Map:", rs);
        return rs; //Returns an Observable
      });
  }

  add(){
    this.cuisines.push({
      value: 'Asian-1',
      name: 6
    })
  }

  addCuisine7(){
    this.af.database.object('/cuisines/7').set('Cuisine 7');
  }

  changeCuisine7(){
    this.af.database.object('/cuisines/7').set('Cuisine 7 Updated');
  }

  deleteCuisine7(){
    this.af.database.object('/cuisines/7').set(null);
  }

  removeCuisine7(){
    this.af.database.object('/cuisines/7').remove()
      .then(x => console.warn('REMOVE was SUCCESSFUL'))
      .catch(error => console.warn('ERROR removing', error)
      )
  }

  update(){
    this.af.database.object('/restaurant').update({
      name: 'New Name',
      rating: 5
    })
  }

}
