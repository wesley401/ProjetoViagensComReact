package com.projetoviagem.sistemaviagens.repository;

import com.projetoviagem.sistemaviagens.model.Passageiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassageiroRepository extends JpaRepository<Passageiro, Integer> {

}
