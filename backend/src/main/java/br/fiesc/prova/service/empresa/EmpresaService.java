package br.fiesc.prova.service.empresa;

import br.fiesc.prova.models.empresa.Empresa;
import br.fiesc.prova.models.ramoNegocio.RamoNegocio;
import br.fiesc.prova.repositories.empresa.EmpresaRepository;
import br.fiesc.prova.repositories.ramoNegocio.RamoNegocioRepository;
import br.fiesc.prova.util.MaskUtil;
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
