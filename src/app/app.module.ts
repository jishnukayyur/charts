import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PieChartsComponent } from './pages/pie-charts/pie-charts.component';
import { ChartModule } from 'primeng/chart';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    PieChartsComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
