import { Component, OnInit } from '@angular/core';

import { Settings } from './shared/settings.model';

import { SettingsService } from './shared/settings.service';

@Component({
	selector: 'settings',
	templateUrl: 'settings.component.html',
	providers: [Settings],

	template: `
	<form class ="settings" action="/seansShit.php" method="get">
		<div id="zip">
			Zip code: <input type = "text" name="zipcode">
		<br>
		</div>
		<div id= "name">
			First Name: <input type = "text" name="fName">
			Last Name: <input type="text" name= "lName">
		<br>
		</div>
	</form>
	`
})
//test
export class SettingsComponent  {
	//settings: Settings[] = [];
	
	}
