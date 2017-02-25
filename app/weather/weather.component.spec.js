"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var weather_component_1 = require("./weather.component");
var weather_service_1 = require("./shared/weather.service");
describe('a weather component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: weather_service_1.WeatherService, useClass: MockWeatherService },
                weather_component_1.WeatherComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([weather_component_1.WeatherComponent], function (WeatherComponent) {
        component = WeatherComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
// Mock of the original weather service
var MockWeatherService = (function (_super) {
    __extends(MockWeatherService, _super);
    function MockWeatherService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockWeatherService.prototype.getList = function () {
        return Observable_1.Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
    };
    return MockWeatherService;
}(weather_service_1.WeatherService));
//# sourceMappingURL=weather.component.spec.js.map