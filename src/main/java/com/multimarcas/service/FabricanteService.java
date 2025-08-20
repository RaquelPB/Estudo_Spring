package com.multimarcas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multimarcas.dto.FabricanteDTO;
import com.multimarcas.entity.Fabricante;
import com.multimarcas.mapper.FabricanteMapper;
import com.multimarcas.repository.FabricanteRepository;

import jakarta.transaction.Transactional;

@Service
public class FabricanteService {

    @Autowired
    private FabricanteRepository repository;


    @Transactional
    public FabricanteDTO criar(FabricanteDTO dto) {

        if (dto.getId() != null) {
            throw new IllegalArgumentException("Novo fabricante não deve ter ID definido.");
        }

        // Verifica se já existe um fabricante com o mesmo nome
        if (repository.existsByNome(dto.getNome())) {
            throw new IllegalArgumentException("Já existe um fabricante com o nome: " + dto.getNome());
        }

        
        // Retorna o DTO convertido da entidade salva
        Fabricante salvo = repository.save(FabricanteMapper.toEntity(dto));

        dto.setId(salvo.getId());
        return dto;
    }
}
