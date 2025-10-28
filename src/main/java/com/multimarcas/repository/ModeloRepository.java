package com.multimarcas.repository;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    //Optional<Modelo> findById(Long id);
    
    // Remove registros pelo nome e retorna a quantidade excluida
    long deleteByNome(String nome);

    // Verifica se existem veículos associados ao modelo
    @Query("SELECT CASE WHEN COUNT(v) > 0 THEN true ELSE false END FROM Veiculo v WHERE v.modelo.id = :modeloId")
    boolean temVeiculosAssociados(@Param("modeloId") long modeloId);
}
