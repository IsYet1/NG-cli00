import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsComponent } from './widgets.component';
import { WellMapComponent } from './well-map/well-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetsComponent, WellMapComponent],
  exports: [ WidgetsComponent, WellMapComponent ]
})
export class WidgetsModule { }
