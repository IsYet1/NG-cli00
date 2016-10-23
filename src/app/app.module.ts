import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridsModule } from './grids/grids.module';

import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
