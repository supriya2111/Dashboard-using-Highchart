import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

 
  dayWiseStorage = [4, 6 ,7, 10, 9, 8, 7]; 

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Storage Usage Statistics'
      },
      plotOptions: {
        series: {
          cumulative: true,
          pointStart: Date.UTC(2023, 0, 1), // Adjust if data starts on a different date
          pointIntervalUnit: 'day'
        }
      },
      xAxis: {
        minRange: 3 * 24 * 36e5, // Minimum visible range in milliseconds (3 days)
        type: 'datetime' // Set axis type to interpret data as timestamps
      },
      yAxis: {
        title: {
          text: 'Storage (GB)'
        }
      },
      colors: [
        '#2bc9dc',
        '#20cfe1',
        '#16d4e6',
        '#0dd9db',
        '#03dfd0',
        '#00e4c5',
        '#00e9ba',
      ],
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          borderRadius: 5,
          name: 'Storage',
          colorByPoint: true,
          type: 'column',
          data: [...this.dayWiseStorage]
        }
      ]    
    };

    HC_exporting(Highcharts); // For exporting data functionality

    // Trick for making the chart responsive
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
