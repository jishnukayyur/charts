import { Component } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent {
  data: object=[];
  options: object={};
  constructor(private _chartService: ChartService) { }


  ngOnInit() {
    this._chartService.chartData.subscribe(data=>{
      this.setPieData(data[0])
    })

  }
  /**
   * Sets the data and options for the pie chart based on the data retrieved from the ChartService.
   *
   * This function retrieves the pie data from the ChartService and maps the Course_Name and Enrollment_Count
   * properties to separate arrays. It then retrieves the text color from the computed style of the document element.
   *
   * The data object is then populated with the labels and datasets. The labels array contains the Course_Name
   * values from the pieData array. The datasets array contains a single object with the data array containing the
   * Enrollment_Count values from the pieData array, the backgroundColor array containing the custom CSS color
   * values for the chart, and the hoverBackgroundColor array containing the darker shades of the custom CSS colors.
   *
   * The options object is populated with the plugins object, which contains the legend object. The legend object
   * contains the labels object, which specifies that the legend labels should use the point style and have the
   * specified text color.
   *
   * @return {void} This function does not return anything.
   */
  setPieData(value:object[]) {

    const pieData = value

    const labels = pieData?.map((val: any) => {
      return val.Course_Name
    })

    const data = pieData?.map((val: any) => {
      return val.Enrollment_Count
    })

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}
