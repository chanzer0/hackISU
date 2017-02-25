import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TodoList } from './todo-list.model';

@Injectable()
export class TodoListService {

	constructor(private http: Http) { }

	getList(): Observable<TodoList[]> {
		return this.http.get('/api/list').map(res => res.json() as TodoList[]);
	}
}