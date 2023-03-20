import { Injectable } from "@angular/core";
import { Empresa } from "src/app/shared/model/empresa.model";
import { HttpClientService } from "./http-client.service";
import { map } from 'rxjs/operators';
import { RamoNegocio } from "../model/ramo-negocio.model";

@Injectable()
export class EmpresaService {  

  public empresa: Empresa = new Empresa;
  private endpointEmpresa = '/empresas';
  
  constructor(private service: HttpClientService) { }
  
  getAllEmpresa() {
    return this.service.get(this.endpointEmpresa + '/findAll').pipe(
      map((jsonResponse: { empresa: any[]; }) => {
        if (jsonResponse.empresa) {
          return jsonResponse.empresa.map((jsonEmpresa: any) => {
            return new Empresa().initializeWithJSON(jsonEmpresa);
          });
        } else {
          return [];
        }
      })
    );
  }
    
  getEmpresaById(id: number) {
    return this.service.get(this.endpointEmpresa + '/id/' + id)
      .pipe(map((response: Response) => {
        const jsonResponse = response.json();
        return new Empresa().initializeWithJSON(jsonResponse);
      }));
  }
    
  createEmpresa(empresa: Empresa) {
    return this.service.post(this.endpointEmpresa, empresa.toJSON()).pipe(
      map((jsonResponse: any) => {
        return new Empresa().initializeWithJSON(jsonResponse);
      })
    );
  }
  
  updateEmpresa(empresa: Empresa) {
    return this.service.put(this.endpointEmpresa + `/${empresa.id}`, empresa.toJSON()).pipe(
      map((jsonResponse: any) => {
        return new Empresa().initializeWithJSON(jsonResponse);
      })
    );
  }
  
  deleteEmpresa(id: number) {
    return this.service.delete(this.endpointEmpresa + `/${id}`);
  }

  /* não é uma boa prática, eu sei... */
  getAllRamosNegocio() {
    return this.service.get(this.endpointEmpresa + '/findAllRamosNegocio').pipe(
      map((jsonResponse: { ramosNegocio: any[]; }) => {
        if (jsonResponse.ramosNegocio) {
          return jsonResponse.ramosNegocio.map((ramosNegocio: any) => {
            return new RamoNegocio().initializeWithJSON(ramosNegocio);
          });
        } else {
          return [];
        }
      })
    );
  }

  getEmpresasByRamoNegocioId(ramoNegocioId: number) {
    return this.service.get(this.endpointEmpresa + '/findEmpresasByRamoNegocioId/' + ramoNegocioId).pipe(
      map((jsonResponse: { empresa: any[]; }) => {
        if (jsonResponse.empresa) {
          return jsonResponse.empresa.map((jsonEmpresa: any) => {
            return new Empresa().initializeWithJSON(jsonEmpresa);
          });
        } else {
          return [];
        }
      })
    );
  }
  /* */
  
}