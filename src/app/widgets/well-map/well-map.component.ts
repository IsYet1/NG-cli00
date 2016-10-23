import { Component, OnInit } from '@angular/core';

const urlBasePath: string = "app/widgets/well-map/";

@Component({
  selector: 'oxy-well-map',
  templateUrl: './well-map.component.html',
  styleUrls: ['./well-map.component.css']
})
export class WellMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sampleText: string = "In the Well Map Component";
  imgUrl: string = urlBasePath + "tstImg.png";


}
