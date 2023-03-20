package br.fiesc.prova.repositories.empresa;

import br.fiesc.prova.models.empresa.Empresa;
import br.fiesc.prova.models.ramoNegocio.RamoNegocio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    @Query(" SELECT a FROM Empresa AS a  WHERE  a.cnpj =:cnpj or a.cnpj =:cnpjFormated  ")
    Empresa findByCnpj(@Param("cnpj")String cnpj, @Param("cnpjFormated") String cnpjFormated);

    Optional<Empresa> findById(Long id);

    @Query("SELECT e FROM Empresa e WHERE e.ramoNegocio.id = :ramoNegocioId")
    List<Empresa> findByRamoNegocioId(Long ramoNegocioId);

}
