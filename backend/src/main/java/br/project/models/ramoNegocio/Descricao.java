package br.project.models.ramoNegocio;

import lombok.Getter;

@Getter
public enum Descricao {
	
	INDUSTRIA("Indústria"),
	COMERCIO("Comércio"),
	SERVICO("Serviço");

	String value;

	Descricao(String value) {
		this.value = value;
	}
	
}
