import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './shared/weather.service';
import { Weather } from './shared/weather.model';

describe('a weather component', () => {
	let component: WeatherComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: WeatherService, useClass: MockWeatherService },
				WeatherComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([WeatherComponent], (WeatherComponent:any) => {
		component = WeatherComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original weather service
class MockWeatherService extends WeatherService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
