package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Usuario;

import java.util.List;

public interface UsuarioService {
    public Usuario salvarUsuario(Usuario usuario);
    public List<Usuario> getAllUsuarios();
}
