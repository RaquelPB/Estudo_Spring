package com.multimarcas.controller;


import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.multimarcas.dto.FabricanteDTO;
import com.multimarcas.service.FabricanteService;

@RestController
@RequestMapping("/api/fabricantes")
public class FabricanteController {

    @Autowired
    private  FabricanteService service;


    @PostMapping
    public ResponseEntity<FabricanteDTO> criar(@RequestBody FabricanteDTO dto) {
        // Chama o serviço para criar um novo fabricante e retorna o DTO criado
        FabricanteDTO criado = service.criar(dto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(criado.getId())
                .toUri();
        return ResponseEntity.created(location).body(criado);
    }

}
