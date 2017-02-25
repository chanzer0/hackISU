import { Component, OnInit, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { TodoList } from '../todo-list/shared/todo-list.model';
//import { TodoService } from '../services/todo.service';
import { Routes, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

export class Todo {
    constructor(
        public id:number,
        public newTodo:String,
        public done:boolean
    ) {}
}

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list/todo-list.component.html',
    styleUrls: [ './app/todo-list/todo-list.component.css'],
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

export class TodoListComponent {
	todoList: TodoList[] = [];

	constructor() { }

	index:number = 0;
    model = new Todo(this.index, "", false);
    todos = TODOS;
    submitted = false;
    done = false;
    public mouseOver = "inactive";

    onSubmit() { this.submitted = true;}

    clicked() {
    }

    Done(obj:any) {
    }

    showDeleteTask(obj:any) {
    }

    hideDeleteTask(obj:any) {
    }

    deleteTask(obj:any) {
    }
}