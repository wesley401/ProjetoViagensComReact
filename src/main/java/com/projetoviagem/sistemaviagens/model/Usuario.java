package com.projetoviagem.sistemaviagens.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue
    private UUID id;

    private String nome;

    private String login;

    private String senha;

    @ManyToMany
    private List<Role> roles;
}

