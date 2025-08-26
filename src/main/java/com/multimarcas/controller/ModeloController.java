package com.multimarcas.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping
    public ResponseEntity<ModeloDTO> criar(@RequestBody ModeloDTO dto){
        ModeloDTO criado = service.criar(dto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(criado.getId())
                .toUri();
        return ResponseEntity.created(location).body(criado);
    }

}
