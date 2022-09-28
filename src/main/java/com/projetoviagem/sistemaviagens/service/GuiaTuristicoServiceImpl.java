package com.projetoviagem.sistemaviagens.service;


import com.projetoviagem.sistemaviagens.model.GuiaTuristico;
import com.projetoviagem.sistemaviagens.repository.GuiaTuristicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuiaTuristicoServiceImpl implements GuiaTuristicoService{

    @Autowired
    private GuiaTuristicoRepository guiaTuristicoRepository;

    @Override
    public GuiaTuristico salvarGuiaTuristicos(GuiaTuristico guiaTuristico) {
        return guiaTuristicoRepository.save(guiaTuristico);
    }

    @Override
    public List<GuiaTuristico> getAllGuiaTuristicos() {
        return guiaTuristicoRepository.findAll();
    }
}
