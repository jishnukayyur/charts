import { Component } from '@angular/core';
import { ChartService } from './services/chart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  constructor(private _chartService:ChartService){

  }

  ngOnInit(){
    this._chartService.getData()
  }
}
