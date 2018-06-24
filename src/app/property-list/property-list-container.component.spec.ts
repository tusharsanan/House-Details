import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyListContainerComponent } from './property-list-container.component';
import { of } from 'rxjs';
import {PropertyListModule} from './property-list.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PropertyListContainerComponent', () => {
  let component: PropertyListContainerComponent;
  let fixture: ComponentFixture<PropertyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PropertyListModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component['propertyListService'], 'getHouses').and.callFake(() => of(null));
    expect(component).toBeTruthy();
  });
});
