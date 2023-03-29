package br.project.models.ramoNegocio;

import br.project.models.empresa.Empresa;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.checkerframework.common.aliasing.qual.Unique;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ramos_negocio")
public class RamoNegocio implements Serializable {

	private static final long serialVerionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Unique
	private Descricao descricao;

	public RamoNegocio(Descricao descricao) {
		this.descricao = descricao;
	}


}

