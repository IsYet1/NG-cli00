import { Component, OnInit } from '@angular/core';
import { WellDataService } from './well-data.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'oxy-well-data',
  templateUrl: './well-data.component.html',
  styleUrls: ['./well-data.component.css'],
  providers: [WellDataService]

})
export class WellDataComponent implements OnInit {
  items: Observable<any>;

  constructor(private _dataService: WellDataService) { }

  ngOnInit(): void {
    console.log("In OnInit - Observable to Array");
    this._dataService.getItems()
    .subscribe(
        (items) => {
          this.items = items;
          console.log("Item Count: " + items);
        },
        (err) => {
          console.log(err);
        }
      )
  }


}
