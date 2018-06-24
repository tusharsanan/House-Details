import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {PropertyListModule} from './property-list/property-list.module';
import {PropertyListContainerComponent} from './property-list/property-list-container.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PropertyListModule
  ],
  providers: [],
  bootstrap: [PropertyListContainerComponent]
})
export class AppModule { }
