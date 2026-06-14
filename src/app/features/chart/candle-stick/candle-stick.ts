import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-candle-stick',
  imports: [NgApexchartsModule],
  templateUrl: './candle-stick.html',
  styleUrl: './candle-stick.css',
})
export class CandleStick {
  @ViewChild("chart") chart!: ChartComponent;
  
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: [
            { x: new Date(2026, 5, 1), y: [6629.81, 6650.5, 6622.66, 6639.4] },
            { x: new Date(2026, 5, 2), y: [6639.4, 6667.11, 6613.4, 6651.8] },
            { x: new Date(2026, 5, 3), y: [6651.8, 6671.3, 6605.5, 6626.02] },
            { x: new Date(2026, 5, 4), y: [6626.02, 6650.0, 6620.0, 6630.11] },
            { x: new Date(2026, 5, 5), y: [6630.11, 6662.0, 6625.0, 6647.4] }
          ]
        }
      ],
      chart: {
        type: "candlestick",
        height: 350
      },
      title: {
        text: "Stock Price Development",
        align: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  }
}
