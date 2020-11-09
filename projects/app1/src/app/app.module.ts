import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {NavComponent} from './nav/nav.component';
import {DashboardStatsComponent} from './dashboard-stats/dashboard-stats.component';
import {MaterialModule} from '../../../../src/app/shared/material/material.module';

const app1Providers = [];

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent,
    DashboardStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: app1Providers
    };
  }
}
