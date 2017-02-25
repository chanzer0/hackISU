"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodoListComponent = (function () {
    function TodoListComponent() {
        this.todoList = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        //this.todoListService.getList().subscribe((res) => {
        //	this.todoList = res;
        //});
    };
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: '../app/todo-list/todo-list.component.html',
            styleUrls: ['../app/todo-list/todo-list.component.css'],
            animations: [
                core_1.trigger('focusPanel', [
                    core_1.state('inactive', core_1.style({
                        display: 'none',
                        'text-align': 'right'
                    })),
                    core_1.state('active', core_1.style({
                        display: 'unset',
                        'text-align': 'right'
                    })),
                    core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map