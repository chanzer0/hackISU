import { Component, OnInit } from '@angular/core';

import { Clock } from './shared/clock.model';
import { ClockService } from './shared/clock.service';

@Component({
	selector: 'clock',
	templateUrl: 'clock.component.html',
	providers: [ClockService]
})

export class ClockComponent implements OnInit {
	clock: Clock[] = [];

	constructor(private clockService: ClockService) { }

	ngOnInit() {
		this.clockService.getList().subscribe((res) => {
			this.clock = res;
		});
	}
}