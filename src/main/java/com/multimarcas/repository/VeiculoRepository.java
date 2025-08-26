package com.multimarcas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import com.multimarcas.entity.Veiculo;


@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

     /**
     * 
     *
     * @param id 
     * @return 
     */
    boolean existsById(@NonNull Long id);
}
