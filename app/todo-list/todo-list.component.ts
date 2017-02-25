import { Component, OnInit } from '@angular/core';

import { TodoList } from './shared/todo-list.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	providers: [TodoListService]
})

export class TodoListComponent implements OnInit {
	todoList: TodoList[] = [];

	constructor(private todoListService: TodoListService) { }

	ngOnInit() {
		this.todoListService.getList().subscribe((res) => {
			this.todoList = res;
		});
	}
}