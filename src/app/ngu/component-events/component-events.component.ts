import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-events',
  templateUrl: './component-events.component.html',
  styleUrls: ['./component-events.component.css']
})
export class ComponentEventsComponent implements OnInit {
  @Input('placeholder')
  text123 = 'Type your search';

  constructor() { }

  ngOnInit() {
  }

  clear(input){
    console.warn("Clear clicked...");
    input.value='';
  }

}
