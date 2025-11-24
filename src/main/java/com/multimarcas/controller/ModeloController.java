package com.multimarcas.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.multimarcas.dto.ModeloDTO;
import com.multimarcas.service.ModeloService;

@RestController
@RequestMapping("/api/modelos")
public class ModeloController {
    
    @Autowired
    private ModeloService service;

    @GetMapping
    public List<ModeloDTO> listar(){
        return service.listar();
    }

    @GetMapping("/{id}")
    public ModeloDTO buscar(Long id){
        return service.buscarPorId(id);
    }

    @PostMapping
    public ResponseEntity<ModeloDTO> criar(@RequestBody ModeloDTO dto){
        ModeloDTO criado = service.criar(dto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(criado.getId())
                .toUri();
        return ResponseEntity.created(location).body(criado);
    }

    @PutMapping("/{id}")
    public ModeloDTO atualizar(Long id, @RequestBody ModeloDTO dto){
        return service.atualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
