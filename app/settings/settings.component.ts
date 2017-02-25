import { Component, OnInit } from '@angular/core';

import { Settings } from './shared/settings.model';
//hmmm work on this.
import { SettingsService } from './shared/settings.service';

@Component({
	selector: 'settings',
	templateUrl: 'settings.component.html',
	providers: [Settings],

	template: `
	<form id ="settings" action="/get_settings.php" method="get">
		Zip code: <input type = "text" name="zipcode">
	</form>
	`
})
//test
export class SettingsComponent  {
	//settings: Settings[] = [];
	
	}
