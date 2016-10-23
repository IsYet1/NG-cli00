import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsComponent } from './widgets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetsComponent],
  exports: [ WidgetsComponent ]
})
export class WidgetsModule { }
