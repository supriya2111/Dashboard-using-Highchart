import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';
import { StackedbarComponent } from './widgets/stackedbar/stackedbar.component';
import { HeaderPartComponent } from './widgets/header-part/header-part.component';
import { MatCardModule } from '@angular/material/card';
import { ColumnComponent } from './widgets/column/column.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableCompComponent } from './widgets/table-comp/table-comp.component';

@NgModule({
  declarations: [
     StackedbarComponent,
     HeaderPartComponent,
     ColumnComponent,
     PieComponent,
     TableCompComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    StackedbarComponent,
    HeaderPartComponent,
    ColumnComponent,
    PieComponent,
    TableCompComponent
  ],
  providers: [
     
  ]
})
export class SharedModule { }
