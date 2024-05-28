import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_drilldown from 'highcharts/modules/drilldown';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent implements OnInit {

  chartOptions!: any;
  Highcharts = Highcharts;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    HC_exporting(Highcharts);
    HC_drilldown(Highcharts); // Initialize the drilldown module

    this.chartOptions = {
      chart: {
        type: 'column',
        events: {
          drilldown: (e: any) => this.onDrilldown(e),
          drillup: () => this.onDrillup()
        }
      },
      title: {
        align: 'left',
        text: 'Browser market shares. January, 2022'
      },
      subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      colors: ['#8A2BE2', '#5B2C6F', '#9B59B6', '#E74C3C', '#C0392B', '#E67E22', '#D35400'],
      legend: {
        enabled: false
      },
      exporting: {
        enabled: true,      
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
          '<b>{point.y:.2f}%</b> of total<br/>'
      },
      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 63.06,
              drilldown: 'Chrome'
            },
            {
              name: 'Safari',
              y: 19.84,
              drilldown: 'Safari'
            },
            {
              name: 'Firefox',
              y: 4.18,
              drilldown: 'Firefox'
            },
          ]
        }
      ],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              ['v65.0', 0.1],
              ['v64.0', 1.3],                        
            ]
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              ['v58.0', 1.02],
              ['v57.0', 7.36], 
            ]
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              ['v11.0', 3.39],
              ['v10.1', 0.96],           
            ]
          },
        ]
      }
    };
  
  }

  onDrilldown(e: any) {
    const drilldownSeries = e.seriesOptions;
  
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: `Market share for ${drilldownSeries.name}`
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y:.1f}%'
          }
        }
      },
      colors: ['#16d4e6', '#00e9ba'],
      series: [{
        name: drilldownSeries.name,
        data: drilldownSeries.data
      }],
      drilldown: {
        series: []
      },
      exporting: {
        enabled: true,
        buttons: {
          customButton: {
            text: 'Back',
            onclick: () => {
              this.onDrillup();
              
              this.cdr.detectChanges();
            }
          }
        }
      }
    };
  
    this.cdr.detectChanges();
  }
  

  onDrillup() {
    // Revert the chart options back to the original column chart
    this.chartOptions = {
      chart: {
        type: 'column',
        events: {
          drilldown: (e: any) => this.onDrilldown(e),
          drillup: () => this.onDrillup(),
        }
      },
      title: {
        align: 'left',
        text: 'Browser market shares. January, 2022'
      },
      subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      colors: ['#8A2BE2', '#5B2C6F', '#9B59B6', '#E74C3C', '#C0392B', '#E67E22', '#D35400'],
      legend: {
        enabled: false
      },
      exporting: {
        enabled: true,      
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
          '<b>{point.y:.2f}%</b> of total<br/>'
      },
      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 63.06,
              drilldown: 'Chrome'
            },
            {
              name: 'Safari',
              y: 19.84,
              drilldown: 'Safari'
            },
            {
              name: 'Firefox',
              y: 4.18,
              drilldown: 'Firefox'
            },
          ]
        }
      ],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              ['v65.0', 0.1],
              ['v64.0', 1.3],                        
            ]
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              ['v58.0', 1.02],
              ['v57.0', 7.36], 
            ]
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              ['v11.0', 3.39],
              ['v10.1', 0.96],           
            ]
          },
        ]
      }
    };
    this.cdr.detectChanges();
  }
}
