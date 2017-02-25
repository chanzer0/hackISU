import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Clock } from './clock.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClockService {

    constructor(
      private http: Http) { };

}