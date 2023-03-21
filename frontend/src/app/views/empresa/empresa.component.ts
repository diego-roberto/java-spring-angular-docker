import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/shared/model/empresa.model';
import { RamoNegocio } from 'src/app/shared/model/ramo-negocio.model';
import { EmpresaService } from 'src/app/shared/service/empresa.service';
import { ConfirmationDialogComponent } from 'src/app/shared/util/dialog/confirmation-dialog.component';
import { MaskUtil } from 'src/app/shared/util/mask.util';
import { UtilValidators } from 'src/app/shared/util/validators.util';

@Component({
  selector: 'app-empresa',
  templateUrl:'./empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresaService]
})

export class EmpresaComponent implements OnInit{ 

  empresa: Empresa = new Empresa();
  empresas!: Empresa[];
  ramosNegocio!: RamoNegocio[];
  selected!: any;

  snackBar: any;

  form: FormGroup;
  cnpjMask = MaskUtil.cnpjMask;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private empresaService: EmpresaService
  ) {
    this.form = this.fb.group({
      razaoSocial: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      cnpj: new FormControl('', [
        Validators.required,
        UtilValidators.cnpj,
        Validators.minLength(18),
        Validators.maxLength(18)
      ]),
      endereco: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      ramoNegocio: new FormControl('')
    });
  }

  ngOnInit() {
    this.getEmpresas();
    this.getRamosNegocio();
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.empresaService.getEmpresaById(id).subscribe((empresa: Empresa) => {
          this.empresa = empresa;
          this.form.patchValue({
            razaoSocial: empresa.razaoSocial,
            cnpj: empresa.cnpj,
            endereco: empresa.endereco,
            ramoNegocio: empresa.ramoNegocio.id
          });
          
        });
      }
    });
    
  }

  getEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((result: Empresa[]) => {
      this.empresas = result;
    });
  }

  getRamosNegocio() {
    this.empresaService.getAllRamosNegocio().subscribe((result: RamoNegocio[]) => {
      this.ramosNegocio = result;
      this.selected = this.ramosNegocio[0].id;
    });

  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const selectedId = this.form.controls['ramoNegocio'].value;
    const selectedRamoNegocio = this.ramosNegocio.find(ramo => ramo.id === selectedId);

    this.empresa.razaoSocial = this.form.controls['razaoSocial'].value.trim();
    this.empresa.cnpj = this.form.controls['cnpj'].value.trim();
    this.empresa.endereco = this.form.controls['endereco'].value.trim();
    
    if (selectedRamoNegocio) {
      if (!this.empresa.ramoNegocio) {
        this.empresa.ramoNegocio = selectedRamoNegocio;
      }
      this.empresa.ramoNegocio.id = selectedId;
      this.empresa.ramoNegocio.descricao = selectedRamoNegocio.descricao;
    }

    const request = this.empresa.id
      ? this.empresaService.updateEmpresa(this.empresa)
      : this.empresaService.createEmpresa(this.empresa);
    request.subscribe(() => {
      this.router.navigate(['/empresas']);
      window.location.reload();
    });
  }

  removerEmpresa(empresa: Empresa): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Tem certeza que deseja remover ${empresa.razaoSocial}?`,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(empresa.id);
      }
    });

  }

  delete(id: number) {
    this.empresaService.deleteEmpresa(id).subscribe(() => {
      this.router.navigate(['/empresas']);
      window.location.reload();
    });
  }

}