import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

 
  dayWiseStorage = [50, 60, 70, 80, 90, 100, 110]; 

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
      xAxis: {
        categories: [...['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']]
      },
      yAxis: {
        title: {
          text: 'Storage (GB)'
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Storage',
          type: 'column',
          data: [...this.dayWiseStorage],
          color: '#f455fa'
        }
      ],
     
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
