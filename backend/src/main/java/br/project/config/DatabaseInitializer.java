package br.project.config;

import br.project.models.empresa.Empresa;
import br.project.models.ramoNegocio.Descricao;
import br.project.models.ramoNegocio.RamoNegocio;
import br.project.repositories.empresa.EmpresaRepository;
import br.project.repositories.ramoNegocio.RamoNegocioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DatabaseInitializer implements ApplicationRunner {

    /*
    classe para inicializar a tabela ramos_negocio com valores
     */

    @Autowired
    private RamoNegocioRepository ramoNegocioRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        List<RamoNegocio> ramosNegocio = ramoNegocioRepository.findAll();
        if (ramosNegocio.isEmpty()) {
            List<RamoNegocio> ramoNegocios = Arrays.asList(
                    new RamoNegocio(Descricao.INDUSTRIA),
                    new RamoNegocio(Descricao.COMERCIO),
                    new RamoNegocio(Descricao.SERVICO)
            );
            ramoNegocios = ramoNegocioRepository.saveAll(ramoNegocios);

            List<Empresa> empresas = Arrays.asList(
                    new Empresa(null ,"Agropecuária São Leopoldo", "31224123000130", "Rua das Garças, 215", ramoNegocios.get(2)),
                    new Empresa(null, "Rodovan Ind.", "28224123500112", "Avenida das Torres, 500", ramoNegocios.get(0))
            );
           empresaRepository.saveAll(empresas);
        }


    }

}
