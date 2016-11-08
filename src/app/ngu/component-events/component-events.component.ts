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

  clear(input, outerDiv){
    console.warn("Clear clicked...");
    console.log(input)
    console.log(outerDiv.children);
    input.value='';

    outerDiv.children[0].type='search';
  }

}
