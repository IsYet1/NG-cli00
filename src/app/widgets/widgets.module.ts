import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsComponent } from './widgets.component';
import { WellMapComponent } from './well-map/well-map.component';
import { WellDataComponent } from './well-data/well-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetsComponent, WellMapComponent, WellDataComponent],
  exports: [ WidgetsComponent, WellMapComponent, WellDataComponent ]
})
export class WidgetsModule { }
