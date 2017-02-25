"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var weather_component_1 = require("../app/weather/weather.component");
var appRoutes = [
    { path: '', redirectTo: 'app-root', pathMatch: 'full' },
    { path: '../app', component: weather_component_1.WeatherComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map