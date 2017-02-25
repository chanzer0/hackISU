import { Component } from '@angular/core';

import { Clock } from './shared/clock.model';

@Component({
	selector: 'clock',
	templateUrl: './app/clock/clock.component.html',
	styleUrls: ['./app/clock/clock.component.css'],
})

export class ClockComponent {
	clock: Clock[] = [];
	public date:any;
	public dateString:String;
	public currentMonth:any;
	public currentDay:any;
	public currentWeekday:any;
	public currentYear:any;

	constructor() { 

		let weekday: String[] = new Array(6);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
	
		let month: String[] = new Array(12);
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";

		this.date = new Date();

		this.dateString = weekday[this.date.getDay()] + ", " + month[this.date.getMonth()] + " " + this.date.getDate() + " " + this.date.getFullYear();

		setInterval(() => {
      		this.date = new Date();
    	}, 1000);

	}

}