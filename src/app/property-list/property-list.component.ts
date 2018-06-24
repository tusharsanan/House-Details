import { Component, Input } from '@angular/core';
import { PropertyDetails } from './property-list';

/* Dumb component */

@Component({
  selector: 'funda-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  @Input() houseDetails: PropertyDetails;

  constructor() {
  }
}
