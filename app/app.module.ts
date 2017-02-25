import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports:    [ BrowserModule, HttpModule, JsonpModule, routing ],
    declarations: [ AppComponent ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]   
})

export class AppModule { }