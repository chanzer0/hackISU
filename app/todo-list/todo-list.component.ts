import { Component, OnInit } from '@angular/core';

import { TodoList } from './shared/todo-list.model';

@Component({
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
})

export class TodoListComponent implements OnInit {
	todoList: TodoList[] = [];

	constructor() { }

	ngOnInit() {
		//this.todoListService.getList().subscribe((res) => {
		//	this.todoList = res;
		//});
	}
}