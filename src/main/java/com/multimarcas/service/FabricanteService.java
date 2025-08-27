package com.multimarcas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.multimarcas.dto.FabricanteDTO;
import com.multimarcas.entity.Fabricante;
import com.multimarcas.mapper.FabricanteMapper;
import com.multimarcas.repository.FabricanteRepository;



@Service
public class FabricanteService {

    @Autowired
    private FabricanteRepository repository;

    @Transactional(readOnly = true)
    public List<FabricanteDTO> listar(){
        return FabricanteMapper.toDTOList(repository.findAll());
    }

    @Transactional(readOnly = true)
    public FabricanteDTO buscarPorId (Long id){
        return repository.findById(id)
                .map(FabricanteMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Fabricante com ID " + id + " não encontrado."));

    }


    @Transactional
    public FabricanteDTO criar(FabricanteDTO dto) {

        if (dto.getId() != null) {
            throw new IllegalArgumentException("Novo fabricante não deve ter ID definido.");
        }

        if (repository.existsByNome(dto.getNome())) {
            throw new IllegalArgumentException("Já existe um fabricante com o nome: " + dto.getNome());
        }

        
        Fabricante salvo = repository.save(FabricanteMapper.toEntity(dto));

        dto.setId(salvo.getId());
        return dto;
    }
}
