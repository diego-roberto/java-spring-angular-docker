package br.project.repositories.ramoNegocio;

import br.project.models.ramoNegocio.RamoNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RamoNegocioRepository extends JpaRepository<RamoNegocio, Long> {

}
