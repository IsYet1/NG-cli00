import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { FbService } from './services/fb.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Udemy Advanced Angular with Firebase';
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  featureExists;

  constructor(private af: AngularFire, private fb: FbService) {
    //super();
  }

  ngOnInit(){
    this.cuisines = this.fb.Cuisines;
    this.restaurants = this.fb.RestaurantsWithDetails;

      // /restaurants/1/features/1
      this.featureExists = this.af.database.object('/restaurants/1/features/1');
      this.featureExists.take(1).subscribe(x => {
        if (x && x.$value) console.log("EXISTS");
        else console.log("Does NOT Exist");
      })
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
