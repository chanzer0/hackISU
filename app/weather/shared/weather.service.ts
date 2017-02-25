import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Weather } from './weather.model';

@Injectable()
export class WeatherService {

	constructor(private http: Http) { }

	getList(): Observable<Weather[]> {
		return this.http.get('/api/list').map(res => res.json() as Weather[]);
	}
}