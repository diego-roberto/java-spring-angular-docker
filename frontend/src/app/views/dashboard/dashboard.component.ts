import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/shared/model/empresa.model';
import { EmpresaService } from 'src/app/shared/service/empresa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [EmpresaService]
})

export class DashboardComponent implements OnInit {

  empresas: Empresa[] = new Array();
  empresasPorRamoNegocio: any;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getEmpresas();
    this.getRamosNegocio();
  }

  getEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((result: Empresa[]) => {
      this.empresas = result;
    });
  }

  getRamosNegocio() {
    this.empresaService.getEmpresasByRamoNegocio().subscribe((result: any) => {
      this.empresasPorRamoNegocio = result;
    });    
  }

}
