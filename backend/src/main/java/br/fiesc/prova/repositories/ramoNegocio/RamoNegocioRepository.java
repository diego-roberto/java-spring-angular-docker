package br.fiesc.prova.repositories.ramoNegocio;

import br.fiesc.prova.models.ramoNegocio.RamoNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RamoNegocioRepository extends JpaRepository<RamoNegocio, Long> {

}
