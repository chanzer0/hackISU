import { Component, OnInit } from '@angular/core';

import { Clock } from './shared/clock.model';

@Component({
	selector: 'clock',
	templateUrl: 'clock.component.html',
})

export class ClockComponent implements OnInit {
	clock: Clock[] = [];

	constructor() { }

	ngOnInit() {
		//this.clockService.getList().subscribe((res) => {
		//	this.clock = res;
		//});
	}
}