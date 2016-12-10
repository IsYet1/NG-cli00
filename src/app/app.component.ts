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
    debugger;
    this.cuisines.push({
      value: 'Asian-1',
      name: 6
    })
  }

}
