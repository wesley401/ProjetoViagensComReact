package com.projetoviagem.sistemaviagens.controller;

import com.projetoviagem.sistemaviagens.model.Veiculo;
import com.projetoviagem.sistemaviagens.service.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/veiculo")
@CrossOrigin
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    @PostMapping("/add")
    public String add(@RequestBody Veiculo veiculo){
        veiculoService.salvarVeiculos(veiculo);
        return "novo estudante foi adicionado";
    }
    @GetMapping("/getAll")
    public List<Veiculo> getAllUsuarios(){
        return  veiculoService.getAllVeiculos();
    }
}
