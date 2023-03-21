import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { EmpresaRoutingModule } from '../empresa/empresa.routing.module';
import { DashboardComponent } from './dashboard.component';
import { EmpresaModule } from '../empresa/empresa.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EmpresaModule,
    EmpresaRoutingModule,
  ]
})
export class DashboardModule { }
