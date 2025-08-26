package com.multimarcas.mapper;

import com.multimarcas.dto.VeiculoDTO;
import com.multimarcas.entity.Modelo;
import com.multimarcas.entity.Veiculo;

public class VeiculoMapper {

    private VeiculoMapper() {
    }

    /**
     *
     * @param entity 
     * @return 
     */

    public static VeiculoDTO tDto(Veiculo entity){
        if (entity == null) return null;
        
        Modelo modelo = new Modelo();
        modelo.setId(entity.getModelo().getId());

        return new VeiculoDTO(entity.getId(), entity.getPlaca(), entity.getCor(), entity.getAno(), entity.getDescricao(), entity.getDataCadastro(), modelo);
            
    }

    /**
     * 
     * @param entity 
     * @return 
     */
    
    public static Veiculo toEntity(VeiculoDTO dto){
        if(dto == null) return null;

        Veiculo veiculo = new Veiculo();
        veiculo.setId(dto.getId());
        veiculo.setPlaca(dto.getPlaca());
        veiculo.setCor(dto.getCor());
        veiculo.setAno(dto.getAno());
        veiculo.setDescricao(dto.getDescricao());
        veiculo.setDataCadastro(dto.getDataCadastro());
        veiculo.setModelo(dto.getModelo());

        return veiculo;
    }

}
    

