package com.projetoviagem.sistemaviagens.controller;


import com.projetoviagem.sistemaviagens.model.Viagem;
import com.projetoviagem.sistemaviagens.service.ViagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/viagem")
@CrossOrigin
public class ViagemController {

    @Autowired
    private ViagemService viagemService;

    @PostMapping("/add")
    public String add(@RequestBody Viagem viagem){
        viagemService.salvarViagens(viagem);
        return "nova Viagem foi adicionada";
    }
    @GetMapping("/getAll")
    public List<Viagem> getAllViagens(){
        return  viagemService.getAllViagens();
    }
}
