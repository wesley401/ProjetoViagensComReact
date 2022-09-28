package com.projetoviagem.sistemaviagens.controller;

import com.projetoviagem.sistemaviagens.model.Usuario;
import com.projetoviagem.sistemaviagens.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/add")
    public String add(@RequestBody Usuario usuario){
        usuarioService.salvarUsuario(usuario);
        return "novo estudante foi adicionado";
    }
    @GetMapping("/getAll")
    public List<Usuario> getAllUsuarios(){
        return  usuarioService.getAllUsuarios();
    }
}
