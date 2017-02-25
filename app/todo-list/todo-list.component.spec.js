"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var todo_list_component_1 = require('./todo-list.component');
var todo_list_service_1 = require('./shared/todo-list.service');
describe('a todo-list component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: todo_list_service_1.TodoListService, useClass: MockTodoListService },
                todo_list_component_1.TodoListComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([todo_list_component_1.TodoListComponent], function (TodoListComponent) {
        component = TodoListComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
// Mock of the original todo-list service
var MockTodoListService = (function (_super) {
    __extends(MockTodoListService, _super);
    function MockTodoListService() {
        _super.apply(this, arguments);
    }
    MockTodoListService.prototype.getList = function () {
        return Observable_1.Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
    };
    return MockTodoListService;
}(todo_list_service_1.TodoListService));
//# sourceMappingURL=todo-list.component.spec.js.map