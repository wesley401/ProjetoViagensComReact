package com.projetoviagem.sistemaviagens.controller;


import com.projetoviagem.sistemaviagens.model.GuiaTuristico;
import com.projetoviagem.sistemaviagens.service.GuiaTuristicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guiaturistico")
public class GuiaTuristicoController {

    @Autowired
    private GuiaTuristicoService guiaTuristicoService;

    @PostMapping("/add")
    public String add(@RequestBody GuiaTuristico guiaTuristico){
        guiaTuristicoService.salvarGuiaTuristicos(guiaTuristico);
        return "novo estudante foi adicionado";
    }
    @GetMapping("/getAll")
    public List<GuiaTuristico> getAllGuiaTuristicos(){
        return  guiaTuristicoService.getAllGuiaTuristicos();
    }
}
