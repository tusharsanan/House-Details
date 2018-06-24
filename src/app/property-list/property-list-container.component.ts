import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyListService } from './property-list.service';

@Component({
  selector: 'funda-property-list-container',
  templateUrl: './property-list-container.component.html'
})
export class PropertyListContainerComponent implements OnInit {
  public houseDetails$: Observable<Object>;

  constructor(private propertyListService: PropertyListService) { }

  ngOnInit() {
    // Getting the houseDetails from the API through a service call.
    this.houseDetails$ = this.propertyListService.getHouses();
  }

}
