import { Component, OnDestroy, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Udemy Advanced Angulary with Firebase';
  cuisines;
  private subscription;

  constructor(private af: AngularFire) {
    //super();
  }

  ngOnInit(){
    this.subscription =
      this.af.database.list('/cuisines').subscribe(x => {
        this.cuisines = x;
        console.log(this.cuisines);
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }  
}
