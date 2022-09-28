package com.projetoviagem.sistemaviagens.repository;


import com.projetoviagem.sistemaviagens.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {

}
