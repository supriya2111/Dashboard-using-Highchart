import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { QuotaService } from 'src/app/Serivce/quota.service';
import { Quota } from 'src/app/interfaces/quota.interface';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  userList: Quota[] = [];

  usernames = ['Supriya','Jayesh','Prachi','Preet','palash','ajay','pnq']
  dayWiseStorage = [4, 6 ,7, 10, 9, 8, 7]; 

  Highcharts = Highcharts;
  chartOptions: any = {};

  constructor(private quotaService: QuotaService) { }

  ngOnInit(): void {
    //this.extractData();

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Storage Usage Statistics'
      },
      xAxis: {
        categories: [...this.usernames]
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

  // extractData(): void {
  //   // Extract usernames and their corresponding quotaUsed values
  //   this.usernames = this.userList.map(user => user.username);
  //   this.dayWiseStorage = this.userList.map(user => user.quotaUsed);
  // }
}
