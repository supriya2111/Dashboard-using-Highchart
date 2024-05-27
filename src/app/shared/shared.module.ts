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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StorageByUserComponent } from './widgets/storage-by-user/storage-by-user.component';

@NgModule({
  declarations: [
     StackedbarComponent,
     HeaderPartComponent,
     ColumnComponent,
     PieComponent,
     TableCompComponent,
     StorageByUserComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatFormFieldModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    StackedbarComponent,
    HeaderPartComponent,
    ColumnComponent,
    PieComponent,
    TableCompComponent,
    StorageByUserComponent
  ],
  providers: [
     
  ]
})
export class SharedModule { }
