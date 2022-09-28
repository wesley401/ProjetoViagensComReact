package com.projetoviagem.sistemaviagens.controller;

import com.projetoviagem.sistemaviagens.model.Passageiro;
import com.projetoviagem.sistemaviagens.service.PassageiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/passageiro")
@CrossOrigin
public class PassageiroController {

    @Autowired
    private PassageiroService passageiroService;

    @PostMapping("/add")
    public String add(@RequestBody Passageiro passageiro){
        passageiroService.salvarPassageiros(passageiro);
        return "novo passageiro foi adicionado";
    }
    @GetMapping("/getAll")
    public List<Passageiro> getAllPassageiros(){
        return  passageiroService.getAllPassageiros();
    }
}
