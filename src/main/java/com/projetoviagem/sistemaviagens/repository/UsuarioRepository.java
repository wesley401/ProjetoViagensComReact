package com.projetoviagem.sistemaviagens.repository;

import com.projetoviagem.sistemaviagens.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {
    Usuario findBynome(String nome);
    @Query("SELECT u from Usuario u JOIN FETCH u.roles where u.nome = :nome")
    @Modifying
    Usuario findBynomeFetchRoles(@Param("nome") String nome);
}
