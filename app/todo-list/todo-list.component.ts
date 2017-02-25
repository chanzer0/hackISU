import { Component, OnInit } from '@angular/core';

import { TodoList } from './shared/todo-list.model';

@Component({
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
})

export class TodoListComponent implements OnInit {
	todoList: TodoList[] = [];

	constructor() { }

	issubmitted = false;

	ngOnInit() {
		//this.todoListService.getList().subscribe((res) => {
		//	this.todoList = res;
		//});
	}
	function addtolist(){

		String:  = document.getElementById("TodoList");

	}

	{
		<button onclick = "addtolist()"
	}
}