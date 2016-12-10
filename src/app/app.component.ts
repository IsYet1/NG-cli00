import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Udemy Advanced Angulary with Firebase';
  cuisines;

  constructor(private af: AngularFire) {
    //super();
  }

  ngOnInit(){
    this.cuisines =
      this.af.database.list('/cuisines');
  }

}
