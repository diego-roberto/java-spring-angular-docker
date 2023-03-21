package br.fiesc.prova.controllers.empresa;

import br.fiesc.prova.models.empresa.Empresa;
import br.fiesc.prova.models.ramoNegocio.RamoNegocio;
import br.fiesc.prova.responses.ErrorResponse;
import br.fiesc.prova.responses.SuccessResponse;
import br.fiesc.prova.service.empresa.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    private final static String NOT_FOUND = "Empresa não encontrada.";

    @GetMapping("/id/{id}")
    public ResponseEntity<Empresa> index(@PathVariable("id") Long id) {
        Empresa empresa = empresaService.findById(id);
        return new SuccessResponse<Empresa>().handle(empresa, HttpStatus.OK);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Empresa>> findAll() {
        List<Empresa> empresas = empresaService.findAll();
        return new SuccessResponse<List<Empresa>>().handle(empresas, HttpStatus.OK);
    }

    @GetMapping("/findAllRamosNegocio")
    public ResponseEntity<List<RamoNegocio>> findAllRamosNegocio() {
        List<RamoNegocio> ramosNegocio = empresaService.findAllRamoNegocio();
        return new SuccessResponse<List<RamoNegocio>>().handle(ramosNegocio, HttpStatus.OK);
    }

    @GetMapping("/cnpj/{cnpj}")
    public ResponseEntity<?> findByCnpj(@PathVariable("cnpj") String cnpj) {
        Empresa empresa = empresaService.findByCnpj(cnpj);
        if(empresa != null) {
            return new SuccessResponse<Empresa>().handle(empresa, HttpStatus.OK);
        } else {
            return ErrorResponse.handle(new String[] {NOT_FOUND}, Empresa.class, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/empresasPorRamoNegocio")
    public ResponseEntity<?> getEmpresasByRamoNegocio() {
        List<Map<String, Object>> response = empresaService.getEmpresasPorRamoNegocio();
        return new SuccessResponse<List<Map<String, Object>>>().handle(response, HttpStatus.OK);
    }

    @GetMapping("/findEmpresasByRamoNegocioId/{ramoNegocioId}")
    public ResponseEntity<?> findByCnpj(@PathVariable("ramoNegocioId") Long ramoNegocioId) {
        List<Empresa> empresas = empresaService.findByRamoNegocioId(ramoNegocioId);
        if(empresas != null) {
            return new SuccessResponse<List<Empresa>>().handle(empresas, HttpStatus.OK);
        } else {
            return ErrorResponse.handle(new String[] {NOT_FOUND}, RamoNegocio.class, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Empresa> create(@RequestBody @Valid final Empresa cParams) throws ParseException {
        Empresa empresa = empresaService.create(cParams);
        return new SuccessResponse<Empresa>().handle(empresa, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empresa> update(@RequestBody @Valid Empresa cParams) throws ParseException {
        Empresa empresa = empresaService.update(cParams);
        return new SuccessResponse<Empresa>().handle(empresa, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") long id) {
        Empresa empresa = empresaService.findById(id);
        if (empresa != null) {
            empresaService.delete(empresa);
            return new SuccessResponse<Empresa>().handle(empresa, HttpStatus.OK);
        }
        return ErrorResponse.handle(new String[] {NOT_FOUND}, Empresa.class, HttpStatus.NOT_FOUND);
    }

}
