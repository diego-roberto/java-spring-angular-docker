package br.fiesc.prova.models.empresa;

import br.fiesc.prova.models.ramoNegocio.RamoNegocio;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "empresas")
public class Empresa implements Serializable {

	private static final long serialVerionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String razaoSocial;
	
	@NotNull
	private String cnpj;

	@NotNull
	private String endereco;

	@ManyToOne
	@JoinColumn(name = "ramo_negocio_id")
	private RamoNegocio ramoNegocio;

}
