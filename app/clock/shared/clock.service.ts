import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Clock } from './clock.model';

@Injectable()
export class ClockService {

	constructor(private http: Http) { }

	getList(): Observable<Clock[]> {
		return this.http.get('/api/list').map(res => res.json() as Clock[]);
	}
}