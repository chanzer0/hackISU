"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
        this.apiKey = '&APPID=3f48179c259d742cbcabfeec10cc30e3';
    }
    ;
    WeatherService.prototype.getWeatherByZip = function (zip, countryid) {
        return this.http.get(this.baseUrl + zip + "," + countryid + this.apiKey)
            .toPromise()
            .then(function (res) {
            return res.json();
        }, function (err) {
            return err;
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map