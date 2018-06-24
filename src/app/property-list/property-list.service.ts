import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PropertyListService {
  private API_KEY = 'ac1b0b1572524640a0ecc54de453ea9f';
  private HOUSE_ID = '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<any>  {
    return this.http.get(`http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${this.API_KEY}/koop/${this.HOUSE_ID}/`);
  }
}
