import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsComponent } from './grids.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridsComponent],
  exports: [ GridsComponent ]
})
export class GridsModule { }
