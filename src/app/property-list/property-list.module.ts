import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PropertyListComponent} from './property-list.component';
import {PropertyListContainerComponent} from './property-list-container.component';


@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PropertyListComponent,
    PropertyListContainerComponent
  ]
})
export class PropertyListModule { }
