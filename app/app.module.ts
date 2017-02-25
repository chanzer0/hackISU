import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from '../app/weather/weather.component';
//import { SettingsComponent } from '../app/settings/settings.component';
import { ClockComponent } from '../app/clock/clock.component';
import { TodoListComponent } from '../app/todo-list/todo-list.component';
import { WeatherService } from './weather/shared/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ClockComponent,
    TodoListComponent,
    //SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    JsonpModule,
    CommonModule,
    routing
  ],
  providers: [ WeatherService, appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }