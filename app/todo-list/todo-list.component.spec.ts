import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TodoListComponent } from './todo-list.component';
import { TodoListService } from './shared/todo-list.service';
import { TodoList } from './shared/todo-list.model';

describe('a todo-list component', () => {
	let component: TodoListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: TodoListService, useClass: MockTodoListService },
				TodoListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TodoListComponent], (TodoListComponent:any) => {
		component = TodoListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original todo-list service
class MockTodoListService extends TodoListService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
