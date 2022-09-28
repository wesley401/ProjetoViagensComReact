package com.projetoviagem.sistemaviagens.service;

import com.projetoviagem.sistemaviagens.model.GuiaTuristico;

import java.util.List;

public interface GuiaTuristicoService {

        public GuiaTuristico salvarGuiaTuristicos(GuiaTuristico guiaTuristico);
        public List<GuiaTuristico> getAllGuiaTuristicos();
    }
