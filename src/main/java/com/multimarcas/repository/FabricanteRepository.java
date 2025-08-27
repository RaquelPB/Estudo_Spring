package com.multimarcas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multimarcas.entity.Fabricante;

/**
 * Interface FabricanteRepository:
 * Responsável por realizar operações de acesso a dados (CRUD) para a entidade Fabricante.
 * Extende JpaRepository, que fornece métodos prontos para manipulação de dados no banco.
 */
@Repository
public interface FabricanteRepository extends JpaRepository<Fabricante, Long> {

    /**
     * Método customizado para verificar se existe um Fabricante com o nome especificado.
     * @param nome Nome do fabricante a ser verificado.
     * @return true se existir um fabricante com o nome fornecido, false caso contrário.
     */
    boolean existsByNome(String nome);
    String findByNome(String nome);
    String findById(long id);
    String findByPaisOrigem(String paisOrigem);
}
