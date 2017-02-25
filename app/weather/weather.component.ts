import { Component, OnInit } from '@angular/core';

import { Weather } from './shared/weather.model';
import { WeatherService } from './shared/weather.service';

@Component({
	selector: 'weather',
	templateUrl: './app/weather/weather.component.html',
	providers: [WeatherService]
})

export class WeatherComponent implements OnInit {
	weather: Weather;

	constructor(private weatherService: WeatherService) { }

	ngOnInit() {
		this.weatherService.getWeatherByZip(51401, 'us').then((res) => {
			this.weather = res;
		});
	}
}