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

	constructor(private WeathService: WeatherService) { }

	ngOnInit() {
        this.ifNight()
        //get zip and code from user
        this.WeathService.getWeatherByZip(51401, 'us').then(res => {
            this.weather = res;
            this.weather.main.temp = Math.round(this.weather.main.temp * (9/5) - 459.67);
            this.weather.main.temp_min = Math.round(this.weather.main.temp_min * (9/5) - 459.67);
            this.weather.main.temp_max = Math.round(this.weather.main.temp_max * (9/5) - 459.67);
            console.log(this.weather);
        }, (error) => {
            //FAILURE
            console.log(error);
        })
    } 

    getSettings() {
        //get country into lower case, check length on zipcode
        this.WeathService.getWeatherByZip(this.user[0].zipcode, 'us').then(res => {
            this.weather = res;
            this.weather.main.temp = Math.round(this.weather.main.temp * (9/5) - 459.67);
            this.weather.main.temp_min = Math.round(this.weather.main.temp_min * (9/5) - 459.67);
            this.weather.main.temp_max = Math.round(this.weather.main.temp_max * (9/5) - 459.67);
            console.log(this.weather);
        }, (error) => {
            //FAILURE
            console.log(error);
        })
    }

    ifNight() {
        if (this.hours > 20 || this.hours < 5) {
            this.nighttime = "moon";
        }
        else {
            this.nighttime = "sun";
        }
}