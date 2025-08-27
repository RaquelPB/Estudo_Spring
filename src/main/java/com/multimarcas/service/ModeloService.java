package com.multimarcas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multimarcas.dto.ModeloDTO;
import com.multimarcas.entity.Modelo;
import com.multimarcas.mapper.ModeloMapper;
import com.multimarcas.repository.ModeloRepository;

import jakarta.transaction.Transactional;

@Service
public class ModeloService {
    
    @Autowired
    private ModeloRepository repository;


    @Transactional
    public ModeloDTO criar(ModeloDTO dto){

        if (dto.getId() != null) {
            throw new IllegalArgumentException("Novo modelo não deve ter ID definido.");
        }

        if (repository.existsByNome(dto.getNome())) {
            throw new IllegalArgumentException("Já existe um modelo com o nome: " + dto.getNome()); 
        }


        Modelo salvo = repository.save(ModeloMapper.toEntity(dto));
        dto.setId(salvo.getId());
        return dto;
    }
}
