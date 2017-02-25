import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Weather } from './weather.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  private apiKey = '&APPID=3f48179c259d742cbcabfeec10cc30e3';

  constructor(
      private http: Http) { };

  getWeatherByZip(zip:number, countryid:String): Promise<Weather> {
      return this.http.get(this.baseUrl + zip + "," + countryid + this.apiKey)
      .toPromise()
      .then(function(res) {
        return res.json();
      }, function(err) {
        return err;
      });
  }
}