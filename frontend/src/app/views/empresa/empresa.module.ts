import { NgModule } from '@angular/core';
import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
