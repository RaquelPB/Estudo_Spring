package com.multimarcas.mapper;

import com.multimarcas.dto.FabricanteDTO;
import com.multimarcas.entity.Fabricante;

/**
 * Classe utilitária para mapear entre Fabricante (entidade) e FabricanteDTO (objeto de transferência de dados).
 * É uma classe final para evitar herança e possui um construtor privado para impedir instâncias.
 */
public final class FabricanteMapper {
    
    // Construtor privado para evitar instâncias da classe
    private FabricanteMapper() {
    }

    /**
     * Converte uma entidade Fabricante em um DTO FabricanteDTO.
     * @param entity Objeto do tipo Fabricante (entidade).
     * @return Objeto do tipo FabricanteDTO ou null se a entidade for null.
     */
    public static FabricanteDTO toDto(Fabricante entity) {
        if (entity == null) return null;

        // Cria e retorna um DTO com os dados da entidade
        return new FabricanteDTO(entity.getId(), entity.getNome(), entity.getPaisOrigem());
    }

    /**
     * Converte um DTO FabricanteDTO em uma entidade Fabricante.
     * @param dto Objeto do tipo FabricanteDTO.
     * @return Objeto do tipo Fabricante ou null se o DTO for null.
     */
    public static Fabricante toEntity(FabricanteDTO dto) {
        if (dto == null) return null;

        // Cria uma nova entidade Fabricante e preenche os dados a partir do DTO
        Fabricante f = new Fabricante();
        f.setId(dto.getId());
        f.setNome(dto.getNome());
        f.setPaisOrigem(dto.getPaisOrigem());

        return f;
    }
}
