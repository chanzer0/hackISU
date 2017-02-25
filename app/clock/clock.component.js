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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var clock_service_1 = require("./shared/clock.service");
=======
var core_1 = require('@angular/core');
var clock_service_1 = require('./shared/clock.service');
>>>>>>> ba0928b1d1b21a74d596395f9492e21a1ec93b0a
var ClockComponent = (function () {
    function ClockComponent(clockService) {
        this.clockService = clockService;
        this.clock = [];
    }
    ClockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clockService.getList().subscribe(function (res) {
            _this.clock = res;
        });
    };
<<<<<<< HEAD
    return ClockComponent;
}());
ClockComponent = __decorate([
    core_1.Component({
        selector: 'clock',
        templateUrl: 'clock.component.html',
        providers: [clock_service_1.ClockService]
    }),
    __metadata("design:paramtypes", [clock_service_1.ClockService])
], ClockComponent);
=======
    ClockComponent = __decorate([
        core_1.Component({
            selector: 'clock',
            templateUrl: 'clock.component.html',
            providers: [clock_service_1.ClockService]
        }), 
        __metadata('design:paramtypes', [clock_service_1.ClockService])
    ], ClockComponent);
    return ClockComponent;
}());
>>>>>>> ba0928b1d1b21a74d596395f9492e21a1ec93b0a
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=clock.component.js.map