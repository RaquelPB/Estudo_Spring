package com.multimarcas.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.multimarcas.entity.Modelo;


@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Long> {
    
    
    /**
     * 
     *
     * @param nome 
     * @return 
     */
    boolean existsByNome(String nome);
    boolean existsByFabricanteId(Long fabricanteId);
    
}
