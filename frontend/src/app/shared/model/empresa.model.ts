import { RamoNegocio } from "./ramo-negocio.model";

export class Empresa {
    id!: number;
    razaoSocial!: string;
    cnpj!: string;
    endereco!: string;
    ramoNegocio!: RamoNegocio;

    public constructor() { }

    public initializeWithJSON(json: any): Empresa {
        this.id = json.id;
        this.razaoSocial = json.razaoSocial;
        this.cnpj = json.cnpj;
        this.endereco = json.endereco;
        this.ramoNegocio = json.ramoNegocio;
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            razaoSocial: this.razaoSocial,
            cnpj: this.cnpj,
            endereco: this.endereco,
            ramoNegocio: this.ramoNegocio
        }
    }
}