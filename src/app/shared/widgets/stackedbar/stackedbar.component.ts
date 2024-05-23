import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-stackedbar',
  templateUrl: './stackedbar.component.html',
  styleUrls: ['./stackedbar.component.css']
})
export class StackedbarComponent implements OnInit {

   
  Highcharts = Highcharts;
  chartOptions = {};


  constructor() { 
     
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Total Number of container running per user(top 10 user by usage)',
        align: 'left'
    },
    xAxis: {
        categories: ['Supriya', 'Jayesh', 'Prachi', 'Preet']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Containers'
        },
        stackLabels: {
            enabled: true
        }
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 70,
        floating: true,
        // backgroundColor:
        //     Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Notebook',
        data: [3, 5, 1, 13]
    }, {
        name: 'Gui',
        data: [14, 8, 8, 12]
    }, {
        name: 'CL',
        data: [0, 2, 6, 3]
    }]
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
