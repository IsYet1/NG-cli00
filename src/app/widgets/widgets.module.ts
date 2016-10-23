import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellMapComponent } from './well-map/well-map.component';
import { WellDataComponent } from './well-data/well-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ WellMapComponent, WellDataComponent],
  exports: [  WellMapComponent, WellDataComponent ]
})
export class WidgetsModule { }
