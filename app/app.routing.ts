import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from '../app/weather/weather.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'app-root', pathMatch: 'full' },
    {path: '../app', component: WeatherComponent}
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);