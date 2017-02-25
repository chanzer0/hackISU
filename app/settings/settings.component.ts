import { Component, OnInit } from '@angular/core';

import { Settings } from './shared/settings.model';
//hmmm work on this.
import { SettingsService } from './shared/settings.service';

@Component({
	selector: 'settings',
	templateUrl: 'settings.component.html',
	providers: [Settings],

	template: `
//typically other html stuff here, but we'll see
	`
})
//test
export class SettingsComponent  {
	//settings: Settings[] = [];
	
	}
