import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Quota } from 'src/app/interfaces/quota.interface';

@Component({
  selector: 'app-storage-by-user',
  templateUrl: './storage-by-user.component.html',
  styleUrls: ['./storage-by-user.component.css']
})
export class StorageByUserComponent implements OnInit {

  @Input()
  singleUserQuota!: Quota;
 
  username: string = 'supriya'
  quotaUsed: number =4;
  
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
       text: `Quota used by ${this.username}`
     //  text: 'Quota used by '
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
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
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
          enabled: true,
          distance: '-100%',
          format: `${this.quotaUsed} GB`,
          style: {
              fontWeight: 'bold',
              fontSize: '18px'
          },
       },
        colorByPoint: true,
        data: [{
          name: 'Quota used',
          align: 'center',
         // y: this.singleUserQuota.quotaUsed // Storage used in GB
         y:4
        }],
       
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
