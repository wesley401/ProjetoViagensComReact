package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.Usuario;
import com.projetoviagem.sistemaviagens.repository.UsuarioRepository;
import com.projetoviagem.sistemaviagens.security.UsuarioPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomDetailsService implements UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException {
       Usuario existeUsuario = usuarioRepository.findBynomeFetchRoles(nome);
       if(existeUsuario != null){
           throw new Error("Usuario ja existe!");
       }
       return UsuarioPrincipal.create(existeUsuario);
    }
}
