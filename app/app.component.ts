import { Component, Input } from '@angular/core';
import { WeatherComponent } from '../app/weather/weather.component';
import { ClockComponent } from '../app/clock/clock.component';
import { TodoListComponent } from '../app/todo-list/todo-list.component'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  //directives: [ WeatherComponent, ClockComponent, TodoListComponent ]
})
export class AppComponent {
  name = 'Lexi';
  title = 'app works!';

}



