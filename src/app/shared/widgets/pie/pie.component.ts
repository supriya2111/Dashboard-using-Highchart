import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {


  chartOptions!: {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    // Taken from the area charts example on Highcharts site
    this.chartOptions = {
      chart: {
        type: 'pie'
    },
    title: {
        //text: 'Departamental Strength of the Company',
        align: 'left'
    },
    subtitle: {
        // text: 'Custom animation of pie series',
        // align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            borderWidth: 2,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage}%',
                distance: 20
            }
        }
    },
    series: [{
        // Disable mouse tracking on load, enable after custom animation
        enableMouseTracking: true,
        animation: {
            duration: 2000
        },
        colorByPoint: true,
        data: [{
            name: 'Customer Support',
            y: 21.3
        }, {
            name: 'Development',
            y: 18.7
        }, {
            name: 'Sales',
            y: 20.2
        }, {
            name: 'Marketing',
            y: 14.2
        }, {
            name: 'Other',
            y: 25.6
        }]
    }]
    };

    HC_exporting(Highcharts); // For exporting data functionality

    // Trick for making the chart responsive
    // setTimeout(() => {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);
  }

}
