import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsComponent } from './grids.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule,
  ],
  declarations: [GridsComponent],
  exports: [ GridsComponent ]
})
export class GridsModule { }
