import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/shared/model/empresa.model';
import { RamoNegocio } from 'src/app/shared/model/ramo-negocio.model';
import { EmpresaService } from 'src/app/shared/service/empresa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../views/empresa/empresa.component.scss'],
  providers: [EmpresaService]
})

export class DashboardComponent implements OnInit {

  empresas!: Empresa[];
  ramosNegocio!: RamoNegocio[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.getEmpresas();
    this.getRamosNegocio();
  }

  getEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((empresas: Empresa[]) => {
      this.empresas = empresas;
    });
  }

  getRamosNegocio() {
    this.empresaService.getAllRamosNegocio().subscribe((ramosNegocio: RamoNegocio[]) => {
      this.ramosNegocio = ramosNegocio;
    });

  }

}
