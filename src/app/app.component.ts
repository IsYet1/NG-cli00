import { Component } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Udemy Advanced Angulary with Firebase';
  cuisines;

  constructor(af: AngularFire) {
    //super();

    console.log(af);

    af.database.list('/cuisines').subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines);
    });
    
  }
}
