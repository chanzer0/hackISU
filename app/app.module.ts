import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { AppComponent }  from './app.component';

@NgModule({
    imports:    [ BrowserModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, ClockComponent, WeatherComponent, TodoListComponent ],
    providers: [  ],
    bootstrap: [ AppComponent ]   
})

export class AppModule { }