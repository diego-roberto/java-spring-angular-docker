import { Component } from '@angular/core';
import { EmpresaService } from 'src/app/shared/service/empresa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  
  providers: [EmpresaService]
})

export class DashboardComponent {}
