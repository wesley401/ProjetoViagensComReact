package com.projetoviagem.sistemaviagens.security;

import com.projetoviagem.sistemaviagens.model.Usuario;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UsuarioPrincipal implements UserDetails {
    private String nome;
    private String senha;
    private Collection<? extends GrantedAuthority> authorities;

    public UsuarioPrincipal(Usuario usuario){
        this.nome = usuario.getNome();
        this.senha = usuario.getSenha();
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
       authorities = usuario.getRoles().stream().map(role -> {
            return new SimpleGrantedAuthority("ROLE_".concat(role.getNome()));
        }).collect(Collectors.toList());
       this.authorities = authorities;
    }
    public static UsuarioPrincipal create(Usuario usuario){
        return new UsuarioPrincipal(usuario);
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return nome;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
