import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ClockComponent } from './clock.component';
import { ClockService } from './shared/clock.service';
import { Clock } from './shared/clock.model';

describe('a clock component', () => {
	let component: ClockComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ClockService, useClass: MockClockService },
				ClockComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ClockComponent], (ClockComponent) => {
		component = ClockComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original clock service
class MockClockService extends ClockService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
