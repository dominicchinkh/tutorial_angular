import { Component, ViewChild, signal } from '@angular/core';
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

export interface Data {
  x: string;
  y: number[];
}

@Component({
  selector: 'app-candle-stick',
  imports: [NgApexchartsModule],
  templateUrl: './candle-stick.html',
  styleUrl: './candle-stick.css',
})
export class CandleStick {
  @ViewChild("chart") chart!: ChartComponent;
  
  private url = 'http://localhost:3000/price';

  public chartOptions = signal<ChartOptions>({
    series: [
      { 
        name: "candle", 
        data: []
      }
    ],
    chart: { 
      type: "candlestick", 
      height: 350
    },
    title: {
      text: "Stock Price", 
      align: "left"
    },
    xaxis: { 
      type: "datetime",
      tickPlacement: "on", // Forces ticks and labels to align exactly with the data points
    },
    yaxis: { 
      tooltip: { 
        enabled: true 
      } 
    }
  });

  async getData(): Promise<Data[]> {
    try {
      const response = await fetch(this.url);
      return await response.json() ?? [];

    } catch (error) {
      console.error("Failed to fetch price data:", error);
      return [];
    }
  }

  constructor() {

    this.getData().then((records: Data[]) => {

      if (records.length === 0) {
        console.log("No data!")
        return;
      }

      console.log(records)

      // Update the signal state. Angular handles the change detection seamlessly!
      this.chartOptions.set({
        series: [
          {
            name: "candle",
            data: records
          }
        ],
        chart: {
          type: "candlestick",
          height: 350
        },
        title: {
          text: "Stock Price",
          align: "left"
        },
        xaxis: {
          type: "datetime",
          tickPlacement: "on", // Forces ticks and labels to align exactly with the data points
          tickAmount: records.length,
        },
        yaxis: {
          tooltip: { enabled: true }
        }
      });
    });
  }
}
