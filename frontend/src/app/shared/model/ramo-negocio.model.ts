import { EnumDescricao } from "./enum-descricao";

export class RamoNegocio {
    id!: number;    
    descricao!: EnumDescricao;

    public constructor() { }

    public initializeWithJSON(json: any): RamoNegocio {
        this.id = json.id;
        this.descricao = json.descricao;
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            descricao: this.descricao
        }
    }
}