package com.projetoviagem.sistemaviagens.repository;


import com.projetoviagem.sistemaviagens.model.Viagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViagemRepository extends JpaRepository<Viagem, Integer> {

}
