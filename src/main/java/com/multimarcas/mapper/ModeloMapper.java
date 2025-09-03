package com.multimarcas.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.multimarcas.dto.ModeloDTO;
import com.multimarcas.entity.Fabricante;
import com.multimarcas.entity.Modelo;


public class ModeloMapper {
    
    private ModeloMapper() {
    }

    /**
     *
     * @param entity 
     * @return 
     */

    public static ModeloDTO tDto(Modelo entity){
        if(entity == null) return null;

        Fabricante fabricante =  new Fabricante();
        fabricante.setId(entity.getFabricante().getId());
        
        return new ModeloDTO(entity.getId(), entity.getNome(), fabricante);
    }

     /**
     * 
     * @param entity 
     * @return 
     */

    public static Modelo toEntity(ModeloDTO dto){
        if(dto == null) return null;

        Modelo m = new Modelo();
        m.setId(dto.getId());
        m.setNome(dto.getNome());
        m.setFabricante(dto.getFabricante());

        return m;
    }

    public static List<ModeloDTO> toDTOList(List<Modelo> list) {
        return list == null ? 
            List.of() :
            list.stream().map(ModeloMapper::tDto).collect(Collectors.toList());
    }

    public static List<Modelo> toEntyList(List<ModeloDTO> list) {
        return list == null ? 
            List.of() :
            list.stream().map(ModeloMapper::toEntity).collect(Collectors.toList());
    }
}
