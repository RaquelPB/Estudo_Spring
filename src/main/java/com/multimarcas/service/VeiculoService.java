package com.multimarcas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multimarcas.dto.VeiculoDTO;
import com.multimarcas.entity.Veiculo;
import com.multimarcas.mapper.VeiculoMapper;
import com.multimarcas.repository.VeiculoRepository;

import jakarta.transaction.Transactional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository repository;

    @Transactional
    public VeiculoDTO criar(VeiculoDTO dto){

        if (dto.getId() != null) {
            throw new IllegalArgumentException("Novo veículo não deve ter ID definido.");
        }

        if (repository.existsById(dto.getId())) {
            throw new IllegalArgumentException("Já existe um veículo com O ID cadastrado: " + dto.getId()); 
        }

        Veiculo salvo = repository.save(VeiculoMapper.toEntity(dto));
        dto.setId(salvo.getId());
        return dto;
    }
    
}
