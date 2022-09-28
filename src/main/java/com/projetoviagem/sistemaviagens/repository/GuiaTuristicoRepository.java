package com.projetoviagem.sistemaviagens.repository;

import com.projetoviagem.sistemaviagens.model.GuiaTuristico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuiaTuristicoRepository extends JpaRepository<GuiaTuristico, Integer> {

}
