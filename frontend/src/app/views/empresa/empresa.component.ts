import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  styleUrls: ['./empresa.component.css'],
  providers: [EmpresaService]
})

export class EmpresaComponent implements OnInit{ 

  empresa: Empresa = new Empresa();
  empresas!: Empresa[];
  ramosNegocio!: RamoNegocio[];

  dialog: any;
  snackBar: any;

  form: FormGroup;
  cnpjMask = MaskUtil.cnpjMask;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private empresaService: EmpresaService
  ) {
    this.form = this.fb.group({
      razaoSocial: new FormControl('', [
        Validators.required,
        UtilValidators.onlytext,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      cnpj: new FormControl('', [
        Validators.required,
        UtilValidators.cnpj,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      endereco: new FormControl('', [
        Validators.required
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
            name: empresa.razaoSocial,
            cnpj: empresa.cnpj,
            endereco: empresa.endereco,
            ramoNegocio: empresa.ramoNegocio
          });
        });
      }
    });
    
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

  removerEmpresa(empresa: Empresa): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Tem certeza que deseja remover ${empresa.razaoSocial}?`,
      },
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.empresa.razaoSocial = this.form.controls['name'].value.trim();
    this.empresa.cnpj = this.form.controls['cnpj'].value.trim();
    this.empresa.endereco = this.form.controls['endereco'].value.trim();
    this.empresa.ramoNegocio = this.form.controls['ramoNegocio'].value.trim();

    const request = this.empresa.id
      ? this.empresaService.updateEmpresa(this.empresa)
      : this.empresaService.createEmpresa(this.empresa);

    request.subscribe(() => {
      this.router.navigate(['/empresa']);
    });
  }

  delete() {
    this.empresaService.deleteEmpresa(this.empresa.id).subscribe(() => {
      this.router.navigate(['/empresa']);
    });
  }

}