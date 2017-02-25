import { Component, OnInit, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { TodoList } from './shared/todo-list.model';

@Component({
    selector: 'todo-list',
    templateUrl: '../app/todo-list/todo-list.component.html',
    styleUrls: [ '../app/todo-list/todo-list.component.css'],
    animations: [
    trigger('focusPanel', [
      state('inactive', style({
        display: 'none',
        'text-align':'right'
      })),
      state('active',   style({
        display: 'unset',
        'text-align':'right'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
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