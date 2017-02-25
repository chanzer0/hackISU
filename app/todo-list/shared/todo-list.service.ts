import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TodoList } from './todo-list.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoListService {

    constructor(
      private http: Http) { };

}