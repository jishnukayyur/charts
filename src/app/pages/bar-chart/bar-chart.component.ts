import { Component } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  basicData: object=[];
  basicOptions: object={};

  constructor(private _chartService: ChartService) {

  }
  ngOnInit() {
    this._chartService.chartData.subscribe(data=>{
      this.setBarData(data[1])
    })
  }

  /**
   * Function to set bar chart data based on chart service data.
   *
   * @return {void} No return value
   */
  setBarData(value:object[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const baradata = value //this._chartService.getBarData()

    const labels = baradata?.map((val: any) => {
      return val.Month
    })

    const data = baradata?.map((val: any) => {
      return val.Student_Count
    })

    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Student Count',
          data: data,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
