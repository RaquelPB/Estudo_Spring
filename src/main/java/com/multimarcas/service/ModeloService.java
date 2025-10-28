package com.multimarcas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.multimarcas.dto.ModeloDTO;
import com.multimarcas.entity.Modelo;
import com.multimarcas.mapper.ModeloMapper;
import com.multimarcas.repository.ModeloRepository;



@Service
public class ModeloService {
    
    @Autowired
    private ModeloRepository repository;

    @Transactional(readOnly = true)
    public List<ModeloDTO> listar(){
        return ModeloMapper.toDTOList(repository.findAll());
    }

    @Transactional(readOnly = true)
    public ModeloDTO buscarPorId(Long id){
        return repository.findById(id)
                .map(ModeloMapper::tDto)
                .orElseThrow(() -> new RuntimeException("Modelo com ID " + id + " não encontrado."));
    }
    

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

    @Transactional
    public ModeloDTO atualizar(Long id, ModeloDTO dto) {
         Modelo existente =  repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Modelo não encontrado."));
            existente.setNome(dto.getNome());
            existente.setFabricante(dto.getFabricante());
            return ModeloMapper.tDto(repository.save(existente));
    }

    @Transactional
    public void deletar(Long id){
        if (!repository.existsById(id)) {
            throw new RuntimeException("Modelo não encontrado.");
        }

        // Verifica se existem veículos associados ao modelo
        //if (repository.temVeiculosAssociados(id)) {
       //     throw new RuntimeException("Não é possível deletar o modelo, existem veículos associados a ele.");
       // }

        repository.deleteById(id);
    }

}
