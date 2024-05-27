import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-storage-by-user',
  templateUrl: './storage-by-user.component.html',
  styleUrls: ['./storage-by-user.component.css']
})
export class StorageByUserComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
      },
      title: {
        text: 'Quota used'
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} GB</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: false
        }
      },
      series: [{
        name: 'Quota used',
        center: [195, 60],
        size: 150,
        innerSize: '80%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        },
        colorByPoint: true,
        data: [{
          name: 'Quota used',
          align: 'center',
          y: 4 // Storage used in GB
        }]
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
