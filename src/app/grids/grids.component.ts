import { Component, OnInit } from '@angular/core';

const urlBasePath: string = "app/grids/";

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sampleText: string = "In the Grids Component 0752";
  imgUrl: string = urlBasePath + "tstImg.png";

}
