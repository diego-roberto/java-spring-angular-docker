import { NgModule } from '@angular/core';
import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmpresaComponent
  ],
  imports: [    
    SharedModule,
    EmpresaRoutingModule
  ],
  exports: [    
    EmpresaComponent
  ],
})
export class EmpresaModule { }
