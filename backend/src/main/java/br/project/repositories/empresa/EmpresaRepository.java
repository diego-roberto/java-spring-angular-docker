package br.project.repositories.empresa;

import br.project.models.empresa.Empresa;
import br.project.models.ramoNegocio.RamoNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    @Query(" SELECT a FROM Empresa AS a  WHERE  a.cnpj =:cnpj or a.cnpj =:cnpjFormated  ")
    Empresa findByCnpj(@Param("cnpj")String cnpj, @Param("cnpjFormated") String cnpjFormated);

    Optional<Empresa> findById(Long id);

    @Query("SELECT e.ramoNegocio.descricao as ramoNegocio, count(e) as quantidade FROM Empresa e GROUP BY e.ramoNegocio.descricao")
    List<Map<String, Object>> getEmpresasByRamoNegocio();

    @Query("SELECT e FROM Empresa e WHERE e.ramoNegocio.id = :ramoNegocioId")
    List<Empresa> findByRamoNegocioId(Long ramoNegocioId);

}
