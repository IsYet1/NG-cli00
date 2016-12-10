import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Udemy Advanced Angular with Firebase';
  cuisines: FirebaseListObservable<any[]>;
  restaurant;


  constructor(private af: AngularFire) {
    //super();
  }

  ngOnInit(){
    this.cuisines =   this.af.database.list('/cuisines');
    this.restaurant = this.af.database.object('/restaurant');
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
