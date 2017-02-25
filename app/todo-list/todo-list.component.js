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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_list_service_1 = require("./shared/todo-list.service");
=======
var core_1 = require('@angular/core');
var todo_list_service_1 = require('./shared/todo-list.service');
>>>>>>> ba0928b1d1b21a74d596395f9492e21a1ec93b0a
var TodoListComponent = (function () {
    function TodoListComponent(todoListService) {
        this.todoListService = todoListService;
        this.todoList = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoListService.getList().subscribe(function (res) {
            _this.todoList = res;
        });
    };
<<<<<<< HEAD
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: 'todo-list.component.html',
        providers: [todo_list_service_1.TodoListService]
    }),
    __metadata("design:paramtypes", [todo_list_service_1.TodoListService])
], TodoListComponent);
=======
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: 'todo-list.component.html',
            providers: [todo_list_service_1.TodoListService]
        }), 
        __metadata('design:paramtypes', [todo_list_service_1.TodoListService])
    ], TodoListComponent);
    return TodoListComponent;
}());
>>>>>>> ba0928b1d1b21a74d596395f9492e21a1ec93b0a
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map