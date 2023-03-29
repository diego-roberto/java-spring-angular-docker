package br.project.service.empresa;

import br.project.models.empresa.Empresa;
import br.project.models.ramoNegocio.RamoNegocio;
import br.project.repositories.empresa.EmpresaRepository;
import br.project.repositories.ramoNegocio.RamoNegocioRepository;
import br.project.util.MaskUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Transactional
public class EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private RamoNegocioRepository ramoNegocioRepository;

    public List<Empresa> findAll() {
        return empresaRepository.findAll();
    }

    public Empresa findById(Long id) {
        Optional<Empresa> empresa = empresaRepository.findById(id);
        return empresa.orElse(null);
    }

    public Empresa findByCnpj(String cnpj) {
        String cnpjFormated = MaskUtil.cnpjFormatter(cnpj);
        return empresaRepository.findByCnpj(cnpj, cnpjFormated);
    }

    public List<Empresa> findByRamoNegocioId(Long ramoNegocioId) {
        return empresaRepository.findByRamoNegocioId(ramoNegocioId);
    }

    //não é uma boa prática, eu sei...
    public List<RamoNegocio> findAllRamoNegocio() {
        return ramoNegocioRepository.findAll();
    }

    public List<Map<String, Object>> getEmpresasPorRamoNegocio() {
        return empresaRepository.getEmpresasByRamoNegocio();
    }

    public Empresa create(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public Empresa update(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public void delete(Empresa empresa) {
        empresaRepository.delete(empresa);
    }

}
